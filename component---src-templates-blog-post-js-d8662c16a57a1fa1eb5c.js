"use strict";(self.webpackChunkntoskrnl_personal_site=self.webpackChunkntoskrnl_personal_site||[]).push([[989],{9535:function(e,t,a){var l=a(7294),i=a(5444),c=a(2359);t.Z=function(){var e,t=null===(e=(0,i.useStaticQuery)("3274528899").site.siteMetadata)||void 0===e?void 0:e.author;return l.createElement("div",{className:"bio"},l.createElement(c.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(1944)}),(null==t?void 0:t.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,t.name)," —"," ",(null==t?void 0:t.summary)||null))}},4870:function(e,t,a){a.r(t);var l=a(7294),i=a(5444),c=a(9535),r=a(7198),n=a(3751);t.default=function(e){var t,a=e.data,d=e.location,o=a.markdownRemark,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",p=a.previous,m=a.next,u=o.frontmatter,f=u.date;return u.updated&&u.updated!==u.date&&(f+=", updated "+u.updated),l.createElement(r.Z,{location:d,title:s},l.createElement(n.Z,{title:u.title,description:u.description||o.excerpt}),l.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h1",{itemProp:"headline"},u.draft?"[DRAFT]":""," ",u.title),l.createElement("p",null,f," | ",o.fields.readingTime.text)),l.createElement("section",{dangerouslySetInnerHTML:{__html:o.html},itemProp:"articleBody"}),l.createElement("hr",null),l.createElement("footer",null,l.createElement(c.Z,null))),l.createElement("nav",{className:"blog-post-nav"},l.createElement("ul",null,l.createElement("li",null,p&&l.createElement(i.Link,{to:"/blog"+p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),l.createElement("li",null,m&&l.createElement(i.Link,{to:"/blog"+m.fields.slug,rel:"next"},m.frontmatter.title," →")))))}},1944:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6cc7eac2bddc48d85d772de6b33e2757/d24ee/profile-pic.jpg","srcSet":"/static/6cc7eac2bddc48d85d772de6b33e2757/d24ee/profile-pic.jpg 50w,\\n/static/6cc7eac2bddc48d85d772de6b33e2757/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/6cc7eac2bddc48d85d772de6b33e2757/d4bf4/profile-pic.avif 50w,\\n/static/6cc7eac2bddc48d85d772de6b33e2757/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/6cc7eac2bddc48d85d772de6b33e2757/3faea/profile-pic.webp 50w,\\n/static/6cc7eac2bddc48d85d772de6b33e2757/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);