(self.webpackChunkjosuedla=self.webpackChunkjosuedla||[]).push([[535],{1792:function(e,t,r){"use strict";r.d(t,{Le:function(){return o},vU:function(){return i},Wn:function(){return l},v6:function(){return c},Bx:function(){return s},t:function(){return m},Ds:function(){return u}});var n=r(9),a=r(9929),o=n.ZP.article.withConfig({displayName:"ProjectCard__ProjectCardWrapper",componentId:"sc-18zdks6-0"})(["display:grid;gap:2rem;width:100%;grid-template-columns:repeat(auto-fit,20rem);padding-bottom:4rem;justify-content:space-evenly;@media (max-width:360px){grid-template-columns:repeat(auto-fill,minmax(100%,1fr));}"]),i=n.ZP.h3.withConfig({displayName:"ProjectCard__ProjectTitle",componentId:"sc-18zdks6-1"})(["margin:0;font-size:1.8em;line-height:1.5em;text-align:center;"]),l=n.ZP.p.withConfig({displayName:"ProjectCard__ProjectDescription",componentId:"sc-18zdks6-2"})(["font-size:1em;line-height:1.5em;margin-top:1em;"]),c=n.ZP.div.withConfig({displayName:"ProjectCard__ProjectTags",componentId:"sc-18zdks6-3"})(["display:flex;align-self:center;.tag{background:rgba(255,255,255,0.5);color:white;text-decoration:none;transition:all,0.5s;border-radius:0.3rem;margin-right:0.5em;line-height:1.5em;font-size:0.75em;padding:0 0.5em;cursor:pointer;}"]),d=(0,n.iv)(["display:inline-block;padding:0.5rem;background:var(--accent-primary);border:1px solid var(--accent-primary);text-align:center;font-size:1rem;text-decoration:none;color:white;cursor:pointer;margin:0;width:30%;"," &:hover{background:transparent;}&:active{background:var(--accent-primary);}"],a.k),s=n.ZP.div.withConfig({displayName:"ProjectCard__GroupButton",componentId:"sc-18zdks6-4"})(["display:flex;align-items:center;justify-content:center;padding:1rem 0;.left{"," border-radius:0.3rem 0 0 0.3rem;border-right:1px solid rgba(0,0,0,0.5);}.right{"," border-radius:0 0.3rem 0.3rem 0;border-left:1px solid rgba(0,0,0,0.5);}"],d,d),m=n.ZP.article.withConfig({displayName:"ProjectCard",componentId:"sc-18zdks6-5"})(["position:relative;display:flex;width:90%;max-width:18rem;margin:auto;background-color:var(--bg-video);border:10px solid var(--bg-secondary);color:white;border-radius:1em;box-shadow:",";overflow:hidden;.project-img{width:100%;height:100%;opacity:1;}"],(function(e){return e.theme.boxShadow})),u=n.ZP.div.withConfig({displayName:"ProjectCard__ProjectContent",componentId:"sc-18zdks6-6"})(['position:absolute;text-align:center;display:flex;flex-direction:column;justify-content:flex-end;height:100%;padding:1rem 1rem;bottom:0;transition:all,0.5s;&:hover{transform:rotate(0);color:white;}&:before,&:after{content:"";transform:scale(0);transform-origin:top left;border-radius:50%;position:absolute;left:-50%;top:-50%;z-index:-5;transition:all,0.5s;transition-timing-function:ease-in-out;}&:before{background-color:var(--bg-secondary);width:250%;height:250%;opacity:0.5;}&:after{background-color:var(--bg-secondary);width:200%;height:200%;opacity:0.5;}&:hover:before,x &:hover:after{transform:scale(1);}&:hover '," .tag{background:var(--accent-primary);color:white;}"],c)},3992:function(e,t,r){"use strict";var n=r(9756),a=r(7294),o=r(5444),i=r(3403);t.Z=function(e){var t=e.demo,r=e.slug,l=e.title,c=e.children,d=(0,n.Z)(e,["demo","slug","title","children"]);return t?a.createElement(i.M,Object.assign({href:""+t,target:"_blank","aria-label":l,rel:"noreferrer"},d),c):a.createElement(o.Link,Object.assign({to:"/projects/"+r},d),c)}},7646:function(e,t,r){"use strict";r.r(t);var n=r(1804),a=r.n(n),o=r(7294),i=r(5444),l=r(3403),c=r(1870),d=r(1792),s=r(3992),m=r(264),u=r(6954),f=r(1203),g=r(6391),p=r(643);t.default=function(e){var t=e.pageContext,r=e.data,n=e.location,h=d.Le,b=d.vU,v=d.Wn,y=d.v6,k=d.Bx,w=d.t,x=d.Ds,P=t.currentPage,C=t.numPages,j=1===P?(n.pathname+"/").replace("//","/"):(n.pathname+"/").replace("/"+P,"/").replace("//","/"),E=(j+"tags/").replace("//","/"),_=1===P,Z=P===C,z=P-1==1?""+j:""+j+(P-1),N=""+j+(P+1),I=r.allMdx.edges;return o.createElement(f.Z,null,o.createElement(p.Z,{title:"Projects",location:n}),o.createElement("main",{id:"projects-main",className:"container"},o.createElement(u.Jh,null,"Projects"),o.createElement(h,{style:{padding:"2rem 0"}},I.map((function(e){return o.createElement(w,{key:e.node.frontmatter.slug},o.createElement(c.G,{image:(0,c.e)(e.node.frontmatter.thumbnail),alt:e.node.frontmatter.title}),o.createElement(x,null,o.createElement(b,null,e.node.frontmatter.title),o.createElement(v,null,e.node.frontmatter.excerpt),o.createElement(y,null,e.node.frontmatter.tags.map((function(e,t){return o.createElement(i.Link,{key:t,className:"tag",to:""+E+a()(e.toLowerCase())},e)}))),o.createElement(k,null,o.createElement(s.Z,{demo:e.node.frontmatter.demo,slug:e.node.frontmatter.slug,title:e.node.frontmatter.title,className:"left"},"Demo"),o.createElement(l.M,{className:"right",href:e.node.frontmatter.code,target:"_blank","aria-label":""+e.node.frontmatter.title,rel:"noreferrer"},"Code"))))}))),o.createElement(g.Z,{tags:t.tags,pathPrefix:E}),o.createElement("div",{style:{flexGrow:1}}),o.createElement(m.ZP,{isFirst:_,isLast:Z,previousPage:z,nextPage:N})))}},3403:function(e,t,r){"use strict";var n=r(5318);t.M=void 0;var a=n(r(7154)),o=n(r(7316)),i=n(r(7294)),l=n(r(5697)),c=i.default.forwardRef((function(e,t){var r=e.children,n=(0,o.default)(e,["children"]);return i.default.createElement("a",(0,a.default)({ref:t},n,{onClick:function(e){"function"==typeof n.onClick&&n.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),n.target&&"_self"!==n.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:n.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=n.href)}}):t&&(document.location=n.href),!1}}),r)}));t.M=c,c.propTypes={href:l.default.string,target:l.default.string,onClick:l.default.func}}}]);
//# sourceMappingURL=component---src-templates-all-projects-tsx-42e559c6c767fffa8cd5.js.map