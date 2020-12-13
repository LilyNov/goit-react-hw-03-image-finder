(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1o7KA",ModalImg:"Modal_ModalImg__3A-8e"}},18:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3B_xp",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3dFBl"}},22:function(e,t,a){e.exports={ItemList:"ImageGallery_ItemList__3-F0u"}},25:function(e,t,a){e.exports={Button:"Button_Button__3_qJh"}},32:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(3),s=a.n(c),i=(a(32),a(4)),l=a(5),u=a(7),m=a(6),h=a(11),d=a(26),g=(a(33),a(8)),j=a.n(g),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={image:""},e.handleNameChange=function(t){e.setState({image:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.image.trim()?(e.props.getImg(e.state.image),e.setState({image:""})):h.b.warn("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u043f\u043e\u0438\u0441\u043a\u0430")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:j.a.Searchbar,children:Object(n.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(n.jsx)(d.a,{style:{marginRight:8}})}),Object(n.jsx)("input",{className:j.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.image,onChange:this.handleNameChange})]})})}}]),a}(r.Component),b=a(22),f=a.n(b),O=a(18),v=a.n(O),y=a(12),I=a.n(y),x=document.querySelector("#modal-root"),_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(c.createPortal)(Object(n.jsx)("div",{className:I.a.Overlay,onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:I.a.Modal,children:Object(n.jsx)("img",{className:I.a.ModalImg,src:t,alt:a})})}),x)}}]),a}(r.Component),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.showModal,t=this.props,a=t.src,r=t.alt,o=t.modalImg;return Object(n.jsxs)("li",{className:v.a.ImageGalleryItem,children:[Object(n.jsx)("img",{onClick:this.toggleModal,src:a,alt:r,className:v.a.ImageGalleryItemImage}),e&&Object(n.jsx)(_,{onClose:this.toggleModal,src:o,alt:r})]})}}]),a}(r.Component);function w(e){var t=e.images;return Object(n.jsx)("ul",{className:f.a.ItemList,children:t.map((function(e){return Object(n.jsx)(S,{src:e.webformatURL,alt:e.tags,modalImg:e.largeImageURL},e.id)}))})}var k={fetchImages:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("19029120-3d5d472043b9b4c189da88885","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430"))}))}},C=a(23),M=a.n(C);a(55);function F(){return Object(n.jsx)(M.a,{type:"Grid",color:"#00BFFF",height:80,width:80})}function B(e){var t=e.message;return Object(n.jsx)("div",{role:"alert",children:Object(n.jsxs)("p",{children:["\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. ",t]})})}var N=a(24),L=a(25),G=a.n(L),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).scrollPageOnBtnMore=function(){e.props.onClick(),N.animateScroll.scrollToBottom()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("button",{onClick:this.scrollPageOnBtnMore,className:G.a.Button,type:"button",children:"Load more"})}}]),a}(r.Component),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:null,error:null,status:"idle",page:1},e.onClickLoadMoreBtn=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.imgItem,r=this.props.imgItem,o=t.page,c=this.state.page;console.log(c),n!==r&&this.setState({page:1}),n===r&&o===c||(this.setState({status:"pending"}),k.fetchImages(r,c).then((function(e){return a.setState({images:e,status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})})))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.status,r=e.images;return"idle"===a?Object(n.jsx)("p",{style:{textAlign:"center"},children:"\u0414\u0430\u0432\u0430\u0439 \u0447\u0442\u043e-\u0442\u043e \u043d\u0430\u0439\u0434\u0435\u043c"}):"pending"===a?Object(n.jsx)(F,{}):"rejected"===a?Object(n.jsx)(B,{message:t.message}):"resolved"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w,{images:r.hits}),Object(n.jsx)(A,{onClick:this.onClickLoadMoreBtn})]}):void 0}}]),a}(r.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={image:""},e.handleFormSubmit=function(t){e.setState({image:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{getImg:this.handleFormSubmit}),Object(n.jsx)(D,{imgItem:this.state.image}),Object(n.jsx)(h.a,{autoClose:3e3})]})}}]),a}(r.Component);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2nlN4",SearchForm:"Searchbar_SearchForm__VfF_Z",SearchFormButton:"Searchbar_SearchFormButton__2P3t8",SearchFormInput:"Searchbar_SearchFormInput__20mjM"}}},[[64,1,2]]]);
//# sourceMappingURL=main.c141249c.chunk.js.map