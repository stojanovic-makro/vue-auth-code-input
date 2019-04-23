!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).VueAuthCodeInput={})}(this,function(e){"use strict";var t=Array.from({length:10},function(e,t){return t+""}),n={name:"VueAuthCodeInput",props:{codeLength:{type:Number,default:6}},computed:{codeArray:function(){return Array.from({length:this.codeLength},function(){return""})}},methods:{handlePress:function(e,n){var o=this.$refs.authcode_input[n].value;t.indexOf(e.key)>-1?(this.updateCodeArray(n,e.key),this.switchFocusAndSelect(n,1)):["ArrowRight","Tab"].indexOf(e.key)>-1?this.switchFocusAndSelect(n,1):["ArrowLeft"].indexOf(e.key)>-1?this.switchFocusAndSelect(n,-1):["Backspace"].indexOf(e.key)>-1&&(o?this.updateCodeArray(n,""):this.switchFocusAndClear(n,-1))},updateCodeArray:function(e,t){this.$refs.authcode_input[e].value=t,this.codeArray.splice(e,1,t),this.$emit("inputChange",this.codeArray,e),this.codeArray.every(Boolean)&&this.$emit("inputComplete",this.codeArray,e)},switchFocusAndSelect:function(e,t){void 0===t&&(t=1),this.$refs.authcode_input[e+t]&&this.$refs.authcode_input[e+t].select()},switchFocusAndClear:function(e,t){void 0===t&&(t=1),this.$refs.authcode_input[e+t]&&(this.$refs.authcode_input[e+t].value="",this.codeArray.splice(e+t,1,""),this.$refs.authcode_input[e+t].focus())}}};var o=function(e,t,n,o,i,a,s,r,d,u){"boolean"!=typeof s&&(d=r,r=s,s=!1);var c,l="function"==typeof n?n.options:n;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),o&&(l._scopeId=o),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):t&&(c=s?function(){t.call(this,u(this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),c)if(l.functional){var f=l.render;l.render=function(e,t){return c.call(t),f(e,t)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return n},i="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var a=document.head||document.getElementsByTagName("head")[0],s={};var r=o({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth-code_container"},e._l(e.codeArray,function(t,o){return n("div",{key:o,staticClass:"auth-code_input-box",style:{"margin-left":(0===o?0:e.codeLength/2===o?18:6)+"px"}},[n("input",{ref:"authcode_input",refInFor:!0,staticClass:"auth-code_input",attrs:{type:"text"},on:{keydown:function(t){return t.preventDefault(),e.handlePress(t,o)}}})])}),0)},staticRenderFns:[]},function(e){e&&e("data-v-a997a0fe_0",{source:".auth-code_container[data-v-a997a0fe]{display:flex;justify-content:center}.auth-code_input-box[data-v-a997a0fe]{width:49px;height:49px}.auth-code_input[data-v-a997a0fe]{width:45px;height:45px;line-height:45px;font-size:24px;padding:0;text-align:center;color:#494949;font-weight:400;border:1px solid #d6d6d6;border-radius:4px;background:#fff;box-sizing:border-box;-webkit-appearance:none}.auth-code_input[data-v-a997a0fe]:focus{outline:0;border:1px solid #97cee5;box-shadow:0 0 0 3px rgba(131,192,253,.5)}",map:void 0,media:void 0})},n,"data-v-a997a0fe",!1,void 0,function(e){return function(e,t){return function(e,t){var n=i?t.media||"default":e,o=s[n]||(s[n]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var r=t.source;if(t.map&&(r+="\n/*# sourceURL="+t.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),a.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(r),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var d=o.ids.size-1,u=document.createTextNode(r),c=o.element.childNodes;c[d]&&o.element.removeChild(c[d]),c.length?o.element.insertBefore(u,c[d]):o.element.appendChild(u)}}}(e,t)}},void 0);function d(e){d.installed||(d.installed=!0,e.component("VueAuthCodeInput",r))}var u={install:d},c=null;"undefined"!=typeof window?c=window.Vue:"undefined"!=typeof global&&(c=global.Vue),c&&c.use(u),r.install=d,e.default=r,Object.defineProperty(e,"__esModule",{value:!0})});