(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[367],{1023:function(e,t,a){"use strict";var s=a(4836);t.Z=void 0;var i=s(a(4938)),l=a(5893),n=(0,i.default)((0,l.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=n},1894:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/presse/dossier",function(){return a(5218)}])},5359:function(e,t,a){"use strict";a.d(t,{d:function(){return c}});var s=a(5893),i=(a(7294),a(594)),l=a(4863),n=a(3015),r=a(1163),c=function(e){var t=e.data,a=e.filterData,c=e.pageKey,o=(0,r.useRouter)(),_=(0,n.Z)(t,a,c);return(0,s.jsxs)("div",{className:"info",children:[(0,s.jsxs)("button",{className:"btn_close",onClick:function(){o.back()},children:[" ",(0,s.jsx)(i.Z,{})]}),(0,s.jsx)("h1",{children:_.Name}),(0,s.jsx)(l.Z,{className:"simpleContainer",children:(0,s.jsx)("p",{className:"articleText",children:_.Contenu})})]})}},5992:function(e,t,a){"use strict";var s=a(5893),i=a(697),l=a(2004),n=(a(8334),a(6375),a(594)),r=a(6010),c=a(7294);t.Z=function(e){var t=e.articleProp,a=e.toggleDetails,o=e.setArticleChosen,_=e.styles;return(0,c.useEffect)((function(){console.log(t)}),[t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:"btn_close",onClick:function(){a(),o(null)},children:(0,s.jsx)(n.Z,{})}),(0,s.jsxs)("div",{"data-simplebar":!0,"data-simplebar-auto-hide":"false",className:"description_sec",children:[(0,s.jsxs)("div",{className:(0,r.Z)([_["salon-card"],"article_body"]),children:[t.TypeDeMedia&&"video"===t.TypeDeMedia[0]?(0,s.jsx)(l.Z,{controls:!0,url:t.MediaURL,className:"videocontainer"}):t.MediaImageGoogleDrive||"audio"===t.TypeDeMedia[0]?(0,s.jsx)("img",{className:"articleImg",style:{marginTop:"20px",width:"600px",height:"400px"},src:t.MediaImageGoogleDrive[0].url,alt:""}):null,(0,s.jsxs)("div",{className:"article_title",children:[(0,s.jsx)("h1",{children:t.Titre}),(0,s.jsx)("h3",{children:null===t||void 0===t?void 0:t.DateDepublication}),"audio"===t.TypeDeMedia[0]?(0,s.jsx)("div",{className:"embed-container",children:(0,s.jsx)("iframe",{src:t.MediaURL,className:"audioframe",scrolling:"no"})}):null,"balado"===t.type&&(0,s.jsx)("div",{className:"embed-container",children:(0,s.jsx)("iframe",{src:t.MediaURL,className:"audioframe",scrolling:"no"})})]})]}),(0,s.jsx)("div",{className:_["salon-card__description"],children:(0,s.jsx)(i.D,{children:t.Contenu})})]})]})}},7951:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var s=a(5893),i=a(7294),l=a(1023),n=(a(8334),a(2672)),r=a(5359),c=a(5992),o=a(3586),_=a.n(o),d=a(5049),u=a.n(d);function p(e){var t=e.searchPath;return(0,s.jsx)("div",{className:u().root,children:(0,s.jsx)("div",{className:u().content,children:(0,s.jsxs)("h1",{children:["Error 404: ",t||""," Not Found"]})})})}var m=a(1163),f=function(e){var t=e.isOpenMenu,a=e.baseArticles,o=e.aboutUsData,d=e.path,u=e.filterData,f=(0,i.useState)(!1),y=f[0],h=f[1],b=(0,i.useState)([]),v=b[0],x=b[1],D=(0,i.useState)(!1),g=D[0],j=D[1],N=(0,i.useState)(!1),k=N[0],C=N[1],M=(0,i.useState)(null),T=M[0],Z=M[1],E=(0,i.useState)(null),I=E[0],w=E[1],A=(0,m.useRouter)(),L=function(){0!==v.length?h(!y):history("/submenu")},R=function(e){0!==a.length&&x(a.filter((function(t){return!!t.SectionDuMenu&&t.SectionDuMenu[0]===e})))};return(0,i.useEffect)((function(){if(d||0!==a.length||0!==o.length)switch(d){case"location":Z(n.iD.location),C(!0);break;case"studio":Z(n.iD.studio),C(!0);break;case"formation":Z(n.iD.formation),R(n.iD.formation),C(!1),j(!0);break;case"benevolat":Z(n.iD.benevolat),R(n.iD.benevolat),C(!1),j(!0);break;case"balado":Z(n.iD.balado),R(n.iD.balado),C(!1),j(!0);break;case"video":Z(n.iD.video),R(n.iD.video),C(!1),j(!0);break;case"expositions":Z(n.iD.exposition),R(n.iD.exposition),C(!1),j(!0);break;case"appels":Z(n.iD.appels),R(n.iD.appels),C(!1),j(!0);break;case"communiqueDePresse":Z(n.iD.pressRelease),R(n.iD.pressRelease),C(!1),j(!0);break;case"dossier":Z(n.iD.dossier),R(n.iD.dossier),C(!1),j(!0)}}),[d,a,o]),k?(0,s.jsx)(r.d,{isOpenMenu:t,data:o,filterData:u,pageKey:T}):g?!t&&(0,s.jsx)(s.Fragment,{children:y||0===v.length?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:_().article,children:I&&(0,s.jsx)(c.Z,{articleProp:I,toggleDetails:L,setArticleChosen:w,styles:_()})})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:"btn_close",onClick:function(){A.back()},children:(0,s.jsx)(l.Z,{})}),(0,s.jsx)("h1",{className:"generalTitle",children:localStorage.getItem("title")}),(0,s.jsx)("div",{"data-simplebar":!0,"data-simplebar-auto-hide":"false",className:"generalContent",children:v.map((function(e){return(0,s.jsx)("li",{className:_().itemArticles,children:(0,s.jsx)("button",{onClick:function(){L(),w(e)},children:(0,s.jsx)("h1",{children:e.Titre})})},e.ID)}))})]})}):(0,s.jsx)(p,{searchPath:d})}},5218:function(e,t,a){"use strict";a.r(t);var s=a(5893),i=a(7951);t.default=function(e){var t=e.isOpenMenu,a=e.baseArticles,l=e.aboutUsData,n=e.filterData;return(0,s.jsx)(i.Z,{isOpenMenu:t,baseArticles:a,aboutUsData:l,filterData:n,path:"dossier"})}},3586:function(e){e.exports={App:"style_App__ucseU","salon-card":"style_salon-card__G_zzV","salon-card__description":"style_salon-card__description__F7En9","simplebar-scrollbar":"style_simplebar-scrollbar__txkNK","simplebar-visible":"style_simplebar-visible__QYBJ6",expocontent:"style_expocontent__MHbvB",generalContent:"style_generalContent__O1BcH",generalContainer:"style_generalContainer__muK2M",card:"style_card___aeLb",cardEchantillon:"style_cardEchantillon__D20Is",eventDate:"style_eventDate__HCl_C",blockInfoSuplEvent:"style_blockInfoSuplEvent__ZGaqn",infoSupl:"style_infoSupl__54E7w","h1--card":"style_h1--card__BFXDy","h3--card":"style_h3--card__znNLU","p--card":"style_p--card__TVqkz",detail:"style_detail__cOCOi",block2:"style_block2__qsPTD",title:"style_title__DsI4i",datedetail:"style_datedetail__is67A",generalTitle:"style_generalTitle__hRGeF",article:"style_article__4e6MY",article_title:"style_article_title__iVFjg","embed-container":"style_embed-container__NhRL_",audio_player:"style_audio_player__R6xGj",article_body:"style_article_body__qjNT_",articleImg:"style_articleImg__s1sw7",videocontainer:"style_videocontainer__5Tc_h",description_sec:"style_description_sec__J9Kra","simplebar-content-wrapper":"style_simplebar-content-wrapper__BZYvz","simplebar-content":"style_simplebar-content__YvmTw",cardContainer:"style_cardContainer__u4RY3",itemArticles:"style_itemArticles__Zwg4k",center:"style_center__1sWkY",carousel:"style_carousel__XGHqb","carousel-inner":"style_carousel-inner__4qo3z",right:"style_right__Q6hR8",left:"style_left__5baJC",error:"style_error__tEmAe",correct:"style_correct__fwQcL",audioframe:"style_audioframe__v1F_d",devenir:"style_devenir__7hYAg",devenir_prevImg:"style_devenir_prevImg__iprYU",principal:"style_principal__4pTEN",container_form:"style_container_form__PUIig",mediaContainer:"style_mediaContainer__xcOZ5",mediaContainerLabel:"style_mediaContainerLabel__CGEqb","custom-file-upload":"style_custom-file-upload__i4RZB",formDescription:"style_formDescription__gtFvE",nom:"style_nom__niuuF",mediaItem:"style_mediaItem__cej_f",formText:"style_formText___3PNr","form-control":"style_form-control__IzUMC",socialMediaLabel:"style_socialMediaLabel__UGLM5"}},5049:function(e){e.exports={App:"style_App__0vxkL",root:"style_root__4aZ5j",content:"style_content__faPeO"}}},function(e){e.O(0,[158,998,902,774,888,179],(function(){return t=1894,e(e.s=t);var t}));var t=e.O();_N_E=t}]);