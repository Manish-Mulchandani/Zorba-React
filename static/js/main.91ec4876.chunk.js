(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{28:function(e,t,a){e.exports=a(50)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),o=(a(33),a(34),a(11)),i=a(2),m=a(9),s=(a(35),a(24)),u=a.n(s),E=a(25),d=a.n(E),h=Object(n.createContext)(),p=function(e){var t=e.reducer,a=e.initialState,c=e.children;return r.a.createElement(h.Provider,{value:Object(n.useReducer)(t,a)},c)},v=function(){return Object(n.useContext)(h)};var g=function(){var e=v(),t=Object(m.a)(e,1)[0].basket;return console.log(t),r.a.createElement("nav",{className:"header"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{className:"header_logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png"})),r.a.createElement("div",{className:"header_search"},r.a.createElement("input",{type:"text",className:"header_searchInput"}),r.a.createElement(u.a,{className:"header_searchIcon"})),r.a.createElement("div",{className:"header_nav"},r.a.createElement(o.b,{to:"/login",className:"header_link"},r.a.createElement("div",{className:"header_option"},r.a.createElement("span",{className:"header_optionLineOne"},"Hello"),r.a.createElement("span",{className:"header_optionLineTwo"},"SignIn"))),r.a.createElement(o.b,{to:"/",className:"header_link"},r.a.createElement("div",{className:"header_option"},r.a.createElement("span",{className:"header_optionLineOne"},"Returns"),r.a.createElement("span",{className:"header_optionLineTwo"},"&Orders"))),r.a.createElement(o.b,{to:"/",className:"header_link"},r.a.createElement("div",{className:"header_option"},r.a.createElement("span",{className:"header_optionLineOne"},"Your"),r.a.createElement("span",{className:"header_optionLineTwo"},"Prime"))),r.a.createElement(o.b,{to:"/checkout",className:"header_link"},r.a.createElement("div",{className:"header_optionBasket"},r.a.createElement(d.a,null),r.a.createElement("span",{className:"header_optionLineTwo header_basketCount"},null===t||void 0===t?void 0:t.length)))))};a(42);var b=function(e){var t=e.id,a=e.title,n=e.image,c=e.price,l=e.rating,o=v(),i=Object(m.a)(o,2),s=(i[0].basket,i[1]);return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product_info"},r.a.createElement("p",null,a),r.a.createElement("p",{className:"product_"},r.a.createElement("small",null,"\u20b9"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"product_rating"},Array(l).fill().map((function(e){return r.a.createElement("p",null,"\u2b50")})))),r.a.createElement("img",{src:n,alt:""}),r.a.createElement("button",{onClick:function(){s({type:"ADD_TO_BASKET",item:{id:t,title:a,image:n,price:c,rating:l}})}},"Add to basket"))};a(43);var k=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),r.a.createElement("div",{className:"home_row"},r.a.createElement(b,{id:"12321341",title:"DON'T GO THERE: True mystery of the Dyatlov Pass",price:200,rating:5,image:"https://marketplace.canva.com/EAD7YH8bebE/1/0/251w/canva-white-bold-text-thriller-mystery-book-cover-CejxvxrTCyg.jpg"}),r.a.createElement(b,{id:"12321341",title:"DON'T GO THERE: True mystery of the Dyatlov Pass",price:200,rating:5,image:"https://marketplace.canva.com/EAD7YH8bebE/1/0/251w/canva-white-bold-text-thriller-mystery-book-cover-CejxvxrTCyg.jpg"})),r.a.createElement("div",{className:"home_row"},r.a.createElement(b,{id:"12321341",title:"DON'T GO THERE: True mystery of the Dyatlov Pass",price:200,rating:5,image:"https://marketplace.canva.com/EAD7YH8bebE/1/0/251w/canva-white-bold-text-thriller-mystery-book-cover-CejxvxrTCyg.jpg"}),r.a.createElement(b,{id:"12321341",title:"DON'T GO THERE: True mystery of the Dyatlov Pass",price:200,rating:5,image:"https://marketplace.canva.com/EAD7YH8bebE/1/0/251w/canva-white-bold-text-thriller-mystery-book-cover-CejxvxrTCyg.jpg"}),r.a.createElement(b,{id:"12321341",title:"DON'T GO THERE: True mystery of the Dyatlov Pass",price:200,rating:5,image:"https://marketplace.canva.com/EAD7YH8bebE/1/0/251w/canva-white-bold-text-thriller-mystery-book-cover-CejxvxrTCyg.jpg"})),r.a.createElement("div",{className:"home_row"},r.a.createElement(b,{id:"12321341",title:"DON'T GO THERE: True mystery of the Dyatlov Pass",price:200,rating:5,image:"https://marketplace.canva.com/EAD7YH8bebE/1/0/251w/canva-white-bold-text-thriller-mystery-book-cover-CejxvxrTCyg.jpg"})))};a(44);var y=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login Page"))};a(45),a(46);var _=function(e){var t=e.id,a=e.title,n=e.image,c=e.price,l=e.rating,o=v(),i=Object(m.a)(o,2),s=(i[0].basket,i[1]);return r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("img",{className:"checkoutProduct_image",src:n,alt:""}),r.a.createElement("div",{className:"checkoutProduct_info"},r.a.createElement("p",{className:"checkoutProduct_title"},a),r.a.createElement("p",{className:"checkoutProduct_price"},r.a.createElement("small",null,"\u20b9"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"checkoutProduct_rating"},Array(l).fill().map((function(e,t){return r.a.createElement("p",null,"\u2b50")}))),r.a.createElement("button",{onClick:function(){s({type:"REMOVE_FROM_BASKET",id:t})}},"Remove from Basket")))},N=(a(47),a(26)),f=a.n(N),T=a(19),O=a(13),x=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},w=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(O.a)(Object(O.a)({},e),{},{basket:[].concat(Object(T.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var a=Object(T.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===t.id}));return n>=0?a.splice(n,1):console.warn("Cant remove product (id: ${action.id}) as its not in the basket"),Object(O.a)(Object(O.a)({},e),{},{basket:a});default:return e}};var j=function(){var e=v(),t=Object(m.a)(e,2),a=t[0].basket;return t[1],r.a.createElement("div",{className:"subtotal"},r.a.createElement(f.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Subtotal (",a.length," items): ",r.a.createElement("strong",null,x(a))),r.a.createElement("small",{className:"subtotal_gift"},r.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},decimalScale:2,value:x(a),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),r.a.createElement("button",null,"Proceed to Checkout"))};var D=function(){var e=v(),t=Object(m.a)(e,1)[0].basket;return r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout_left"},r.a.createElement("img",{className:"checkout_ad",src:"https://images-na.ssl-images-amazon.com/images/G/01/videogames/Banner_Digital3._CB1198675309_.jpg",alt:"Banner"}),0===(null===t||void 0===t?void 0:t.length)?r.a.createElement("div",null,r.a.createElement("h2",null,"Your Shopping Basket is empty"),r.a.createElement("p",null,'You have no items in your basket. To buy one or more items, click "Add to Basket" next to the item')):r.a.createElement("div",null,r.a.createElement("h2",{className:"checkout_title"},"Your Shopping Basket"),null===t||void 0===t?void 0:t.map((function(e){return r.a.createElement(_,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),t.length>0&&r.a.createElement("div",{className:"checkout_right"},r.a.createElement("h1",null,"SubTotal"),r.a.createElement(j,null)))};var C=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/checkout"},r.a.createElement(g,null),r.a.createElement(D,null)),r.a.createElement(i.a,{path:"/login"},r.a.createElement(y,null),r.a.createElement("h1",null,"Still Working on it.")),r.a.createElement(i.a,{path:"/"},r.a.createElement(g,null),r.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,{initialState:{basket:[{id:"12321341",title:"DON'T GO THERE: True mystery of the Dyatlov Pass",price:200,rating:5,image:"https://marketplace.canva.com/EAD7YH8bebE/1/0/251w/canva-white-bold-text-thriller-mystery-book-cover-CejxvxrTCyg.jpg"},{id:"12321341",title:"DON'T GO THERE: True mystery of the Dyatlov Pass",price:200,rating:5,image:"https://marketplace.canva.com/EAD7YH8bebE/1/0/251w/canva-white-bold-text-thriller-mystery-book-cover-CejxvxrTCyg.jpg"}],user:null},reducer:w},r.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.91ec4876.chunk.js.map