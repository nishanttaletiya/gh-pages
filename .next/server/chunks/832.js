exports.id=832,exports.ids=[832],exports.modules={5972:(e,t,l)=>{Promise.resolve().then(l.bind(l,8704))},9124:(e,t,l)=>{Promise.resolve().then(l.bind(l,8938))},4030:()=>{},7078:()=>{},7699:(e,t,l)=>{Promise.resolve().then(l.t.bind(l,3219,23)),Promise.resolve().then(l.t.bind(l,4863,23)),Promise.resolve().then(l.t.bind(l,5155,23)),Promise.resolve().then(l.t.bind(l,802,23)),Promise.resolve().then(l.t.bind(l,9350,23)),Promise.resolve().then(l.t.bind(l,8530,23)),Promise.resolve().then(l.t.bind(l,8921,23))},1771:(e,t,l)=>{Promise.resolve().then(l.t.bind(l,6959,23)),Promise.resolve().then(l.t.bind(l,3875,23)),Promise.resolve().then(l.t.bind(l,8903,23)),Promise.resolve().then(l.t.bind(l,7174,23)),Promise.resolve().then(l.t.bind(l,4178,23)),Promise.resolve().then(l.t.bind(l,7190,23)),Promise.resolve().then(l.t.bind(l,1365,23))},8938:(e,t,l)=>{"use strict";l.d(t,{Client:()=>D});var a=l(5512),r=l(2192),i=l(8009),s=l.n(i),n=l(7515),o=l.n(n),d=l(4791),c=l(5289),u=l.n(c);let p=(0,d.Oo)("Section",u()),m=({children:e,className:t,padding:l="0px",maxWidth:r="1280px",style:i={}})=>(0,a.jsx)("div",{className:`${p()}${t?` ${t}`:""}`,style:{...i,paddingTop:l,paddingBottom:l},children:(0,a.jsx)("div",{className:p("inner"),style:{maxWidth:r},children:e})}),x=(0,d.Oo)("ButtonGroup",o());l(7481);var h=l(9334),b=l(8815),y=l.n(b),g=l(5577),f=l(7892);let v=(0,d.Oo)("Columns",y());var j=l(4950),w=l.n(j),N=l(2443);let k=[{content:"Age is an issue of mind over matter. If you don't mind, it doesn't matter.",author:"Mark Twain"},{content:"Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.",author:"Henry Ford"},{content:"Wrinkles should merely indicate where smiles have been.",author:"Mark Twain"},{content:"True terror is to wake up one morning and discover that your high school class is running the country.",author:"Kurt Vonnegut"},{content:"As I grow older, I pay less attention to what men say. I just watch what they do.",author:"Andrew Carnegie"},{content:"How incessant and great are the ills with which a prolonged old age is replete.",author:"C. S. Lewis"},{content:"Old age, believe me, is a good and pleasant thing. It is true you are gently shouldered off the stage, but then you are given such a comfortable front stall as spectator.",author:"Confucius"},{content:"Old age has deformities enough of its own. It should never add to them the deformity of vice.",author:"Eleanor Roosevelt"},{content:"Nobody grows old merely by living a number of years. We grow old by deserting our ideals. Years may wrinkle the skin, but to give up enthusiasm wrinkles the soul.",author:"Samuel Ullman"}],C=(0,d.Oo)("Hero",w());var S=l(1463),_=l(5139),I=l.n(_);let F=(0,d.Oo)("Flex",I());var P=l(7079),T=l.n(P);let L=(0,d.Oo)("Stats",T());var H=l(8531),R=l.n(H),q=l(5668),A=l(2454);l(5806);let W=(e,t)=>{let l={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"colored",transition:A.q7};switch(e){case"success":A.oR.success(t,l);break;case"error":A.oR.error(t,l);break;case"warning":A.oR.warning(t,l);break;case"info":A.oR.info(t,l);break;default:(0,A.oR)(t,l)}},$=JSON.parse('{"$i":"vikshit","pu":"triveni"}');l(5724),l(8334);let B={categories:{layout:{components:["Columns","Flex","Navbar","Footer","VerticalSpace","Form"]},typography:{components:["Heading","Text","Paragraph"]},interactive:{title:"Actions",components:["ButtonGroup"]}},components:{ButtonGroup:{label:"Button Group",fields:{buttons:{type:"array",getItemSummary:e=>e.label||"Button",arrayFields:{label:{type:"text"},href:{type:"text"},variant:{type:"radio",options:[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"}]}},defaultItemProps:{label:"Button",href:"#",variant:"primary"}},align:{type:"radio",options:[{label:"left",value:"left"},{label:"center",value:"center"}]}},defaultProps:{buttons:[{label:"Learn more",href:"#",variant:"primary"}]},render:({align:e,buttons:t,TrivBuilder:l})=>(0,a.jsx)(m,{className:x({center:"center"===e}),children:(0,a.jsx)("div",{className:x("actions"),children:t.map((e,t)=>(0,a.jsx)(r.$n,{href:e.href,variant:e.variant,size:"large",tabIndex:l.isEditing?-1:void 0,children:e.label},t))})})},Card:{fields:{CardSize:{type:"radio",label:"Card Size",options:[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}]},cardWidth:{type:"text",label:"Card Width"},cardFlip:{type:"radio",label:"Card Flip",options:[{label:"Flip In",value:"left"},{label:"Flip Out",value:"right"}]},title:{type:"text",label:"Title"},titleAlign:{type:"radio",label:"Title Align",options:[{label:"Left",value:"flex-start"},{label:"Center",value:"center"},{label:"Right",value:"flex-end"}]},titleFont:{type:"text",label:"Title Font Style"},description:{type:"textarea",label:"Description"},textAlign:{type:"radio",label:"Text Align",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},textFont:{type:"text",label:"Text Font Style"},image:{type:"object",label:"Image Upload",objectFields:{img:{type:"imageDrop",allowImageDrop:!0,imgFile:null,isChange:!1}}},imageShape:{type:"radio",label:"Image Shape",options:[{label:"Circle",value:"circle"},{label:"Square",value:"square"}]},imgWidth:{type:"text",label:"Image Width"}},defaultProps:{title:"Title",titleAlign:"flex-start",titleFont:"Arial, sans-serif",description:"Description",textAlign:"left",textFont:"Arial, sans-serif",CardSize:"large",imageShape:"square",imgWidth:"100%",cardFlip:"left",cardWidth:"100%"},render:({title:e,titleAlign:t,titleFont:l,description:r,textAlign:n,textFont:o,CardSize:d,imageShape:c,image:u,imgWidth:p,cardWidth:m,cardFlip:x})=>{let b;let[y,g]=(0,i.useState)(0),f=(0,i.useRef)(!1);(0,h.usePathname)(),s().useEffect(()=>{u?.img?.isChange&&f.current},[u]);let v={borderRadius:"circle"===c?"50%":"0",objectFit:"contain",height:"100%",width:"100%"},j=(0,a.jsx)("p",{className:"card-text",style:{textAlign:n,fontFamily:o},children:r});if("small"===d){let r;r="flex-start"===t?"left":"flex-end"===t?"right":"center",b=(0,a.jsx)("h2",{className:"card-title",style:{textAlign:r,fontFamily:l},children:e})}else b=(0,a.jsx)("h2",{className:"card-title",style:{alignSelf:t,fontFamily:l},children:e});return(0,a.jsxs)(a.Fragment,{children:["small"===d&&"left"===x&&(0,a.jsxs)("div",{className:"card mx-auto",style:{maxWidth:"20rem",width:m},children:[u?.img?.url&&(0,a.jsx)("img",{src:u.img.url,className:"card-img-top",alt:"Card image",style:{...v,width:"auto"}}),(0,a.jsxs)("div",{className:"card-body text-center",children:[b,j]})]}),"small"===d&&"right"===x&&(0,a.jsxs)("div",{className:"card mx-auto",style:{maxWidth:"20rem",width:m},children:[(0,a.jsxs)("div",{className:"card-body text-center",children:[b,j]}),u?.img?.url&&(0,a.jsx)("img",{src:u.img.url,className:"card-img-top",alt:"Card image",style:{...v,width:"auto"}})]}),"large"===d&&"left"===x&&(0,a.jsx)("div",{className:"card mx-auto",style:{maxWidth:"98%",width:m},children:(0,a.jsxs)("div",{className:"row g-0",children:[(0,a.jsxs)("div",{className:"col-md-7 d-flex flex-column justify-content-center p-4",children:[b,j]}),u?.img?.url&&(0,a.jsx)("div",{className:"col-md-5 d-flex align-items-center justify-content-center",children:(0,a.jsx)("img",{src:u.img.url,className:"img-fluid",alt:"Card image",style:{...v,width:p}})})]})}),"large"===d&&"right"===x&&(0,a.jsx)("div",{className:"card mx-auto",style:{maxWidth:"98%",width:m},children:(0,a.jsxs)("div",{className:"row g-0",children:[u?.img?.url&&(0,a.jsx)("div",{className:"col-md-5 d-flex align-items-center justify-content-center",children:(0,a.jsx)("img",{src:u.img.url,className:"img-fluid",alt:"Card image",style:{...v,width:p}})}),(0,a.jsxs)("div",{className:"col-md-7 d-flex flex-column justify-content-center p-4",children:[b,j]})]})})]})}},Columns:{resolveData:({props:e},{lastData:t})=>t?.props.columns.length===e.columns.length?{props:e}:{props:{...e,columns:e.columns.map(e=>({...e,id:e.id??(0,f.$)()}))}},fields:{distribution:{type:"radio",options:[{value:"auto",label:"Auto"},{value:"manual",label:"Manual"}]},columns:{type:"array",getItemSummary:e=>`Column (span ${e.span?Math.max(Math.min(e.span,12),1):"auto"})`,arrayFields:{span:{label:"Span (1-12)",type:"number",min:0,max:12}}}},defaultProps:{distribution:"auto",columns:[{},{}]},render:({columns:e,distribution:t})=>(0,a.jsx)(m,{children:(0,a.jsx)("div",{className:v(),style:{gridTemplateColumns:"manual"===t?"repeat(12, 1fr)":`repeat(${e.length}, 1fr)`},children:e.map(({span:e,id:l},r)=>(0,a.jsx)("div",{style:{display:"flex",flexDirection:"column",gridColumn:e&&"manual"===t?`span ${Math.max(Math.min(e,12),1)}`:""},children:(0,a.jsx)(g.wC,{zone:`column-${l??r}`,disallow:["Hero","Logos","Stats"]})},l??r))})})},Heading:{fields:{text:{type:"textarea"},size:{type:"select",options:[{value:"xxxl",label:"XXXL"},{value:"xxl",label:"XXL"},{value:"xl",label:"XL"},{value:"l",label:"L"},{value:"m",label:"M"},{value:"s",label:"S"},{value:"xs",label:"XS"}]},level:{type:"select",options:[{label:"",value:""},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"},{label:"6",value:"6"}]},align:{type:"radio",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},padding:{type:"text"}},defaultProps:{align:"left",text:"Heading",padding:"24px",size:"m"},render:({align:e,text:t,size:l,level:r,padding:i})=>(0,a.jsx)(m,{padding:i,children:(0,a.jsx)(S.D,{size:l,rank:r,children:(0,a.jsx)("span",{style:{display:"block",textAlign:e,width:"100%"},children:t})})})},Flex:{fields:{items:{type:"array",arrayFields:{minItemWidth:{label:"Minimum Item Width",type:"number",min:0}},getItemSummary:(e,t=-1)=>`Item ${t+1}`},minItemWidth:{label:"Minimum Item Width",type:"number",min:0}},defaultProps:{items:[{},{}],minItemWidth:356},render:({items:e,minItemWidth:t})=>(0,a.jsx)(m,{children:(0,a.jsx)("div",{className:F(),children:e.map((e,l)=>(0,a.jsx)("div",{className:F("item"),style:{minWidth:e.minItemWidth||t},children:(0,a.jsx)(g.wC,{zone:`item-${l}`})},l))})})},Stats:{fields:{items:{type:"array",getItemSummary:(e,t)=>e.title||`Feature #${t}`,defaultItemProps:{title:"Title",description:"Description"},arrayFields:{title:{type:"text"},description:{type:"text"}}}},defaultProps:{items:[{title:"Stat",description:"1,000"}]},render:({items:e})=>(0,a.jsx)(m,{className:L(),maxWidth:"916px",children:(0,a.jsx)("div",{className:L("items"),children:e.map((e,t)=>(0,a.jsxs)("div",{className:L("item"),children:[(0,a.jsx)("div",{className:L("label"),children:e.title}),(0,a.jsx)("div",{className:L("value"),children:e.description})]},t))})})},Text:{fields:{text:{type:"textarea"},size:{type:"select",options:[{label:"S",value:"s"},{label:"M",value:"m"}]},align:{type:"radio",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},color:{type:"radio",options:[{label:"Default",value:"default"},{label:"Muted",value:"muted"}]},padding:{type:"text"},maxWidth:{type:"text"}},defaultProps:{align:"left",text:"Text",padding:"24px",size:"m",color:"default"},render:({align:e,color:t,text:l,size:r,padding:i,maxWidth:s})=>(0,a.jsx)(m,{padding:i,maxWidth:s,children:(0,a.jsx)("span",{style:{color:"default"===t?"inherit":"var(--TrivBuilder-color-grey-05)",display:"flex",textAlign:e,width:"100%",fontSize:"m"===r?"20px":"16px",fontWeight:300,maxWidth:s,marginLeft:"auto",marginRight:"auto",justifyContent:"center"===e?"center":"right"===e?"flex-end":"flex-start"},children:l})})},VerticalSpace:{label:"Vertical Space",fields:{size:{type:"select",options:[{label:"8px",value:"8px"},{label:"16px",value:"16px"},{label:"24px",value:"24px"},{label:"32px",value:"32px"},{label:"40px",value:"40px"},{label:"48px",value:"48px"},{label:"56px",value:"56px"},{label:"64px",value:"64px"},{label:"72px",value:"72px"},{label:"80px",value:"80px"},{label:"88px",value:"88px"},{label:"96px",value:"96px"},{label:"104px",value:"104px"},{label:"112px",value:"112px"},{label:"120px",value:"120px"},{label:"128px",value:"128px"},{label:"136px",value:"136px"},{label:"144px",value:"144px"},{label:"152px",value:"152px"},{label:"160px",value:"160px"}]}},defaultProps:{size:"24px"},render:({size:e})=>(0,a.jsx)("div",{style:{height:e,width:"100%"}})},Hero:{fields:{quote:{type:"external",placeholder:"Select a quote",showSearch:!1,renderFooter:({items:e})=>(0,a.jsxs)("div",{children:[e.length," result",1===e.length?"":"s"]}),filterFields:{author:{type:"select",options:[{value:"",label:"Select an author"},{value:"Mark Twain",label:"Mark Twain"},{value:"Henry Ford",label:"Henry Ford"},{value:"Kurt Vonnegut",label:"Kurt Vonnegut"},{value:"Andrew Carnegie",label:"Andrew Carnegie"},{value:"C. S. Lewis",label:"C. S. Lewis"},{value:"Confucius",label:"Confucius"},{value:"Eleanor Roosevelt",label:"Eleanor Roosevelt"},{value:"Samuel Ullman",label:"Samuel Ullman"}]}},fetchList:async({query:e,filters:t})=>(await new Promise(e=>setTimeout(e,500)),k.map((e,t)=>({index:t,title:e.author,description:e.content})).filter(l=>{if(t?.author&&l.title!==t?.author)return!1;if(!e)return!0;let a=e.toLowerCase();if(l.title.toLowerCase().indexOf(a)>-1||l.description.toLowerCase().indexOf(a)>-1)return!0})),mapRow:e=>({title:e.title,description:e.description}),mapProp:e=>({index:e.index,label:e.description}),getItemSummary:e=>e.label},title:{type:"text"},description:{type:"textarea"},buttons:{type:"array",min:1,max:4,getItemSummary:e=>e.label||"Button",arrayFields:{label:{type:"text"},href:{type:"text"},variant:{type:"select",options:[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"}]}},defaultItemProps:{label:"Button",href:"#"}},align:{type:"radio",options:[{label:"left",value:"left"},{label:"center",value:"center"}]},image:{type:"object",objectFields:{img:{type:"imageDrop",allowImageDrop:!0,imgFile:null,isChange:!1},mode:{type:"radio",options:[{label:"inline",value:"inline"},{label:"background",value:"background"}]}}},padding:{type:"text"}},defaultProps:{title:"Hero",align:"left",description:"Description",buttons:[{label:"Learn more",href:"#"}],padding:"64px"},resolveData:async({props:e},{changed:t})=>e.quote?t.quote?(await new Promise(e=>setTimeout(e,500)),{props:{title:k[e.quote.index].author,description:k[e.quote.index].content},readOnly:{title:!0,description:!0}}):{props:e}:{props:e,readOnly:{title:!1,description:!1}},resolveFields:async(e,{fields:t})=>"center"===e.props.align?{...t,image:void 0}:t,resolvePermissions:async(e,t)=>t.changed.quote?(await new Promise(e=>setTimeout(e,500)),{...t.permissions,delete:e.props.quote?.index!==7}):t.lastPermissions,render:({align:e,title:t,description:l,buttons:r,padding:n,image:o,TrivBuilder:d})=>{let[c,u]=(0,i.useState)(0),p=(0,i.useRef)(!1);return(0,h.usePathname)(),s().useEffect(()=>{o?.img?.isChange&&p.current},[o]),(0,a.jsxs)(m,{padding:n,className:C({left:"left"===e,center:"center"===e,hasImageBackground:o?.mode==="background"}),children:[o?.mode==="background"&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:C("image"),style:{backgroundImage:`url("${o?.img?.url}")`}}),(0,a.jsx)("div",{className:C("imageOverlay")})]}),(0,a.jsxs)("div",{className:C("inner"),children:[(0,a.jsxs)("div",{className:C("content"),children:[(0,a.jsx)("h1",{children:t}),(0,a.jsx)("p",{className:C("subtitle"),children:l}),(0,a.jsx)("div",{className:C("actions"),children:r.map((e,t)=>(0,a.jsx)(N.$,{href:e.href,variant:e.variant,size:"large",tabIndex:d.isEditing?-1:void 0,children:e.label},t))})]}),"center"!==e&&o?.mode!=="background"&&o?.img?.url&&(0,a.jsx)("div",{style:{backgroundImage:`url('${o?.img?.url}')`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",borderRadius:24,height:356,marginLeft:"auto",width:"100%"}})]})]})}},Navbar:{fields:{size:{type:"select",options:[{label:"S",value:"s"},{label:"M",value:"m"},{label:"X",value:"x"},{label:"XL",value:"xl"}]},align:{type:"radio",options:[{label:"Left",value:"left"},{label:"Right",value:"right"}]},backgroundColor:{type:"text",label:"Background Color"},tabs:{type:"array",arrayFields:{label:{type:"text"},href:{type:"text"},target:{type:"select",options:[{label:"Current Tab",value:"_self"},{label:"New Tab",value:"_blank"}]},type:{type:"select",options:[{label:"Root Navigation",value:"rootNav"},{label:"Sub Navigation",value:"subNav"}]},subTabs:{type:"array",arrayFields:{label:{type:"text"},href:{type:"text"},target:{type:"select",options:[{label:"Current Tab",value:"_self"},{label:"New Tab",value:"_blank"}]}}}},defaultItemProps:{label:"Tab",href:"#",target:"_self",type:"rootNav",subTabs:[]}}},defaultProps:{size:"s",align:"left",backgroundColor:"#ffffff",tabs:[{label:"Home",href:"/",target:"_self",type:"rootNav"},{label:"About",href:"/about",target:"_self",type:"subNav",subTabs:[{label:"Company",href:"/about/company",target:"_self"},{label:"Team",href:"/about/team",target:"_self"}]},{label:"Contact",href:"/contact",target:"_self",type:"rootNav"}]},render:({size:e,align:t,tabs:l,backgroundColor:r})=>{let[s,n]=(0,i.useState)(null),o=e=>{n(s===e?null:e)},d=e=>{switch(e){case"s":return"48px";case"m":default:return"56px";case"x":return"72px";case"xl":return"96px"}};return(0,a.jsx)(m,{children:(0,a.jsx)("nav",{id:"navbar",className:"navbar navbar-expand-lg",style:{height:d(e),fontSize:(e=>{switch(e){case"s":return"14px";case"m":default:return"16px";case"x":return"18px";case"xl":return"20px"}})(e),backgroundColor:r||"#ffffff"},children:(0,a.jsx)("div",{className:"container-fluid",style:{height:d(e)},children:(0,a.jsx)("ul",{className:`navbar-nav ${"right"===t?"ms-auto":""}`,children:l.map((e,t)=>(0,a.jsx)("li",{className:`nav-item ${"subNav"===e.type?"dropdown":""}`,children:"subNav"===e.type&&e.subTabs&&e.subTabs.length>0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{type:"button",className:"nav-link btn btn-link",onClick:()=>o(t),children:[e.label,e.subTabs&&(0,a.jsx)("i",{className:`ms-2 bi ${s===t?"bi-chevron-up":"bi-chevron-down"}`})]}),(0,a.jsx)("ul",{className:`dropdown-menu ${s===t?"show":""}`,children:e.subTabs.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)(R(),{href:e.href||"#",legacyBehavior:!0,children:(0,a.jsx)("a",{className:"dropdown-item",target:e.target,children:e.label})})},t))})]}):(0,a.jsx)(R(),{href:e.href||"#",legacyBehavior:!0,children:(0,a.jsx)("a",{className:"nav-link",target:e.target,children:e.label})})},t))})})})})}},Footer:{fields:{sections:{type:"array",getItemSummary:(e,t)=>e.id||`Section #${t}`,arrayFields:{id:{type:"select",options:[{label:"Quick Links",value:"quickLinks"},{label:"Contact Info",value:"contactInfo"},{label:"Follow Us",value:"socialLinks"},{label:"Newsletter",value:"newsletter"}]}}},backgroundColor:{type:"text",label:"Background Color"},navLinks:{type:"array",getItemSummary:(e,t)=>e.title||`Link #${t}`,arrayFields:{title:{type:"text"},href:{type:"text"}}},socialLinks:{type:"array",getItemSummary:(e,t)=>e.platform||`Social Link #${t}`,arrayFields:{platform:{type:"text"},url:{type:"text"},icon:{type:"select",options:[{label:"Facebook",value:"bi-facebook"},{label:"Twitter",value:"bi-twitter"},{label:"Instagram",value:"bi-instagram"},{label:"LinkedIn",value:"bi-linkedin"},{label:"YouTube",value:"bi-youtube"},{label:"Pinterest",value:"bi-pinterest"},{label:"GitHub",value:"bi-github"}]}}},contactInfo:{type:"object",objectFields:{email:{type:"text"},phone:{type:"text"},address:{type:"text"}}},additionalLinks:{type:"array",getItemSummary:(e,t)=>e.title||`Additional Link #${t}`,arrayFields:{title:{type:"text"},href:{type:"text"}}},copyrightText:{type:"text"},newsletterPlaceholder:{type:"text"}},defaultProps:{sections:[{id:"quickLinks"},{id:"contactInfo"},{id:"socialLinks"},{id:"newsletter"}],navLinks:[{title:"About Us",href:"/about"},{title:"Privacy Policy",href:"/privacy"},{title:"Contact",href:"/contact"}],socialLinks:[{platform:"Facebook",url:"https://facebook.com",icon:"bi-facebook"},{platform:"Twitter",url:"https://twitter.com",icon:"bi-twitter"},{platform:"Instagram",url:"https://instagram.com",icon:"bi-instagram"}],contactInfo:{email:"info@example.com",phone:"+1 (234) 567-890",address:"1234 Street Name, City, Country"},additionalLinks:[{title:"Terms of Service",href:"/terms"},{title:"FAQ",href:"/faq"}],copyrightText:"&copy; 2024 Your Company. All rights reserved.",newsletterPlaceholder:"Enter your email",backgroundColor:"#ffffff"},render:({sections:e=[],navLinks:t,socialLinks:l,contactInfo:r,additionalLinks:i,copyrightText:n,newsletterPlaceholder:o,backgroundColor:d})=>{let c=e=>{switch(e){case"quickLinks":return(0,a.jsxs)("div",{className:"col-md-3 mb-2",children:[(0,a.jsx)("h5",{children:"Quick Links"})," ",(0,a.jsx)("ul",{className:"list-unstyled",children:t.map((e,t)=>(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)("a",{href:`./${e.href}`,className:"text-decoration-none text-dark",children:e.title})},t))})]});case"contactInfo":return(0,a.jsxs)("div",{className:"col-md-3 mb-2",children:[(0,a.jsx)("h5",{children:"Contact Info"})," ",(0,a.jsxs)("p",{children:["Email:"," ",(0,a.jsx)("a",{href:`mailto:${r.email}`,className:"text-decoration-none text-dark",children:r.email})]}),(0,a.jsxs)("p",{children:["Phone:"," ",(0,a.jsx)("a",{href:`tel:${r.phone}`,className:"text-decoration-none text-dark",children:r.phone})]}),(0,a.jsxs)("p",{children:["Address: ",r.address]})]});case"socialLinks":return(0,a.jsxs)("div",{className:"col-md-3 mb-2",children:[(0,a.jsx)("h5",{children:"Follow Us"})," ",l.map((e,t)=>(0,a.jsx)("p",{children:(0,a.jsxs)("a",{href:e.url,className:"text-decoration-none text-dark",children:[(0,a.jsx)("i",{className:`bi ${e.icon} me-2`}),e.platform]})},t))]});case"newsletter":return(0,a.jsxs)("div",{className:"col-md-3 mb-2",children:[(0,a.jsx)("h5",{children:"Newsletter"})," ",(0,a.jsxs)("form",{children:[(0,a.jsx)("div",{className:"mb-2",children:(0,a.jsx)("input",{type:"email",className:"form-control",placeholder:o,required:!0})}),(0,a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Subscribe"})]})]});case"additionalLinks":return(0,a.jsxs)("div",{className:"col-md-3 mb-2",children:[(0,a.jsx)("h5",{children:"Additional Links"})," ",(0,a.jsx)("ul",{className:"list-unstyled",children:i.map((e,t)=>(0,a.jsx)("li",{className:"mb-2",children:(0,a.jsx)("a",{href:e.href,className:"text-decoration-none text-dark",children:e.title})},t))})]});default:return null}};return(0,a.jsx)(m,{children:(0,a.jsxs)("div",{className:"container",style:{backgroundColor:d||"#ffffff"},children:[(0,a.jsx)("div",{className:"row",children:e.map((e,t)=>(0,a.jsx)(s().Fragment,{children:c(e.id)},t))}),(0,a.jsx)("div",{className:"row mt-4",children:(0,a.jsx)("div",{className:"col text-center",children:(0,a.jsx)("p",{className:"text-dark",children:n})})})]})})}},Form:{fields:{tags:{type:"array",getItemSummary:(e,t)=>e.labelText||`Section #${t}`,arrayFields:{id:{type:"select",label:"Id",options:[{label:"Select",value:"Select"},{label:"Textbox",value:"Textbox"},{label:"DropDown",value:"DropDown"},{label:"Button",value:"Button"}]},labelText:{type:"text",label:"Text"},alignItem:{type:"select",label:"AlignItem",options:[{label:"Left",value:"flex-start"},{label:"Center",value:"center"},{label:"Right",value:"flex-end"}]},fieldType:{type:"select",label:"FieldType",options:[{label:"Text",value:"text"},{label:"Email",value:"email"}]},isRequired:{type:"select",label:"IsRequired",options:[{label:"NotRequired",value:"notrequired"},{label:"Required",value:"required"}]},dropDownOption:{type:"array",label:"DropDownOption",arrayFields:{optionItem:{type:"text",label:"Option Item"}}},itemWidth:{type:"text",label:"Width"}}},align:{type:"radio",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},backgroundColor:{type:"text",label:"Background Color"}},defaultProps:{tags:[],backgroundColor:"#ffffff",align:"left"},render:({tags:e=[],backgroundColor:t,align:l})=>{(0,h.usePathname)().split("/").filter(Boolean).map(e=>decodeURIComponent(e.trim()));let r=$.$i,i=$.pu,s=async e=>{e.preventDefault();let t=Object.fromEntries(new FormData(e.target).entries());try{await q.A.post(`https://192.168.0.174:3001/api/contactus/addcontactusinfo/${r}/${i}`,t),W("success","Your Request Received")}catch{W("error","Something went wrong, Please try later...")}},n=(e,t,l,r,i,s)=>{let n={width:r||"250px"};if("Textbox"===e){let e;return"required"===s&&(e=(0,a.jsx)("span",{style:{marginLeft:"4px",color:"red"},children:"*"})),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"left",gap:"2px",marginBottom:"12px",...n},children:[(0,a.jsxs)("label",{style:{fontWeight:"bold",minWidth:"100px"},children:[t||"Label",e]}),(0,a.jsx)("input",{type:i||"text",className:"form-control shadow-sm",placeholder:t||"Enter text here",style:{flex:1,padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},name:t,required:"required"===s})]})}if("DropDown"===e){let e;return"required"===s&&(e=(0,a.jsx)("span",{style:{marginLeft:"4px",color:"red"},children:"*"})),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"left",gap:"2px",marginBottom:"12px",...n},children:[(0,a.jsxs)("label",{style:{fontWeight:"bold",minWidth:"100px"},children:[t||"Label",e]}),(0,a.jsxs)("select",{className:"form-select",style:{flex:1,padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},name:t,required:"required"===s,children:[(0,a.jsx)("option",{value:"",children:"Select Item"}),l?.map((e,t)=>a.jsx("option",{value:e.optionItem,children:e.optionItem},t))]})]})}return"Button"===e?(0,a.jsx)("button",{type:"submit",className:"btn btn-primary shadow-lg",style:{padding:"8px 16px",borderRadius:"4px",marginBottom:"12px"},children:t||"Click Me"}):null};return(0,a.jsx)(m,{children:(0,a.jsx)("div",{className:"container py-4 border",style:{backgroundColor:t||"#ffffff"},children:(0,a.jsx)("div",{className:"row",style:{display:"flex",justifyContent:(e=>{switch(e){case"center":return"center";case"right":return"flex-end";default:return"flex-start"}})(l)},children:(0,a.jsx)("div",{style:{width:"fit-content"},children:(0,a.jsx)("form",{onSubmit:s,children:e.map((e,t)=>(0,a.jsx)("div",{className:"px-2",style:{display:"flex",flexDirection:"column",alignItems:e.alignItem||"flex-start"},children:n(e.id,e.labelText,e.dropDownOption,e.itemWidth,e.fieldType,e.isRequired)},t))})})})})})}},Paragraph:{fields:{para:{type:"paragraph",label:"Paragraph Content"}},defaultProps:{para:"Edit your paragraph"},render:({para:e})=>(0,a.jsx)(m,{children:(0,a.jsx)("div",{style:{display:"block",width:"100%",whiteSpace:"pre-wrap"},dangerouslySetInnerHTML:{__html:e||"Edit your paragraph"}})})}}};function D({data:e}){return(0,a.jsx)(r.dw,{config:B,data:e})}},7515:e=>{e.exports={"ButtonGroup-actions":"styles_ButtonGroup-actions__j2Xi8","ButtonGroup--center":"styles_ButtonGroup--center__RVq7O"}},8815:e=>{e.exports={Columns:"styles_Columns__e_oyl"}},5139:e=>{e.exports={Flex:"styles_Flex__AEdmk","Flex-item":"styles_Flex-item__4FHQa"}},4950:e=>{e.exports={Hero:"styles_Hero__AO43E","Hero-inner":"styles_Hero-inner__1sGAv","Hero-subtitle":"styles_Hero-subtitle__qAT6c","Hero--hasImageBackground":"styles_Hero--hasImageBackground__a9rkW","Hero-image":"styles_Hero-image__ZxOrj","Hero-imageOverlay":"styles_Hero-imageOverlay__d2XJa","Hero--left":"styles_Hero--left__Lfc_v","Hero-bg":"styles_Hero-bg__C9qWB","Hero-content":"styles_Hero-content__Uk3w1","Hero--center":"styles_Hero--center__FabKN","Hero-actions":"styles_Hero-actions__HqNfN"}},7079:e=>{e.exports={"Stats-items":"styles_Stats-items__l__Rg","Stats-item":"styles_Stats-item__PlhuR","Stats-icon":"styles_Stats-icon__0TgQS","Stats-label":"styles_Stats-label__vi5dx","Stats-value":"styles_Stats-value__yTRfS"}},5289:e=>{e.exports={Section:"styles_Section__4tQXe","Section-inner":"styles_Section-inner__8sPWU"}},8704:(e,t,l)=>{"use strict";l.d(t,{Client:()=>a});let a=(0,l(6760).registerClientReference)(function(){throw Error("Attempted to call Client() from the server but Client is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Nishant\\WebBuilder\\moveblobcall\\WebBuilderMVP\\cms-client-app\\app\\[...trivbuilderPath]\\client.tsx","Client")},7662:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>c,dynamic:()=>u,generateMetadata:()=>d});var a=l(2740),r=l(8704),i=l(1831),s=l(9021),n=l.n(s);let o=e=>{let t=n().existsSync("database.json")?JSON.parse(n().readFileSync("database.json","utf-8")):null;return t?t[e]:null};async function d({params:e}){let{trivbuilderPath:t=[]}=await e,l=`/${t.join("/")}`;return{title:o(l)?.root.props?.title}}async function c({params:e}){let{trivbuilderPath:t=[]}=await e,l=o(`/${t.join("/")}`);return l?(0,a.jsx)(r.Client,{data:l}):(0,i.notFound)()}let u="force-static"},9611:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>r});var a=l(2740);function r({children:e}){return(0,a.jsx)("html",{lang:"en",children:(0,a.jsx)("body",{children:e})})}l(2316),l(2644)},6055:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>r});var a=l(8077);let r=async e=>[{type:"image/x-icon",sizes:"48x48",url:(0,a.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},2316:()=>{}};