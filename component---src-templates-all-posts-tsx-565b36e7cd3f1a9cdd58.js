(self.webpackChunkjosuedla=self.webpackChunkjosuedla||[]).push([[842],{7149:function(e,t,n){"use strict";n.d(t,{fL:function(){return a},fb:function(){return o},cp:function(){return i},DZ:function(){return l},QD:function(){return m},wz:function(){return c},y4:function(){return d}});var r=n(9),a=r.ZP.article.withConfig({displayName:"PostCard__PostCardWrapper",componentId:"sc-12wjt0g-0"})(["display:grid;padding:2rem 0;align-items:center;grid-auto-rows:1fr;gap:2rem;width:80%;align-self:center;@media screen and (","){width:100%;}"],(function(e){return e.theme.media.large})),o=r.ZP.div.withConfig({displayName:"PostCard__ImageWrapper",componentId:"sc-12wjt0g-1"})(["position:relative;flex-basis:40%;overflow:hidden;display:flex;@media screen and (","){flex-basis:15rem;display:none;}.post-img{right:0;top:0;position:absolute;width:100%;background-color:rgba(0,0,0,0.5);}"],(function(e){return e.theme.media.medium})),i=r.ZP.div.withConfig({displayName:"PostCard__DescriptionWrapper",componentId:"sc-12wjt0g-2"})(['flex-basis:60%;position:relative;margin:0 2rem;&:before{content:"";margin-left:-2rem;transform:skewX(-3deg);background:var(--bg-tertiary);width:2rem;position:absolute;left:-10px;top:0;bottom:0;}.post-link{text-align:right;color:var(--accent-primary);display:inline-block;position:absolute;text-decoration:underline;cursor:pointer;padding-bottom:1rem;right:0;bottom:0;}']),l=r.ZP.h2.withConfig({displayName:"PostCard__PostTitle",componentId:"sc-12wjt0g-3"})(['font-size:2rem;line-height:2rem;text-align:center;&:after{content:"";display:block;position:absolute;height:0.3rem;background-color:var(--accent-primary);width:100%;border-radius:0.3rem;margin-top:0.4rem;}@media screen and (',"){font-size:1.5rem;}@media screen and (","){font-size:1.2rem;}"],(function(e){return e.theme.media.medium}),(function(e){return e.theme.media.extraSmall})),m=r.ZP.div.withConfig({displayName:"PostCard__PostDescription",componentId:"sc-12wjt0g-4"})(["padding-bottom:3rem;text-align:left;"]),c=r.ZP.div.withConfig({displayName:"PostCard__PostTags",componentId:"sc-12wjt0g-5"})(["display:flex;align-self:center;.tag{background-color:rgba(255,255,255,0.5);color:var(--text-secondary);text-decoration:none;border-radius:0.3rem;margin-right:0.5em;line-height:1.5em;font-size:0.75rem;padding:0 0.5em;cursor:pointer;}"]),d=r.ZP.article.withConfig({displayName:"PostCard",componentId:"sc-12wjt0g-6"})(["display:flex;overflow:hidden;flex-direction:row;background-color:var(--bg-tertiary);line-height:1.4rem;border-radius:0.3rem;width:100%;height:100%;color:var(--text-secondary);margin:0 auto;justify-content:center;box-shadow:",";@media screen and (","){flex-direction:column;}"],(function(e){return e.theme.boxShadow}),(function(e){return e.theme.media.medium}))},502:function(e,t,n){"use strict";n.r(t);var r=n(1804),a=n.n(r),o=n(7294),i=n(5444),l=n(6802),m=n(7149),c=n(264),d=n(6954),s=n(769),u=n(6391),g=n(643);t.default=function(e){var t=e.pageContext,n=e.data,r=e.location,p=m.cp,f=m.y4,h=m.fL,b=m.DZ,w=m.QD,y=m.wz,x=m.fb,P=t.currentPage,v=t.numPages,C=1===P?(r.pathname+"/").replace("//","/"):(r.pathname+"/").replace("/"+P,"/").replace("//","/"),k=(C+"tags/").replace("//","/"),E=1===P,Z=P===v,_=P-1==1?""+C:""+C+(P-1),N=""+C+(P+1),j=n.allMdx.edges;return o.createElement(s.Z,null,o.createElement(g.Z,{title:"Blog",location:r}),o.createElement("main",{id:"blog-main",className:"container"},o.createElement(d.Jh,null,"Blog"),o.createElement(h,null,j.map((function(e){return o.createElement(f,{key:e.node.frontmatter.slug},o.createElement(x,null,o.createElement(l.G,{image:(0,l.d)(e.node.frontmatter.thumbnail),alt:e.node.frontmatter.title,className:"post-img"})),o.createElement(p,null,o.createElement(b,null,e.node.frontmatter.title),o.createElement(w,null,e.node.frontmatter.excerpt,o.createElement("br",null),e.node.frontmatter.date,o.createElement(y,null,e.node.frontmatter.tags.map((function(e,t){return o.createElement(i.Link,{key:t,className:"tag",to:""+k+a()(e.toLowerCase())},e)})))),o.createElement(i.Link,{to:""+C+e.node.frontmatter.slug,className:"post-link"},"Read More")))}))),o.createElement(u.Z,{tags:t.tags,pathPrefix:k}),o.createElement("div",{style:{flexGrow:1}}),o.createElement(c.ZP,{isFirst:E,isLast:Z,previousPage:_,nextPage:N})))}}}]);
//# sourceMappingURL=component---src-templates-all-posts-tsx-565b36e7cd3f1a9cdd58.js.map