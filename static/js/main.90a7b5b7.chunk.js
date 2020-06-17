(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={overlayStyle:"Modal_overlayStyle__ydLf8",modalStyle:"Modal_modalStyle__1ym8O"}},24:function(e,t,a){e.exports={ImageGalleryStyle:"ImageGallery_ImageGalleryStyle__1b8Fs"}},25:function(e,t,a){e.exports={ButtonStyle:"Button_ButtonStyle__1BjD-",Button:"Button_Button__3R1xi"}},27:function(e,t,a){e.exports={loaderStyle:"LoadingIndicator_loaderStyle__en8Ig"}},29:function(e,t,a){e.exports=a(75)},34:function(e,t,a){},7:function(e,t,a){e.exports={SearchbarStyle:"Searchbar_SearchbarStyle__3Y9PT",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),o=a.n(l),c=(a(34),a(8)),i=a(3),u=a(4),s=a(6),m=a(5),h=a(7),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){var a=t.target;e.setState({query:a.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.query;e.props.onSubmit(a)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("header",{className:h.SearchbarStyle},r.a.createElement("form",{className:h.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:h.SearchFormButton},r.a.createElement("span",{className:h.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:h.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChange})))}}]),a}(n.Component),g=a(23),d=a(9),p=function(e){var t=e.previewURL,a=e.tags,n=e.largeImg,l=e.onClick;return r.a.createElement("li",{className:d.ImageGalleryItemStyle},r.a.createElement("img",{src:t,alt:a,className:d.ImageGalleryItemImage,"large-img":n,onClick:l}))},f=a(24),S=function(e){var t=e.images,a=e.onClick;return r.a.createElement("ul",{className:f.ImageGalleryStyle},t.map((function(e){var t=e.webformatURL,n=e.tags,l=e.largeImageURL;return r.a.createElement(p,{key:Object(g.v4)(),previewURL:t,tags:n,largeImg:l,onClick:a})})))},b=a(25),v=function(e){var t=e.onClick;return r.a.createElement("button",{type:"button",className:b.ButtonStyle,onClick:t},"Load more")},_=a(10),I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).overlayRef=Object(n.createRef)(),e.handleKeyPress=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){var a=e.overlayRef.current;a&&t.target!==a||e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.src;return r.a.createElement("div",{className:_.overlayStyle,ref:this.overlayRef,onClick:this.handleOverlayClick},r.a.createElement("div",null,r.a.createElement("img",{className:_.modalStyle,alt:"modal",src:e})))}}]),a}(n.Component),E=a(26),O=a.n(E),k=a(27),C=function(){return r.a.createElement(O.a,{className:k.loaderStyle,type:"ThreeDots",color:"#00BFFF",height:80,width:80})},w=a(28),L=a.n(w),j=function(e,t){return L.a.get("".concat("https://pixabay.com/api/?q=").concat(e,"&page=").concat(t,"&key=").concat("15725368-0fb82873f639e86c3efee11f4","&image_type=photo&orientation=horizontal&").concat("per_page=12"))},F=function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],pageNumber:1,query:"",largeImageUrl:"",isModalOpen:!1,isLoading:!1},e.getSearchQuery=function(t){e.setState({query:t,gallery:[],pageNumber:1})},e.handleLoadMore=function(){e.setState((function(e){return{pageNumber:e.pageNumber+1}}))},e.handleCloseModal=function(){return e.setState({isModalOpen:!1,largeImageUrl:""})},e.handleOpenModal=function(t){var a=t.target;return e.setState({isModalOpen:!0,largeImageUrl:a.attributes["large-img"].value})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,r=n.query,l=n.pageNumber,o=n.gallery;r===t.query&&l===t.pageNumber||(this.setState({isLoading:!0}),j(r,l).then((function(e){return o.length?a.setState({gallery:[].concat(Object(c.a)(t.gallery),Object(c.a)(e.data.hits))}):a.setState({gallery:Object(c.a)(e.data.hits)})})).catch((function(e){return console.log(e)})).finally((function(){a.setState({isLoading:!1}),1!==l&&F()})))}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoading,n=e.largeImageUrl,l=e.isModalOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{onSubmit:this.getSearchQuery}),r.a.createElement(S,{images:t,onClick:this.handleOpenModal}),a&&r.a.createElement(C,null),!!t.length&&r.a.createElement(v,{onClick:this.handleLoadMore}),l&&r.a.createElement(I,{src:n,onClose:this.handleCloseModal}))}}]),a}(n.Component);o.a.render(r.a.createElement(N,null),document.getElementById("root"))},9:function(e,t,a){e.exports={ImageGalleryItemStyle:"ImageGalleryItem_ImageGalleryItemStyle__2Lne7",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3K8Z3"}}},[[29,1,2]]]);
//# sourceMappingURL=main.90a7b5b7.chunk.js.map