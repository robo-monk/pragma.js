// mark is responsible for marking words in the screen
import $ from "jquery"
import { Pragma, Comp } from "../../../src"
import { PragmaWord } from "./pragmaWord"
import anime from "animejs"

const defaultStyles = `
  position absolute
  outline solid 0px red
  background-color #ffdf6c
  width 10px
  height 20px
  z-index 10
  opacity 1
  mix-blend-mode darken
  border-radius 3px
`
export default class PragmaMark extends Comp {
  constructor(parent) {
    super('marker')

    this.parent = parent
    this.element = $("<marker></marker>")
    console.log(this.element)
    this.parent.element.append(this.element)
    this.css(defaultStyles)
    //this.parent.element.append(this.element)
    this.currentlyMarking = null
    //this.element.width("180px")
    this.colors = ["tomato", "#FFDFD6", "teal"]

    $(window).on("resize", () => {
      this.mark(this.last_marked, 0)
    })
  }

  setWidth(n) {
    this.element.width(n)
    return this
  }

  get settings() { return this.parent.settings }

  set color(hex) {
    return 
    this.settings.set({ "color": this.colors[index] })
    this.element.css({ "background": this.colors[index] })
  }
  get cw() {
    return this.fovea * 30
  }
  get fovea() {
    return this.settings.get("fovea") || 4
  }
  set fovea(n) {
    console.table(['writing fovea', this.settings.find("fovea")])
    this.settings.set({ "fovea": n })
    this.element.css({ "width": this.settings.find("fovea") * 30 })
  }

  get wpm() { return this.settings.get("wpm") || 260 }
  set wpm(n) { this.settings.set({ "wpm": n }) }
    
  pause() {
    return new Promise((resolve, reject) => {
      if (this.pausing) return reject("already pausing")
      
      this.pausing = true

      if (this.currentlyMarking && this.current_anime && this.last_marked) {
        //console.log(this.current_anime.seek(1))
        let temp = this.last_marked
        //console.table(temp)
        this.current_anime.complete()
        this.current_anime.remove('marker')
        //this.current_anime = null
        this.mark(temp, 80, true).then(() => {
          this.pausing = false
          resolve("paused")
        }).catch(e => {
          this.pausing = false
          reject("could not mark")
        })
      }
    });
  }

  moveTo(blueprint, duration, complete = (() => { })) {
    if (this.currentlyMarking) return new Promise((resolve, reject) => resolve());
    return new Promise((resolve, reject) => {
      this.currentlyMarking = blueprint
      this.current_anime = anime({
        targets: 'marker',
        left: blueprint.left,
        top: blueprint.top,
        height: blueprint.height,
        width: blueprint.width,
        easing: blueprint.ease || 'easeInOutExpo',
        duration: duration,
        complete: (anim) => {
          this.currentlyMarking = null
          complete()
          resolve()
        }
      })
    })
  }


  mark(word, time = 200, fit = false, ease = "easeInOutExpo") {
    if (!(word instanceof Pragma)) return new Promise((r) => { console.warn("cannot mark"); r("error") })
    let w = fit ? word.width() + 5 : this.cw
    //this.setWidth(w)
    return this.moveTo({
      top: word.top(),
      left: word.x(w),
      height: word.height(),
      width: w,
      ease: ease
    }, time, () => {
      // console.log(`FROM MARK -> marked ${word.text()}`)
    })
  }

  guide(word) {
    if (!(word instanceof Pragma)) return new Promise((r) => { console.warn("cannot guide thru"); r("error") })
    const before_weight = .4
    const after_weight = (1 - before_weight)
    return new Promise((resolve, reject) => {
      let first_transition = word.isFirstInLine ? 500 : this.last_marked ? this.last_marked.time(this.wpm) * before_weight : 0
      let first_ease = word.isFirstInLine ? "easeInOutExpo" : "linear"
      return this.moveTo({
        top: word.top(),
        left: word.x(this.width()) - word.width() / 2,
        height: word.height(), ease: first_ease
      }, first_transition)
        .then(() => {
          this.last_marked = word
          this.mark(word, word.time(this.wpm) * after_weight, false, "linear").then(() => {
            resolve()
          })
        })
    })
  }
}
