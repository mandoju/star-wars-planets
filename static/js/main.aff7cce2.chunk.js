(this["webpackJsonpstar-wars-planets"]=this["webpackJsonpstar-wars-planets"]||[]).push([[0],{30:function(e,t,a){e.exports={logo:"style_logo__3n5n8"}},31:function(e,t,a){e.exports={container:"style_container__yiS0z"}},32:function(e,t,a){e.exports={planetCardContainer:"style_planetCardContainer__2EhzA"}},34:function(e){e.exports=JSON.parse('{"title":"Planet","properties":{"diameter":{"type":"string","description":"The diameter of this planet in kilometers."},"films":{"type":"array","description":"An array of Film URL Resources that this planet has appeared in."},"gravity":{"type":"string","description":"A number denoting the gravity of this planet. Where 1 is normal."},"surface_water":{"type":"string","description":"The percentage of the planet surface that is naturally occuring water or bodies of water."},"created":{"description":"The ISO 8601 date format of the time that this resource was created.","type":"string","format":"date-time"},"population":{"type":"string","description":"The average populationof sentient beings inhabiting this planet."},"terrain":{"type":"string","description":"the terrain of this planet. Comma-seperated if diverse."},"climate":{"type":"string","description":"The climate of this planet. Comma-seperated if diverse."},"residents":{"type":"array","description":"An array of People URL Resources that live on this planet."},"name":{"type":"string","description":"The name of this planet."},"edited":{"description":"the ISO 8601 date format of the time that this resource was edited.","type":"string","format":"date-time"},"rotation_period":{"type":"string","description":"The number of standard hours it takes for this planet to complete a single rotation on its axis."},"url":{"description":"The hypermedia URL of this resource.","type":"string","format":"uri"},"orbital_period":{"type":"string","description":"The number of standard days it takes for this planet to complete a single orbit of its local star."}},"required":["name","rotation_period","orbital_period","diameter","climate","gravity","terrain","surface_water","population","residents","films","created","edited","url"],"type":"object","description":"A planet."}')},36:function(e,t,a){e.exports={planetCardContainer:"style_planetCardContainer__11IZ7"}},38:function(e,t,a){e.exports=a(99)},43:function(e,t,a){},44:function(e,t,a){},5:function(e,t,a){e.exports={planetInformationContainer:"style_planetInformationContainer__3w1Rl",animatedText:"style_animatedText__qxBx_",animateright:"style_animateright__2eiM1",planetPopulationClimateTerrainContainer:"style_planetPopulationClimateTerrainContainer__17D6P",featuredTextContainer:"style_featuredTextContainer__K20Bo"}},7:function(e,t,a){e.exports={pageContainer:"style_pageContainer__A6Y_Z",cardContainer:"style_cardContainer__2txXS",buttonContainer:"style_buttonContainer__pSlmO"}},8:function(e,t,a){e.exports={KeyValueContainer:"style_KeyValueContainer__lRS85",labelContainer:"style_labelContainer__3d8-n",valueContainer:"style_valueContainer__2AuOI"}},97:function(e,t,a){e.exports=a.p+"static/media/Starjedi.cc3019aa.ttf"},98:function(e,t,a){e.exports=a.p+"static/media/RobotoRegular.11eabca2.ttf"},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(29),o=a.n(i),l=(a(43),a(44),function(e){var t=e.children;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark"},t)}),s=a(30),c=a.n(s),u=function(e){var t=e.children,a=e.className;return r.a.createElement("h1",a?{className:a}:{},t)},p=function(){return r.a.createElement(u,{className:c.a.logo},"Star Wars Planets")},m=function(){return r.a.createElement(l,null,r.a.createElement(p,null))},d=a(2),f=a.n(d),h=a(4),v=a(6),y=a(7),C=a.n(y),b=function(e,t){return t?"".concat(e," ").concat(t):"".concat(e)},_=a(31),g=a.n(_),E=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:b(g.a.container,a)},t)},x=a(32),N=a.n(x),w=function(){return r.a.createElement(E,{className:b(N.a.planetCardContainer,"bg-secondary")},r.a.createElement("div",{className:"spinner-border text-warning",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},T={name:"planeta",population:"10000",climate:"too hot",terrain:"snowy",films:0},P=function(){},O=r.a.createContext({planet:T,setPlanet:P}),k=a(37),j=a(33),S=a.n(j),R=a(34),I=function(e){return!!new S.a({allErrors:!0}).validate(R,e)},A=a(35),B=a.n(A),K=function(){var e=Object(h.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("https://swapi.co/api/planets/".concat(t,"/"));case 2:if(a=e.sent,n=a.data,!I(n)){e.next=8;break}return e.abrupt("return",Object(k.a)({},n,{films:n.films.length}));case 8:throw new Error("tipagem inv\xe1lida do planeta");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(61*Math.random())+1,e.next=3,K(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=a(8),J=a.n(W),M=function(e){var t=e.label,a=e.value,n=e.labelClassName,i=e.valueClassName;return r.a.createElement("div",{className:J.a.KeyValueContainer},r.a.createElement("div",{className:J.a.labelContainer},r.a.createElement("p",{className:n},t)),r.a.createElement("div",{className:J.a.valueContainer},r.a.createElement("p",{className:i},a)))},U=a(5),V=a.n(U),q=function(e){var t=e.population,a=e.climate,n=e.terrain,i=e.films,o=b(V.a.animatedText,"text-warning");return r.a.createElement("div",{className:V.a.planetInformationContainer},r.a.createElement("div",{className:V.a.planetPopulationClimateTerrainContainer},r.a.createElement(M,{label:"Population: ",value:t,labelClassName:o,valueClassName:o}),r.a.createElement(M,{label:"Climate: ",value:a,labelClassName:o,valueClassName:o}),r.a.createElement(M,{label:"Terrain: ",value:n,labelClassName:o,valueClassName:o})),r.a.createElement("div",{className:V.a.featuredTextContainer},r.a.createElement("p",{className:o},z(i))))},z=function(e){if(void 0===e)return"";var t=e>1?"films":"film";return"Feature in ".concat(e," ").concat(t," ")},F=a(36),Z=a.n(F),D=function(e){var t=e.name,a=e.population,n=e.climate,i=e.terrain,o=e.films;return r.a.createElement("div",{className:b(Z.a.planetCardContainer,"bg-secondary")},r.a.createElement(u,{className:"text-warning"},t),r.a.createElement(q,{population:a,climate:n,terrain:i,films:o}))},X=function(){var e=function(){var e=Object(n.useContext)(O);return{planet:e.planet,setPlanet:e.setPlanet}}(),t=e.planet,a=e.setPlanet,i=Object(n.useState)(!1),o=Object(v.a)(i,2),l=o[0],s=o[1];Object(n.useEffect)((function(){s(!0),Y(a,s)}),[a,s]);return r.a.createElement("div",{className:C.a.pageContainer},r.a.createElement(E,{className:C.a.cardContainer},l?r.a.createElement(w,null):r.a.createElement(D,{population:t.population,climate:t.climate,terrain:t.terrain,name:t.name,films:t.films})),r.a.createElement("div",{className:C.a.buttonContainer},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){Y(a,s)}},"Next")))},Y=function(){var e=Object(h.a)(f.a.mark((function e(t,a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=function(){return(n=Object(h.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,L();case 3:n=e.sent,t(n),a(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},function(){return n.apply(this,arguments)}();case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var $=function(){var e=function(){var e=Object(n.useState)(T),t=Object(v.a)(e,2),a=t[0],i=t[1];return r.a.createContext({planet:T,setPlanet:P}),{planet:a,setPlanet:i}}(),t=e.planet,a=e.setPlanet;return r.a.createElement(O.Provider,{value:{planet:t,setPlanet:a}},r.a.createElement("div",{className:"bg-dark"},r.a.createElement(m,null),r.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(96),a(97),a(98);o.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.aff7cce2.chunk.js.map