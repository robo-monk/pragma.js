import { Pragma } from "../../../../src/"
import $ from 'jquery'

export function vanillafy(el){
  // pipeline to vanillafy pragma objects to html elements
  if (el instanceof Pragma) el = el.element[0]
  return el
}

export function jqueryfy(el){
  // pipeline to vanillafy pragma objects to html elements
  if (el instanceof Pragma) return el.element
  return $(el)
}
