(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__gIxbn"}},17:function(e,a,t){e.exports={Overlay:"Modal_Overlay__3mJpF",Modal:"Modal_Modal__1wSb-"}},28:function(e,a,t){e.exports={ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__1LSR5",ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1Cm5l"}},30:function(e,a,t){e.exports={LoaderContainer:"Loader_LoaderContainer__-0Xqn"}},35:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(4),c=t.n(o),s=(t(35),t(18)),i=t(5),l=t(6),u=t(8),h=t(7),d=t(12),m=(t(36),t(14)),g=t.n(m),p=t(27),b=t(15),j=t.n(b),_="23083473-2d7790ee8b7206f8dabf03b90";function f(e){return y.apply(this,arguments)}function y(){return y=Object(p.a)(g.a.mark((function e(a){var t,n,r,o=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,j.a.get("&q=".concat(a,"&page=").concat(t,"&per_page=12&key=").concat(_));case 3:return n=e.sent,r=n.data.hits,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}j.a.defaults.baseURL="https://pixabay.com/api/?image_type=photo&orientation=horizontal";var O=t(9),S=t.n(O),v=t(1),x=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={images:[],searchQuery:""},e.handleChange=function(a){e.setState({searchQuery:a.currentTarget.value.toLowerCase()})},e.handleSubmit=function(a){a.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):d.b.error("Search images and photos",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},e}return Object(l.a)(t,[{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("header",{className:S.a.Searchbar,children:Object(v.jsxs)("form",{className:S.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(v.jsx)("button",{type:"submit",className:S.a.SearchForm__button,children:Object(v.jsx)("span",{className:S.a.SearchForm__buttonLabel,children:"Search"})}),Object(v.jsx)("input",{className:S.a.SearchForm__input,type:"text",autoComplete:"off",value:this.state.searchQuery,onChange:this.handleChange,autoFocus:!0,placeholder:"Search images and photos"})]})})})}}]),t}(n.Component),I=x,w=t(28),C=t.n(w),k=function(e){var a=e.image,t=e.openModal;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("img",{onClick:function(){t(a)},src:a.webformatURL,alt:a.tag,className:C.a.ImageGalleryItem__image})})},M=t(16),F=t.n(M);var L=function(e){var a=e.images,t=void 0===a?[]:a,n=e.onOpenModal;return Object(v.jsx)("ul",{className:F.a.ImageGallery,children:t.map((function(e){return Object(v.jsx)("li",{className:F.a.ImageGalleryItem,children:Object(v.jsx)(k,{image:e,openModal:n})},e.id)}))})},G=(t(57),t(29)),N=t.n(G),Q=t(30),U=t.n(Q),B=function(){return Object(v.jsx)("div",{className:U.a.LoaderContainer,children:Object(v.jsx)(N.a,{type:"Bars",color:"#8a2be2",height:80,width:80,timeout:100})})},P=t(17),R=t.n(P),q=document.querySelector("#modal-root"),E=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleKeydown=function(a){"Escape"===a.code&&e.props.onClose()},e.handleBackdropClick=function(a){a.currentTarget===a.target&&e.props.onClose()},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(v.jsx)("div",{className:R.a.Overlay,onClick:this.handleBackdropClick,children:Object(v.jsx)("div",{className:R.a.Modal,children:this.props.children})}),q)}}]),t}(n.Component),A=(t(78),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={page:1,images:[],searchQuery:"",loading:!1,showModal:!1},e.searchImage=function(){var a=e.state,t=a.searchQuery,n=a.page;return e.setState({loading:!0}),f(t,n).then((function(a){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(a)),page:e.page+1}}))}))},e.handleSearchSubmit=function(a){e.setState({searchQuery:a,page:1,images:[]})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onClickLargeImage=function(a){e.setState({largeImage:a}),e.toggleModal()},e}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this;this.state.searchQuery!==a.searchQuery&&this.searchImage().catch((function(e){return console.log(e)})).finally((function(){return t.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.largeImage,n=e.showModal,r=e.loading;return Object(v.jsxs)("div",{children:[Object(v.jsx)(I,{onSubmit:this.handleSearchSubmit}),r&&Object(v.jsx)(B,{}),Object(v.jsx)(L,{images:a,onOpenModal:this.onClickLargeImage}),n&&Object(v.jsxs)(E,{onClose:this.toggleModal,children:[r&&Object(v.jsx)(B,{}),Object(v.jsx)("img",{src:t.largeImageURL,alt:t.tag,id:t.id}),Object(v.jsx)("button",{type:"button",onClick:this.toggleModal,children:"Close"})]}),Object(v.jsx)(d.a,{autoClose:3e3,position:"top-center",hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),t}(n.PureComponent)),D=A;c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(D,{})}),document.getElementById("root"))},9:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__3h1Ms",SearchForm:"Searchbar_SearchForm__HrUu6",SearchForm__button:"Searchbar_SearchForm__button__3pp3-",SearchForm__buttonLabel:"Searchbar_SearchForm__buttonLabel__2PUnq",SearchForm__input:"Searchbar_SearchForm__input__zVRYu"}}},[[79,1,2]]]);
//# sourceMappingURL=main.9408f5c9.chunk.js.map