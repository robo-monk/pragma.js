// a pragma is defined as a concept, which has an actual physical object "connected"
// with it
import $, { expr } from "jquery"

class Pragma {
  constructor(element=null, listeners={}){
    this.element = $(element)
    this.children = []
    this.childMap = new Map()
    this.setup_listeners(listeners)
  }
  add(spragma){
    this.children.push(spragma)
  }
  get hasKids() { return this.children.length > 0 }
  get kidsum() { return this.children.length }

  setup_listeners(listeners){
    Object.entries(listeners).forEach(([on, cb]) => {
      this.element.on(on, () => cb())
    })
  }
  click(){}

  text(){
    return this.element.text()
  }
  offset(){
    return this.element.offset()
  }
  left(){
    return this.offset().left
  }
  top(){
    return this.offset().top
  }
  height(){
    return this.element.height()
  }
  width(){
    return this.element.width()
  }
  x(relative_width){
    return this.left() + this.width()/2 - relative_width/2
  }
}

export { Pragma as default }