(this.webpackJsonpgolden_turtle=this.webpackJsonpgolden_turtle||[]).push([[0],{29:function(e,t,a){},38:function(e,t,a){e.exports=a(76)},43:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/upload.664a5bfd.png"},52:function(e,t,a){},53:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),l=(a(43),a(13)),c=a(14),s=a(16),u=a(15),m=a(11),d=(a(29),function(e){var t=e.image,a=e.onClick,n=e.isPending,i=e.error;return n||i?r.a.createElement("li",{className:"image_preview image_preview_pending tc grow br3 pa4 ma2 dib bw2 shadow-5"}):r.a.createElement("li",{className:"image_preview tc grow br3 pa4 ma2 dib bw2 shadow-5",style:{backgroundImage:"url(".concat(t.urls.small,")")},onClick:a},r.a.createElement("span",{className:"avgRating"},t.avgRating,"/",r.a.createElement("span",{className:"votesCount"},t.votesCount)))}),g=(a(47),a(18)),p=function(e){return function(t){var n=r.a.lazy((function(){return a.e(3).then(a.bind(null,79))}));o.a.render(r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",{style:{display:"none"}}," ")},r.a.createElement(n,{image:e})),document.getElementById("image-edit-component"))}},f=Object(m.b)((function(e){return{isPending:e.requestImages.isPending,error:e.requestImages.error}}))((function(e){var t=e.images,n=e.onFilterChange,i=e.isPending,o=e.error;return r.a.createElement("ul",{className:"imageList"},r.a.createElement("div",{id:"image-edit-component"}),r.a.createElement("div",{id:"filterImages",className:"radio"},i&&!o&&r.a.createElement("div",{className:"notify wait"},"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435..."),o&&r.a.createElement("div",{className:"notify error"},"\u041d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f"),r.a.createElement(g.b,{name:"filter",onChange:function(e){var t=document.getElementById("filterImages").getElementsByTagName("label");[].map.call(t,(function(e){e.classList.remove("checkedLabel")})),e.target.parentElement.classList.add("checkedLabel"),n(e)}},r.a.createElement(g.a,{id:"all_images",value:"",checked:!0},"\u0412\u0441\u0435 \u0440\u0430\u0431\u043e\u0442\u044b"),r.a.createElement(g.a,{id:"top100",value:"top100"},"\u0422\u043e\u043f-100"),r.a.createElement(g.a,{id:"finalist",value:"finalist"},"\u0424\u0438\u043d\u0430\u043b\u0438\u0441\u0442\u044b"))),r.a.createElement("a",{href:"/golden_turtle/upload"},r.a.createElement("li",{className:"image_preview tc grow br3 pa4 ma2 dib bw2 shadow-5",style:{cursor:"pointer",background:"linear-gradient(to bottom right, #fafafa, #aaaaaa)"}},r.a.createElement("div",{style:{backgroundImage:"url(".concat(a(50),")"),backgroundSize:"cover",backgroundPosition:"center center",width:"100%",height:"100%"}}))),function(e,t,a){return e||t?[1,2,3,4,5,6,7].map((function(a,n){return r.a.createElement(d,{key:n,isPending:e,error:t})})):a.map((function(e,t){return r.a.createElement(d,{key:t,image:e,onClick:p(e)})}))}(i,o,t))})),h=a(19),v=a.n(h),b=a(25),E=function(){var e=Object(b.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"REQUEST_IMAGES_PENDING"}),(a=function(){var e=Object(b.a)(v.a.mark((function e(){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.unsplash.com/photos/random?client_id=99c7ec0457480b03326a57d7e361d98e8a4ffc578f171b1224618789e74e78aa&count=15");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).map((function(e,t){e.avgRating=(Math.round(100*Math.random())/100+1.5).toString().slice(0,4),e.votesCount=(Math.floor(30*Math.random())+10).toString().slice(0,4)})),t({type:"REQUEST_IMAGES_SUCCESS",payload:r}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"REQUEST_IMAGES_FAILED",payload:e.t0}),setTimeout(a,5e3);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}())();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){return{type:"CHANGE_EXIF_INPUT",payload:{name:e.name,value:e.value}}},_=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.onRequestImages()}},{key:"render",value:function(){var e=this.props,t=(e.onFilterChange,e.filterBy),a=this.props.images.filter((function(e){switch(t){case"top100":return e.avgRating>2.1;case"finalist":return e.avgRating>2.35;default:return e}}));return r.a.createElement(f,{images:a,onFilterChange:this.props.onFilterChange})}}]),a}(r.a.Component),k=Object(m.b)((function(e){return{filterBy:e.filterImages.filterBy,images:e.requestImages.images,isPending:e.requestImages.isPending,error:e.requestImages.error}}),(function(e){return{onFilterChange:function(t){return e({type:"FILTER_IMAGES",payload:t.target.value})},onRequestImages:function(){return E(e)}}}))(_),I=a(4),w=function(e){return r.a.createElement("li",{className:"labeledInputText",style:e.style},r.a.createElement("label",null,e.label),r.a.createElement("input",{type:e.type,name:e.name,value:e.value,onChange:e.onChange,onFocus:e.onFocus,onBlur:e.onBlur}))},C=function(e){"blur"===e.type&&e.target.value.length<1?e.target.classList.add("validation-error"):e.target.classList.remove("validation-error")},N=(a(52),function e(t,a,n,i){return Object.entries(t).map((function(t){return"object"===typeof t[1]?e(t[1],a,n):function(e,t,a,n){return"blockName"===e[0]?r.a.createElement("h5",{className:"blockHeader"},e[1]):"area"===n?j(e[1],"text",e[0],t[e[0]],a):O(e[1],"text",e[0],t[e[0]],a)}(t,a,n,i)}))}),O=function(e,t,a,n,i){return r.a.createElement(w,{label:e,type:t,name:a,value:n,onChange:i,onFocus:C,onBlur:C})},j=function(e,t,a,n,i){return r.a.createElement("div",{className:"labeledTextArea"},r.a.createElement("label",null,e.split("$")[0]),r.a.createElement("textarea",{type:t,name:a,value:n,placeholder:e.split("$")[1],onFocus:x(!0),onBlur:x(!1),onChange:i}))},x=function(e){return function(t){e&&t.target.classList.contains("validation-error")?t.target.classList.remove("validation-error"):e||C(t);var a=t.target.clientHeight,n=e?3*a:a/3,r=t.target;r.style.minHeight="".concat(a,"px");var i=setInterval((function(){a+=e?5:-5,r.style.minHeight="".concat(a,"px"),(a>=n&&e||a<=n&&!e)&&clearInterval(i)}),10)}},B=function(e){var t=e.exifData,a=e.onChangeInput;return N({blockName:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u043d\u0438\u043c\u043a\u0430",Model:"\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435$\u041a\u0430\u043c\u0435\u0440\u0430, \u043e\u0431\u044a\u0435\u043a\u0442\u0438\u0432...",conditions:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0441\u044a\u0435\u043c\u043a\u0438$\u041d\u043e\u0447\u044c\u044e, \u0432 \u043b\u0435\u0441\u0443, \u0432 \u0434\u043e\u0436\u0434\u044c...",animal:"\u0416\u0438\u0432\u043e\u0442\u043d\u043e\u0435/\u0440\u0430\u0441\u0442\u0435\u043d\u0438\u0435 \u0432 \u043a\u0430\u0434\u0440\u0435$\u0421\u0435\u0440\u043d\u0430, \u043f\u0438\u0445\u0442\u0430...",parameters:{blockName:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u044a\u0435\u043c\u043a\u0438",ExposureTime:"\u0412\u044b\u0434\u0435\u0440\u0436\u043a\u0430",FNumber:"\u0414\u0438\u0430\u0444\u0440\u0430\u0433\u043c\u0430",ISOSpeedRatings:"ISO",FocalLength:"\u0424\u0420 (mm)"}},t,a,"area")},S=function(e){var t=e.name,a=e.options,n=e.title,i=e.onChange;return r.a.createElement("div",{className:"labeledInputSelect"},r.a.createElement("h5",null,n),r.a.createElement("select",{className:"inputSelect",required:!0,onChange:i,name:t},a.map((function(e,t){return r.a.createElement("option",{value:e.value,selected:0===t},e.description)}))))},D=a(26),T=a.n(D),L=a(37),F=(a(53),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={percent:0},n.onChange=n.onChange.bind(Object(I.a)(n)),n.handleDrop=n.handleDrop.bind(Object(I.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(I.a)(n)),n.uploadBtnClick=n.uploadBtnClick.bind(Object(I.a)(n)),n.handleDragOver=n.handleDragOver.bind(Object(I.a)(n)),n.handleDragLeave=n.handleDragLeave.bind(Object(I.a)(n)),n._showNameInput=n._showNameInput.bind(Object(I.a)(n)),n._addImgFileReader=n._addImgFileReader.bind(Object(I.a)(n)),n._restartProgressBar=n._restartProgressBar.bind(Object(I.a)(n)),n._increaseProgressBar=n._increaseProgressBar.bind(Object(I.a)(n)),n._scrollToBlockHeader=n._scrollToBlockHeader.bind(Object(I.a)(n)),n._uploadingImageHandle=n._uploadingImageHandle.bind(Object(I.a)(n)),n}return Object(c.a)(a,[{key:"onChange",value:function(){var e=document.querySelector("#uploading_image");this._uploadingImageHandle(e.files[0])}},{key:"handleSubmit",value:function(e){var t=[];Object.entries(this.props.exifData).map((function(e){t.push("".concat(e[0],": ").concat(e[1]))})),console.log(this.props.exifData),alert("\u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b:\n\n".concat(t.join("\n"))),e.preventDefault()}},{key:"uploadBtnClick",value:function(){document.getElementById("uploading_image").click()}},{key:"handleDragOver",value:function(e){e.target.classList.add("dragover"),e.preventDefault()}},{key:"handleDragLeave",value:function(e){e.target.classList.remove("dragover")}},{key:"handleDrop",value:function(e){e.preventDefault(),e.target.classList.remove("dragover");var t=e.dataTransfer.files[0];return this._uploadingImageHandle(t),!1}},{key:"categories",get:function(){return[{value:"landscape",description:"\u041f\u0435\u0439\u0437\u0430\u0436"},{value:"bird",description:"\u041f\u0442\u0438\u0446\u044b"},{value:"wild_animals",description:"\u0414\u0438\u043a\u0438\u0435 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0435"},{value:"flowers",description:"\u0426\u0432\u0435\u0442\u044b"}]}},{key:"_increaseProgressBar",value:function(){var e=this.state.percent+1;e>=100?clearTimeout(this.tm):(this.setState({percent:e}),this.tm=setTimeout(this._increaseProgressBar,10))}},{key:"_restartProgressBar",value:function(){var e=this;clearTimeout(this.tm),this.setState({percent:0},(function(){e._increaseProgressBar()}))}},{key:"_uploadingImageHandle",value:function(e){if(!e)return null;if(e&&"image"!==e.type.split("/")[0].toLowerCase())return alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043b-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435!"),null;this._restartProgressBar();var t=document.getElementById("exif"),a={category:document.getElementsByName("category")[0].options[document.getElementsByName("category")[0].selectedIndex].value};T.a.getData(e,(function(){var e=this;t.getElementsByTagName("input");["Model","ExposureTime","FNumber","ISOSpeedRatings","FocalLength"].map((function(t){var n=T.a.getTag(e,t);"ExposureTime"===t&&n<.3?n="1/".concat(1/parseFloat(n)):n&&"FNumber"===t&&(n="f/".concat(n));try{a[t]=n.toString()}catch(i){a[t]=""}var r=document.getElementsByName(t)[0];r.value=a[t],r.classList.remove("validation-error")}))})),this._addImgFileReader().readAsDataURL(e);document.getElementsByClassName("description_inputs")[0],document.getElementsByName("title")[0];this._scrollToBlockHeader(document.getElementsByClassName("description_inputs")[0]),this.props.onChangeExif(a)}},{key:"_addImgFileReader",value:function(){var e=new FileReader;return e.addEventListener("load",(function(){var t=document.querySelector(".imgPreview");t&&t.remove();var a=document.getElementsByClassName("image_uploader")[0],n=document.createElement("img");n.src=e.result,n.classList.add("imgPreview"),n.style.maxWidth="100%",document.documentElement.clientWidth>=768?(a.style.height=document.body.offsetHeight-170+"px",n.style.maxHeight=a.clientHeight-170+"px"):(document.getElementById("upload_btn").style.position="relative",n.style.maxHeight=document.body.offsetHeight-170+"px",a.style.maxHeight=n.clientHeight-30+"px",document.getElementsByClassName("rc-progress-line")[0].style.top=n.offsetHeight+"px"),document.querySelector("#uploading_image").style.marginTop="20px",a.style.border="none",a.style.background="none",a.prepend(n);var r=document.getElementsByName("title")[0];r.parentElement.style.display="block",r.parentElement.style.marginLeft=0,r.parentElement.style.width="100%",r.style.display="block",r.style.width="100%"}),!1),e}},{key:"_showNameInput",value:function(){document.getElementsByName("title").parentElement.style.display="block"}},{key:"_scrollToBlockHeader",value:function(e){if(document.body.offsetWidth>=768)return!1;console.log(e.getBoundingClientRect().top);var t=setInterval((function(){document.documentElement.scrollTop+=8,(e.getBoundingClientRect().top<=150||document.documentElement.scrollTop>=document.documentElement.scrollHeight-document.documentElement.clientHeight-20)&&clearInterval(t)}),10)}},{key:"render",value:function(){return r.a.createElement("form",{id:"upload_form"},r.a.createElement("div",{className:"service"}),r.a.createElement("div",{className:"image_uploader dib tc fl w-40",onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop},r.a.createElement("input",{type:"file",id:"uploading_image",onChange:this.onChange}),r.a.createElement("input",{type:"button",className:"dim",id:"upload_btn",onClick:this.uploadBtnClick,value:"\u0418\u0417\u041c\u0415\u041d\u0418\u0422\u042c"}),r.a.createElement(L.a,{percent:this.state.percent,strokeWidth:"1",strokeColor:"#d7b900",width:"100%",style:{position:"absolute",bottom:0,left:0}}),r.a.createElement(w,{label:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",name:"title",onChange:this.props.onChangeInput,onFocus:C,onBlur:C,style:{display:"none"}})),r.a.createElement("ul",{className:"description_inputs dib tc fl w-50",id:"exif"},r.a.createElement(S,{name:"category",title:"\u041d\u043e\u043c\u0438\u043d\u0430\u0446\u0438\u044f",options:this.categories,onChange:this.props.onChangeCategory}),r.a.createElement(B,{exifData:this.props.exifData,onChangeInput:this.props.onChangeInput}),r.a.createElement("button",{type:"submit",id:"submit",className:"dim",name:"Upload",onSubmit:this.handleSubmit,onClick:this.handleSubmit},"\u0417\u0410\u0413\u0420\u0423\u0417\u0418\u0422\u042c")))}}]),a}(r.a.Component)),P=Object(m.b)((function(e){return{exifData:e.changeExifData.exifData}}),(function(e){return{onChangeExif:function(t){return e({type:"CHANGE_EXIF_DATA",payload:t})},onChangeInput:function(t){return e(y(t.target))},onChangeCategory:function(t){return e(y({name:t.target.name,value:t.target.options[t.target.selectedIndex].value}))}}}))(F),R=a(23),H=function(){var e=document.documentElement.clientWidth>600?"logo-medium.png":"logo-192.png";return r.a.createElement("header",{className:"header sans-serif"},r.a.createElement("ul",{className:"menu",id:"menu-container"},r.a.createElement("li",{className:"fl w-20"},r.a.createElement("a",{href:"http://wncontest.ru/"},r.a.createElement("img",{src:e,className:"logo"}))),r.a.createElement(R.slide,{pageWrapId:"page-wrap",outerContainerId:"menu-container",right:!0},r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{href:"/",className:"link dim near-white"},"My page")),r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{href:"/golden_turtle/upload",className:"link dim near-white"},"Upload")),r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{href:"http://wncontest.ru/",className:"link dim near-white"},"News")))))},A=(a(69),a(70),a(71),a(3)),M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(H,null),r.a.createElement("div",{className:"container"},r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/golden_turtle/",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(A.a,{path:"/golden_turtle/upload",component:P}))))}}]),a}(r.a.Component),U=(a(75),a(24)),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var q=a(21),Q=a(20),$=a(5),X={filterBy:""},z={isPending:!1,images:[],error:""},J={exifData:{}},K=a(36),V=a(35),Y=Object(V.createLogger)(),Z=Object(q.b)({filterImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FILTER_IMAGES":return Object($.a)(Object($.a)({},e),{},{filterBy:t.payload});default:return e}},requestImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_IMAGES_PENDING":return Object($.a)(Object($.a)({},e),{},{isPending:!0});case"REQUEST_IMAGES_SUCCESS":return Object($.a)(Object($.a)({},e),{},{error:"",images:t.payload,isPending:!1});case"REQUEST_IMAGES_FAILED":return Object($.a)(Object($.a)({},e),{},{error:t.payload,isPending:!1});default:return e}},changeExifData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_EXIF_DATA":return Object($.a)(Object($.a)({},e),{},{exifData:t.payload});case"CHANGE_EXIF_INPUT":return Object($.a)(Object($.a)({},e),{},{exifData:Object($.a)(Object($.a)({},e.exifData),{},Object(Q.a)({},t.payload.name,t.payload.value))});default:return e}}}),ee=Object(q.c)(Z,Object(q.a)(K.a,Y));o.a.render(r.a.createElement(U.a,null,r.a.createElement(m.a,{store:ee},r.a.createElement(M,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/golden_turtle",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/golden_turtle","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.6d903561.chunk.js.map