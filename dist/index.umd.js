!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("tippy.js"),require("mousetrap")):"function"==typeof define&&define.amd?define(["exports","jquery","tippy.js","mousetrap"],e):e((t||self).pragmajs={},t.jquery,t.tippy,t.mousetrap)}(this,function(t,e,i,n){function s(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=s(e),a=s(i),l=s(n);function h(t,e){for(let i=0;i<t.length;i+=1)e(t[i])}const o=(t,e=null,i=["rerun the code 10 times"],n=null)=>{console.error(`%c 🧯 pragma.js  %c \n\n      encountered a soft error 🔫 %c \n\n      \n${n?`Triggered by: [${n.key} ${n}]`:""}\n      \n${t} %c\n\n      \n${null!=e?`Potential ${e}: \n\t${i.join("\n\t")}`:""}\n      `,"font-size:15px","font-size: 12px;","color:whitesmoke","color:white")},u={cssToDict:t=>{t=t.replaceAll("\n",";").replaceAll(":"," ");let e=new Map;for(let i of t.split(";")){if(i.replace(/\s/g,"").length<2)continue;i=i.trim().split(" ");let t=i[0];i.shift(),e.set(t.trim(),i.join(" ").trim())}let i=[];for(const[t,n]of e.entries())CSS.supports(t,n)||i.push(`${t.trim()}: ${n.trim()}`);return i.length>0&&o("CSS syntax error","typos",i),e},css:t=>{let e="";for(let[i,n]of u.cssToDict(t))e+=`${i}:${n};`;return e}};class d{constructor(t=null,e={},i){this.element=r.default(t),this.generate_key(i),this.childMap=new Map,this.setup_listeners(e),IntersectionObserver.default={fill:"shit"}}throw(t,e,i=[]){o(t,e,i,this)}get children(){return Array.from(this.childMap.values())}generate_key(t){this.key=null!=t?t:btoa(Math.random()).substr(10,5)}find(t){if(this.childMap.has(t))return this.childMap.get(t);for(let[e,i]of this.childMap){let e=i.find(t);if(e)return e}}add(t){if(this.childMap.has(t.key))return t.key=t.key+"~",this.add(t);t.parent=this,this.childMap.set(t.key,t)}get kidsum(){return this.childMap.size}get hasKids(){return this.kidsum>0}listen(t){return this.setup_listeners(t),this}setup_listeners(t){Object.entries(t).forEach(([t,e])=>{this.element.on(t,()=>e())})}click(){}text(){return this.element.text()}offset(){return this.element.offset()}left(){return this.offset().left}top(){return this.offset().top}height(){return this.element.height()}width(){return this.element.width()}x(t){return this.left()+this.width()/2-t/2}css(t){return this.element&&this.element.css(Object.fromEntries(u.cssToDict(t))),this}get _isPragma(){return!0}}const c={custom:(t,e=0,i,n)=>new b({key:t,value:e,set:(t,e,i)=>{if(n)return n(t,i,e)}}).as(`<${i}>${e}</${i}>`,t+"-monitor"),simple:(t,e=0,i="p",n=null)=>c.custom(t,e,i,(t,e,i)=>{if(e.element.text(t),n)return n(t,e,i)})},p={action:(t,e,i,n)=>{let s=new b({key:t,icon:e,type:"button",click:i});return n&&s.setTippy(n),s},controls:(t,e,i,n,s)=>{let r=p.action(t+"+",s["+"]||"+",(t,e)=>{e.parent.value+=i}),a=p.action(t+"-",s["-"]||"-",(t,e)=>{e.parent.value+=-i});return c.simple(t,e,"div").prepend(r).append(a)}},f=t=>({key:t.key,value:t.value,type:"choice",element_template:(e,i)=>((e,n,s,r)=>({key:e,type:"button",icon:s,value:n,click:(e,n)=>{(e=>{((t,e,i)=>{t.find(i.key).value=e})(e,i,t)})(e)}}))(t.key,i,t.icon(e,i)),set:(e,i)=>{i&&i.find(t.key)&&(t=>{for(let e of t.children)e.element.removeClass("pragma-active");t.children[t.value].element.addClass("pragma-active")})(i.find(t.key)),t.set(e,i,t.key)},variants:t.variants}),m={simple:(t,e=0,i=420,n)=>{n=n||(e+i)/2;let s=v(t).as(`<input type='range' min=${e} max=${i} value=${n}></input>`).setRange(e,i);return s.element.on("input",()=>{s.value=parseInt(s.element[0].value)}),s},value:(t,e,i,n=0,s)=>{let r=c.simple(t+"_monitor",n,"div"),a=m.simple(t+"_slider",e,i,n),l=v(t).contain(a,r).setRange(e,i);return a.addToChain(t=>{t=parseInt(t),l.value=t}),l.addToChain(t=>{a.element[0].value=t.toString()}),l.chain(r)}},g={attr:(t,e,i,n,s=0)=>new b(f({key:t,value:s,icon:(t,e)=>{let i=n(t,e);return`<div class="${i.type}" style='width:25px;height:25px;border-radius:25px;${i.css}'>${i.html}</div>`},set:(t,n,s)=>{i&&i(e[t],n,s)},variants:e})).setRange(0,e.length-1).setLoop(),color:(t,e,i,n=0)=>g.attr(t,e,i,(t,e)=>({css:`background:${t}`,html:""}),n),font:(t,e,i,n=0)=>g.attr(t,e,i,(t,e)=>({css:`font-family:${t}`,html:"Aa"}),n)},y=(t,e,i,n=null,s=null)=>({key:t,type:e,value:s,icon:i,elements:n}),v=(t,e,i,n="composer")=>new b(t instanceof Object?t:y(t,n,e,i));class k{constructor(t){this.where=t}pragmatize(){h(arguments,t=>{t.pragmatize(this.where)})}}class b extends d{constructor(t,e=null){super(),this.actualValue=null,t instanceof Object?(this.build(t),this.parent=e):this.key=t,this.log_txt="",this.addToChain((t,e,i=this)=>{this.master&&(e.doChain(t,e,i),e.log(`${i.key} -> ${t}`))}),this.append=this.add,this.do=this.addToChain}log(t){this.log_txt=this.log_txt.concat(" | "+t)}doChain(t,e,i=this){if(!this.actionChain)return null;for(let n of this.actionChain)n(t,e,i)}unchain(){return this.actionChain=[],this.addToChain((t,e,i=this)=>{this.master&&(e.doChain(t,e,i),e.log(`${i.key} -> ${t}`))}),this}addToChain(){return this.actionChain||(this.actionChain=[]),h(arguments,t=>{this.actionChain.push(t)}),this}get logs(){return this.log_txt}proc_value(t){if(this.loopingValue)return[this.loopBoundVal(t),!0];let e=this.rangeBoundVal(t);return[e,e==t]}set value(t){let e=this.proc_value(t);this.actualValue=e[0],e[1]&&this.doChain(this.actualValue,this.master)}get value(){return this.actualValue}get master(){return null==this.parent||null==this.parent.parent?this.parent:this.parent.master}get html(){return{class:(t,e=!1)=>(e&&this.element.removeClass(),this.element.addClass(t),this),more:"more cool api capabilities coming soon. Usage: pragma.html.class('lucid').......pragmatize()"}}pragmatize(t){return t instanceof d&&(t=t.element),r.default(t||document.body).append(this.element),this.isAppended=!0,this}chain(t){return this.actionChain=this.actionChain.concat(t.actionChain),this}with(t,e){return this.contain(v(e).as(t))}from(t,e=!1){return t=r.default(t),this.element.remove(),this.element=null,!e&&t.attr("id")&&(this.key=t.attr("id")),this.isAppended=!0,this.as(t,!0)}as(t,e=!1){let i=r.default(t);return e||i.attr("id",this.key),this.element&&this.element.replaceWith(i),this.element=i,this}compose(t=!1,e="div"){return this.as(r.default(document.createElement(e)))}addSilently(){return h(arguments,t=>{super.add(t)}),this}add(){return h(arguments,t=>{super.add(t),t.isAppended||this.element.append(t.element)}),this}prepend(){return h(arguments,t=>{super.add(t),t.isAppended||this.element.prepend(t.element)}),this}buildInside(t){let e=v(t.key+"-composer",null,[t]);this.buildAndAdd(e),this.host(e)}containsKey(t){return this.childMap.has(t)}contain(){return h(arguments,t=>{this.add(t)}),this}setTippy(t,e){return e||(e={allowHTML:e,interactive:!0,theme:"pragma",arrow:!1}),this.tippy=a.default(this.element[0],{content:t,...e}),this}host(){const t=this.key+"-host";let e;return h(arguments,i=>{this.tippy?(e=this.find(t),e.contain(i),this.tippy.destroy()):(e=v(t).contain(i),this.contain(e)),e.element.addClass("pragma-tippy"),this.setTippy(e.element[0])}),this}buildAndAdd(t){let e=new b(t,this);this.add(e)}buildArray(t){for(let e of t)this.buildAndAdd(e)}illustrate(t){return this.icon||(this.icon=r.default(document.createElement("div")),this.icon.addClass("pragma-icon"),this.icon.appendTo(this.element)),this.icon.html(t),this}build(t){this.compose(!0),t.icon&&this.illustrate(t.icon),t.elements&&this.buildArray(t.elements),t.hover_element&&this.buildInside(t.hover_element),t.value&&(this.value=t.value),t.set&&this.addToChain((e,i,n)=>t.set(e,i,n)),null!=t.key&&(this.key=t.key,this.element.attr("id",this.key)),t.type&&(this.type=t.type,this.element.addClass(`pragma-${t.type}`)),t.click&&(this.onclick=()=>{t.click(this.master,this)},this.element.addClass("pragma-clickable"),this.setup_listeners({click:this.onclick})),t.mouseover&&(this.element.addClass("pragma-hoverable"),this.setup_listeners({onmouseover:()=>{t.mouseover(this.master)}})),t.mouseout&&this.setup_listeners({mouseout:()=>{t.mouseover(this.master)}}),t.element&&(this.element=r.default(t.element)),t.element_template&&t.variants&&t.variants.forEach((e,i)=>{let n=t.element_template(e,i);n.type="option",this.buildAndAdd(n)})}dismantle(){return this.children=[],this}leaveUsKidsAlone(){return this.dismantle()}proc_bind_cb(t){return t||(this.onclick?()=>{this.onclick(this.master)}:t=>{t.value+=1})}bind(t,e,i){return e=this.proc_bind_cb(e),l.default.bind(t,()=>e(this),i),this}get allChildren(){if(!this.hasKids)return null;let t=this.children;for(let e of t){let i=e.allChildren;i&&(t=t.concat(i))}return t}get depthKey(){return this.parent?this.parent.depthKey+"<~<"+this.key:this.key}shapePrefix(t=""){let e=`${t}| ${this.type} - ${this.key} \n`;if(this.hasKids){t+="| ";for(let i of this.children)e+=i.shapePrefix(t)}return e}setRange(t,e){return this.rangeAry=[t,e],this}loopBoundVal(t){if(!this.loopingValue)return t;let e=this.loopingValue;return(t=t>e[1]?e[0]:t)<e[0]?e[1]:t}setLoop(t,e){return this.loopingValue=[t||(this.range?this.range[0]:0),e||(this.range?this.range[1]:69)],this}rangeBoundVal(t){return this.range?Math.max(this.range[0],Math.min(t,this.range[1])):t}get range(){return this.rangeAry}get shape(){return this.shapePrefix()}descOf(t){return!!t.find(this.key)}setup_listeners(t){Object.entries(t).forEach(([t,e])=>{this.element.on(t,t=>e(t,this))})}}function w(t,e){t.find("path").each((t,i)=>{const n=(i=r.default(i)).attr("fill");"none"!=n&&"transparent"!=n&&i.attr("fill",e)})}function C(t,e){if(typeof t==typeof e!=="object")return e;for(const[i,n]of Object.entries(e))t[i]=n;return t}t.Bridge=(t,e=[],i=((t,e)=>console.table(t)))=>{let n=v(t.key+"Bridge");return n.do((t,s,r)=>{e.includes(r.key)&&(n.actualValue=function(t){let i={};for(let s of e){let e=t.find(s);e?i[s]=e.value:console.warn(`pragmajs > could not find ${s} in ${t.key}\n        when bridgin through ${n.key}`)}return i}(s),function(t){i(n.value,t)}(r))}),t.chain(n),n.set=e=>{for(let[i,n]of Object.entries(e))t.find(i).value=n},n},t.Button=p,t.Comp=b,t.Compose=v,t.IconBuilder=class{constructor(t,e=null){this.db=t,this.default=e||{fill:"black",width:"18px",height:"18px",viewBox:"0 0 24 24"}}set default(t){this.defaultOptions=C(this.default,t)}get default(){return this.defaultOptions}optionify(t){return"object"==typeof t?C(this.default,t):this.default}grab(t,e){e=this.optionify(e);let i=function(t,e){if(!e)return o(`Icon Database is not defined, while trying to grab [${t}] from [${e}].`,"fixes",["Typo in the file name?","Did you forget to initialize IconBuilder with an icon database?"]);const i=e[t];return i?r.default(i):o(`Could not find ${t}`)}(t,this.db);for(const[t,n]of Object.entries(e))"fill"==t&&w(i,n),i.attr(t,n);return i}build(t,e){return e&&e.skip||dontEnvelope.includes(t)?this.db[t]:this.buildIcon(this.db[t],e)}buildIcon(t,e={}){return`\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="${e.viewBox||this.default.viewBox}" fill="${e.fill||this.default.fill}" \n      width="${e.width||this.default.width}" height="${e.height||this.default.height}" ${e.extra}>\n        ${t}\n      </svg>\n      `}},t.Monitor=c,t.Pragma=d,t.Select=g,t.Slider=m,t.Value=(t,e,i,n,s="value")=>new b(y(t,s,i,n)),t.Variants=(t,e,i,n,s,r)=>new b(f({key:t,value:e,icon:i,set:n,click:s,variants:r})),t.at=t=>{return(e=t)&&"object"==typeof e&&e._isPragma?new k(t.element):new k($(t));var e},t.contain=(t,e)=>(t.contain(e),t),t.host=(t,e)=>t.host(e),t.parse=u,t.pragmatize=(t,e)=>(t.pragmatize(e),t)});
//# sourceMappingURL=index.umd.js.map