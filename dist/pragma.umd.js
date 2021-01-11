!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).pragma={})}(this,(function(e){"use strict";class t{constructor(){this.actions=new Map}addWithKey(e,t=null){t=t||this.actions.size,this.actions.set(t,e)}add(...e){for(let t of e)this.addWithKey(t)}forAction(e){for(let[t,n]of this.actions)e(t,n)}exec(...e){this.forAction((function(t,n){n(...e)}))}execAs(e,...t){this.forAction((function(n,i){i.bind(e)(...t)}))}}function n(e,t=null,n=["rerun the code 10 times"],i=null,r=!1){if(!w&&!r)return null;console.error(`%c 🧯 pragma.js  %c \n\n      encountered a soft error 🔫 %c \n\n      \n${i?`Triggered by: [${i.key} ${i}]`:""}\n      \n${e} %c\n\n      \n${null!=t?`Potential ${t}: \n\t${n.join("\n\t")}`:""}\n      `,"font-size:15px","font-size: 12px;","color:whitesmoke","color:white")}function i(){console.log("%c 🌴 [pragma] \n\n      ","font-size:12px; color:#86D787;",...arguments,"\n")}function r(){return btoa(Math.random()).substr(10,5)}function s(e,t,n=!1){for(let[n,i]of Object.entries(t))e[n]=i;return e}function o(e,n){let i=`${e}Chain`,r=`on${e.capitalize()}`,s=`is${e.capitalize()}ed`;n[i]=new t,n[i].add((()=>{n[s]=!0})),n[r]=function(e){if(console.log(n[s],r),n[s])return e(n);n[i].add(e)}}function l(e,...t){for(let n of t)o(n,e)}String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};const a=e=>e.replace(/[^a-z0-9]/gi,"-").toLowerCase();window.pragma||(window.pragma={}),l(window.pragma,"docLoad");const h=window.pragma.onDocLoad;function c(){window.pragma.isDocLoaded||(i("📰 document is loaded."),window.pragma.docLoadChain.exec())}document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&c()})),document.addEventListener("turbolinks:load",(()=>{i("🚀 TURBOLINKS loaded"),c()}));var d=/[#.]/g;function u(e,t="div"){var n=e||"",i={},r=0;let s,o,l;for(;r<n.length;)d.lastIndex=r,l=d.exec(n),s=n.slice(r,l?l.index:n.length),s&&(o?"#"===o?i.id=s:i.class?i.class.push(s):i.class=[s]:i.tag=s,r+=s.length),l&&(o=l[0],r++);return i}function f(e,t){if(!Array.isArray(e))return n(`Could not add class [${e}] to [${t}]`);for(let n of e){let e=n.split(" ");e.length>1?f(e,t):t.classList.add(n)}}function p(e){let t=document.querySelector(e);if(t)return t;let n=u(e),i=document.createElement(n.tag||"div");return n.id&&(i.id=n.id),n.class&&f(n.class,i),i}function m(e){return e instanceof HTMLElement?e:"string"==typeof e?p(e):n(`Could not find/create element from [${e}]`)}const g={html:(e,t)=>{t.innerHTML=e},pcss:(e,t)=>{for(let[i,r]of y.cssToDict(e))t.style[(n=i,n.replace(/([-_]\w)/g,(e=>e[1].toUpperCase())))]=r;var n}},y={cssToDict:e=>{e=e.replaceAll("\n",";").replaceAll(":"," ");let t=new Map;for(let n of e.split(";")){if(n.replace(/\s/g,"").length<2)continue;n=n.trim().split(" ");let e=n[0];n.shift(),t.set(e.trim(),n.join(" ").trim())}let i=[];for(const[e,n]of t.entries())CSS.supports(e,n)||i.push(`${e.trim()}: ${n.trim()}`);return i.length>0&&n("CSS syntax error","typos",i),t},css:e=>{let t="";for(let[n,i]of y.cssToDict(e))t+=`${n}:${i};`;return t},html:e=>e},w="development"===process.env.NODE_ENV;var C=Object.freeze({__proto__:null,_deving:w,throwSoft:n,log:function(){if(!w&&!force)return null;console.log(...arguments)},suc:i,whenDOM:h,parseQuery:u,addClassAryTo:f,selectOrCreateDOM:p,elementFrom:m,toHTMLAttr:a,generateRandomKey:r,objDiff:s,_extend:function(e,t){Object.setPrototypeOf(e,s(Object.getPrototypeOf(e),t))},createEventChains:l,parse:y,apply:g});function M(e){if(null==e||null==e)return n(`Could not find a DOM element for ${e}`);if(e.element)return M(e.element);return m(e)}function $(e,t){let n=m(e);return n instanceof HTMLElement&&(n.init(),n._render()),"string"==typeof t&&n.html(t),n}const b={init:function(){this.isPragmaElement=!0,l(this,"docLoad","render"),h((()=>this.docLoadChain.exec(this)))},_render:function(){this.renderChain.exec(this)},appendTo:function(e){return this.onDocLoad((()=>{console.log("appending",this,to,M(e)),M(e).appendChild(this),this._render()})),this},append:function(e){return this.onRender((()=>{let t=M(e);this.appendChild(t)})),this},css:function(e){return this.onRender((()=>{g.pcss(e,this)})),this},html:function(e){return this.onRender((()=>{g.html(e,this)})),this},setId:function(e){return this.id=e,this},addClass:function(...e){return f(e,this),this},listenTo:function(...e){return this.onRender((()=>{this.addEventListener(...e)})),this}};for(let[e,t]of Object.entries(b))HTMLElement.prototype[e]=t;const v={parent:(e,t)=>{e.parent=t},value:(e,t)=>{e.value=t},id:(e,t)=>{e.id=t},class:(e,t)=>{e._class=t},element:(e,t)=>{if(!(t instanceof HTMLElement))return throwSoft(`Could not add ${t} as the element of [${e}]`);e.element=t},children:(e,t)=>{if(t.constructor==Array)return e.buildAry(t);e.build(t)},childTemplate:(e,t)=>{}};class x extends class{constructor(e){this.childMap=new Map,this.key=e||r(),this.containsKey=this.childMap.has}get kidsum(){return this.childMap.size}get hasKids(){return this.kidsum>0}get shape(){return this.shapePrefix()}get master(){return null==this.parent||null==this.parent.parent?this.parent:this.parent.master}get children(){return Array.from(this.childMap.values())}get depthKey(){return this.parent?this.parent.depthKey+"<~<"+this.key:this.key}get allChildren(){if(!this.hasKids)return null;let e=this.children;for(let t of e){let n=t.allChildren;n&&(e=e.concat(n))}return e}find(e){if(this.childMap.has(e))return this.childMap.get(e);for(let[t,n]of this.childMap){let t=n.find(e);if(t)return t}}add(e){if(this.childMap.has(e.key))return e.key=e.key+"~",this.add(e);e.parent=this,this.childMap.set(e.key,e)}shapePrefix(e=""){let t=`${e}| ${this.type} - ${this.key} \n`;if(this.hasKids){e+="| ";for(let n of this.children)t+=n.shapePrefix(e)}return t}}{constructor(e,n){super(),this.actionChain=new t,"object"==typeof e?function(e,t){let n=new Map;for(let[i,r]of Object.entries(e))v.hasOwnProperty(i)?v[i](t,r):n.set(i,r);t.element&&t.element.whenInDOM((e=>{for(let[i,r]of n)if(i=i.toLowerCase(),i.includes("on")){let n=i.split("on")[1].trim();e.listenTo(n,(()=>{t.action(r)}))}}))}(e,this):this.key=e,this.key=this.key||r(),this.element=this.element||$(`#${this.id}`)}set value(e){this.v=e,this.exec()}get value(){return this.v}setValue(e){return this.value=e,this}exec(){return this.actionChain.execAs(this,...arguments),this}set id(e){this.key=e,this.element&&(this.element.id=this.id)}get id(){return a(this.key)}buildAry(e){for(let t of e)this.add(new x(t,this));return this}build(...e){return this.buildAry(e)}as(e=null,t=""){return e=e||`div#${this.id}.pragma`,this.element=$(e,t),this}from(e){}do(){return this.actionChain.add(...arguments),this}run(...e){for(let t of e)t.bind(this)();return this}contain(...e){for(let t of e)super.add(t),t.isRendered?throwSoft(`[${t}] is already appended`):this.element.append(t);return this}pragmatize(){return this.element.appendTo(this.parent.element),this}pragmatizeAt(e){return console.log("pragmatizing",this.element,"to",e),this.element.appendTo(e),this}}const T=["listenTo","html","css","addClass","setId"];for(let e of T)x.prototype[e]=function(){return this.element[e](...arguments),this};const L=(new x).as(null,"0");var _=Object.freeze({__proto__:null,Monitor:L});const k=(e,t)=>{let n=new x;return n.element=$(e,t),n.id=n.element.id,n},A=k;e.Pragma=x,e._e=$,e._p=A,e.tpl=_,e.util=C,e.π=k,Object.defineProperty(e,"__esModule",{value:!0})}));
