(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{290:function(t,e,a){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__d5vZN"}},291:function(t,e,a){t.exports={postsBlock:"MyPosts_postsBlock__tRchh",posts:"MyPosts_posts__yriqh"}},292:function(t,e,a){t.exports={item:"Post_item__1SbVs"}},293:function(t,e,a){"use strict";a.r(e);var s=a(33),n=a(34),o=a(36),r=a(35),u=a(0),c=a.n(u),i=a(93),l=a(291),p=a.n(l),m=a(292),d=a.n(m),f=function(t){return c.a.createElement("div",{className:d.a.item},c.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),t.message,c.a.createElement("div",null,c.a.createElement("span",null,"like")," ",t.likesCount))},h=a(125),b=a(126),E=a(47),v=a(65),g=Object(E.a)(10),k=c.a.memo((function(t){console.log("render");var e=t.posts.map((function(t){return c.a.createElement(f,{message:t.message,key:t.id,likesCount:t.likesCount})}));return c.a.createElement("div",{className:p.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(j,{onSubmit:function(e){t.addPost(e.newPostText)}}),c.a.createElement("div",{className:p.a.posts},e))})),j=Object(b.a)({form:"profileAddNewPostForm"})((function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("div",null,c.a.createElement(h.a,{component:v.b,name:"newPostText",validate:[E.b,g]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),P=k,O=a(12),S=Object(O.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(i.a)(e))}}}))(P),_=a(290),w=a.n(_),y=a(38),x=a(127),B=function(t){var e=Object(u.useState)(!1),a=Object(x.a)(e,2),s=a[0],n=a[1],o=Object(u.useState)(t.status),r=Object(x.a)(o,2),i=r[0],l=r[1];Object(u.useEffect)((function(){l(t.status)}),[t.status]);return c.a.createElement(c.a.Fragment,null,!s&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){n(!0)}},t.status||"-----")),s&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(t){l(t.currentTarget.value)},value:i,onBlur:function(){n(!1),t.updateStatus(i)},autoFocus:!0})))},C=function(t){var e=t.profile,a=t.status,s=t.updateStatus;return e?c.a.createElement("div",null,c.a.createElement("div",{className:w.a.descriptionBlock},c.a.createElement("img",{src:e.photos.large,alt:""}),c.a.createElement(B,{status:a,updateStatus:s}))):c.a.createElement(y.a,null)},N=function(t){return c.a.createElement("div",null,c.a.createElement(C,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),c.a.createElement(S,{store:t.store}))},I=a(10),T=a(8),A=function(t){Object(o.a)(a,t);var e=Object(r.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return c.a.createElement(N,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(c.a.Component);e.default=Object(T.d)(Object(O.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:i.d,getStatus:i.c,updateStatus:i.e}),I.f)(A)}}]);
//# sourceMappingURL=3.76db5b5d.chunk.js.map