(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__gIxbn"}},17:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3mJpF",Modal:"Modal_Modal__1wSb-"}},28:function(e,t,a){e.exports={ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__1LSR5",ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1Cm5l"}},30:function(e,t,a){e.exports={LoaderContainer:"Loader_LoaderContainer__-0Xqn"}},31:function(e,t,a){e.exports={Button:"Button_Button__3SlvH"}},36:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=(a(36),a(18)),i=a(5),l=a(6),u=a(8),h=a(7),d=a(10),m=(a(37),a(14)),g=a.n(m),p=a(27),b=a(15),j=a.n(b),f="23083473-2d7790ee8b7206f8dabf03b90";function _(e){return y.apply(this,arguments)}function y(){return y=Object(p.a)(g.a.mark((function e(t){var a,n,r,o=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,j.a.get("&q=".concat(t,"&page=").concat(a,"&per_page=12&key=").concat(f));case 3:return n=e.sent,r=n.data.hits,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}j.a.defaults.baseURL="https://pixabay.com/api/?image_type=photo&orientation=horizontal";var O=a(9),v=a.n(O),S=a(1),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",total:""},e.handleChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?0!==e.state.total?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):d.b.error("No match...",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):d.b.error("Search images and photos",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("header",{className:v.a.Searchbar,children:Object(S.jsxs)("form",{className:v.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(S.jsx)("button",{type:"submit",className:v.a.SearchForm__button,children:Object(S.jsx)("span",{className:v.a.SearchForm__buttonLabel,children:"Search"})}),Object(S.jsx)("input",{className:v.a.SearchForm__input,type:"text",autoComplete:"off",value:e,onChange:this.handleChange,autoFocus:!0,placeholder:"Search images and photos"})]})})})}}]),a}(n.Component),C=x,I=a(28),k=a.n(I),w=function(e){var t=e.image,a=e.openModal;return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("img",{onClick:function(){a(t)},src:t.webformatURL,alt:t.tag,className:k.a.ImageGalleryItem__image})})},M=a(16),L=a.n(M);var F=function(e){var t=e.images,a=void 0===t?[]:t,n=e.onOpenModal;return Object(S.jsx)("ul",{className:L.a.ImageGallery,children:a.map((function(e){return Object(S.jsx)("li",{className:L.a.ImageGalleryItem,children:Object(S.jsx)(w,{image:e,openModal:n})},e.id)}))})},N=(a(58),a(29)),G=a.n(N),B=a(30),Q=a.n(B),U=function(){return Object(S.jsx)("div",{className:Q.a.LoaderContainer,children:Object(S.jsx)(G.a,{type:"Bars",color:"#8a2be2",height:80,width:80,timeout:100})})},H=a(17),P=a.n(H),E=document.querySelector("#modal-root"),R=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(S.jsx)("div",{className:P.a.Overlay,onClick:this.handleBackdropClick,children:Object(S.jsx)("div",{className:P.a.Modal,children:this.props.children})}),E)}}]),a}(n.Component),q=a(31),T=a.n(q),A=function(e){var t=e.onClick;return Object(S.jsx)("div",{children:Object(S.jsx)("button",{type:"button",onClick:t,className:T.a.Button,children:"Load More..."})})},D=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},J=(a(79),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={page:1,images:[],searchQuery:"",loading:!1,showModal:!1},e.searchImage=function(){var t=e.state,a=t.searchQuery,n=t.page;return e.setState({loading:!0}),_(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1}}))}))},e.handleSearchSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onClickLargeImage=function(t){e.setState({largeImage:t}),e.toggleModal()},e.handleLoadMoreClick=function(){e.setState({loading:!0}),e.searchImage().then((function(){D()})).catch((function(e){return console.log(e)})).finally((function(){return e.setState({loading:!1})}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.searchQuery!==t.searchQuery&&this.searchImage().catch((function(e){return console.log(e)})).finally((function(){return a.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.largeImage,n=e.showModal,r=e.loading;return Object(S.jsxs)("div",{children:[Object(S.jsx)(C,{onSubmit:this.handleSearchSubmit}),r&&Object(S.jsx)(U,{}),Object(S.jsx)(F,{images:t,onOpenModal:this.onClickLargeImage}),n&&Object(S.jsxs)(R,{onClose:this.toggleModal,children:[Object(S.jsx)("img",{src:a.largeImageURL,alt:a.tag,id:a.id}),Object(S.jsx)("button",{type:"button",onClick:this.toggleModal,children:"Close"})]}),!r&&t[0]&&Object(S.jsx)(A,{onClick:this.handleLoadMoreClick}),Object(S.jsx)(d.a,{autoClose:3e3,position:"top-center",hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),a}(n.PureComponent)),K=J;c.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(K,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3h1Ms",SearchForm:"Searchbar_SearchForm__HrUu6",SearchForm__button:"Searchbar_SearchForm__button__3pp3-",SearchForm__buttonLabel:"Searchbar_SearchForm__buttonLabel__2PUnq",SearchForm__input:"Searchbar_SearchForm__input__zVRYu"}}},[[80,1,2]]]);
//# sourceMappingURL=main.c1c4b6fe.chunk.js.map