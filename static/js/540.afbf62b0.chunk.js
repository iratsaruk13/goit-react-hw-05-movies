"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[540],{713:function(e,n,t){t.d(n,{Hx:function(){return v},Y5:function(){return p},bI:function(){return s},wr:function(){return i},xc:function(){return f}});var r=t(165),a=t(861),c=t(243),u="https://api.themoviedb.org/3",o="e9acf87159af330adc40d01b23a69585",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&include_adult=false&language=en-US&page=1"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},368:function(e,n,t){t(791);var r=t(689),a=t(87),c=t(184);n.Z=function(e){var n=e.movies,t=(0,r.TH)(),u=t.pathname.includes("/movies")?"":"movies/";return(0,c.jsx)("section",{children:(0,c.jsx)("ul",{children:n.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"".concat(u).concat(e.id),state:{from:t},children:e.title})},e.id)}))})})}},540:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(165),a=t(861),c=t(439),u=t(791),o=t(87),i=t(713),s=t(596),p=t(368),f=t(184),v=function(e){var n=e.onSubmit;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.searchQuery.value;t?(n(t),e.target.reset()):s.Am.error("Enter your search query, please")},children:[(0,f.jsx)("input",{type:"text",name:"searchQuery",placeholder:"Enter your search query"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})})},l=function(){var e=(0,u.useState)([]),n=(0,c.Z)(e,2),t=n[0],l=n[1],h=(0,o.lr)(),m=(0,c.Z)(h,2),d=m[0],g=m[1];(0,u.useEffect)((function(){var e,n=null!==(e=d.get("movie"))&&void 0!==e?e:"";function t(){return t=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.bI)(n);case 3:t=e.sent,a=t.results,console.log(a),0===a.length?(s.Am.error("There are no movies matching your query \ud83d\ude3f"),l([])):l(a),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),s.Am.error(e.t0.message),l([]);case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),t.apply(this,arguments)}n&&function(e){t.apply(this,arguments)}(n)}),[d]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(v,{onSubmit:function(e){g({movie:e})}}),(0,f.jsx)(p.Z,{movies:t})]})}}}]);
//# sourceMappingURL=540.afbf62b0.chunk.js.map