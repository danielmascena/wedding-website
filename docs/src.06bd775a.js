parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"BrLT":[function(require,module,exports) {
module.exports={env:{CONTENTFUL_SPACE_ID:"glv5vvf55jiq",CONTENTFUL_ACCESS_TOKEN:"l8M3azNCTjms7SXHHdli8KkIgOOddch8yXDoIHShnpE"}};
},{}],"ZYOL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../config.json"));function t(e){return e&&e.__esModule?e:{default:e}}var n=function(t,n){var o=e.default.env.CONTENTFUL_SPACE_ID,r=e.default.env.CONTENTFUL_ACCESS_TOKEN,u=new XMLHttpRequest;u.open("GET","".concat("https://cdn.contentful.com","/spaces/").concat(o,"/entries?access_token=").concat(r)),u.onreadystatechange=function(){if(4===u.readyState&&200===u.status){var e=JSON.parse(u.responseText);console.log(e),t(e)}},n&&(u.onloadstart=function(e){return requestAnimationFrame(function(e){return n.removeAttribute("hidden")})},u.onerror=function(e){return console.log(e)},u.onloadend=function(e){return requestAnimationFrame(function(e){return n.setAttribute("hidden","true")})}),u.send()},o=n;exports.default=o;
},{"../config.json":"BrLT"}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=t(require("./fetchData"));function t(e){return e&&e.__esModule?e:{default:e}}var n=document.getElementById("title-banner"),o=document.querySelector(".loading[hidden]"),r=document.getElementsByClassName("pictures"),i=document.querySelector(".wedding-date"),a=document.querySelector(".section-presentation .presentation"),l=document.querySelector(".navbar"),d=document.querySelector(".info-extra .infos"),s=["Janeiro","Feveiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],c=function(e){var t=0,n=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done);n=!0){var d=a.value.fields.file.url;r[t++].src=d}}catch(s){o=!0,i=s}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}},u=function(e){var t=document.getElementById("main-container"),n=document.getElementsByClassName("section");t.addEventListener("scroll",function(e){var o=t.scrollTop,r=Math.max(document.documentElement.clientWidth,window.innerWidth||0);Math.max(document.documentElement.clientHeight,window.innerHeight||0);r>700&&(o>document.body.offsetHeight-30&&l.classList.contains("top-nav")?l.classList.replace("top-nav","sidebar-nav"):o<document.body.offsetHeight-30&&l.classList.contains("sidebar-nav")&&l.classList.replace("sidebar-nav","top-nav"));var i=!0,a=!1,d=void 0;try{for(var s,c=n[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var u=s.value;u.offsetTop-window.outerHeight/2<=o&&u.classList.add("animate")}}catch(m){a=!0,d=m}finally{try{i||null==c.return||c.return()}finally{if(a)throw d}}})};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",u):u(),(0,e.default)(function(e){var t=e.items,o=e.includes,r=t[0].fields.imagesLandingPage.map(function(e){return e.sys.id});c(o.Asset.filter(function(e){return r.includes(e.sys.id)})),n.parentElement.style.backgroundImage="url('".concat(o.Asset[1].fields.file.url,"')"),n.textContent=t[0].fields.blogText,a.textContent=t[0].fields.generalBlogText,d.textContent=t[0].fields.generalBlogText;var l=t[0].fields.dateOfWedding,u=new Date(l);i.setAttribute("datetime",l),i.textContent=u.getDate()+" de "+s[u.getMonth()]},o),window.goToSection=function(e){window.event.preventDefault(),document.getElementById(e).scrollIntoView()};
},{"./styles.css":"D9Nj","./fetchData":"ZYOL"}]},{},["H99C"], null)
//# sourceMappingURL=/src.06bd775a.js.map