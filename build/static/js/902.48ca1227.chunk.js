"use strict";(self.webpackChunkRoyal_Magic=self.webpackChunkRoyal_Magic||[]).push([[902],{7902:function(e,r,t){t.r(r),t.d(r,{default:function(){return ue}});var n={};t.r(n),t.d(n,{exclude:function(){return ee},extract:function(){return H},parse:function(){return X},parseUrl:function(){return G},pick:function(){return Q},stringify:function(){return V},stringifyUrl:function(){return J}});var o=t(9466),i=t(9860),a=t(4813),s=t(9019),l=t(5898),c=t(1113),d=t(547),u=t(5602),p=t(1926),m=t(7313),h=t(4285),x=t(7829),f=t(1550),g=t(3306),Z=t(9914),b=t(5480),y=t(4631),j=t(1727),v=t(7131),w=t(3929),S=t(4758),k=t(9099),C=t(4469),P=t(3604),W=t(6467),I=t(3463),N=t(9429);const F="%[a-f0-9]{2}",D=new RegExp("("+F+")|([^%]+?)","gi"),R=new RegExp("("+F+")+","gi");function $(e,r){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;r=r||1;const t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],$(t),$(n))}function E(e){try{return decodeURIComponent(e)}catch{let r=e.match(D)||[];for(let t=1;t<r.length;t++)r=(e=$(r,t).join("")).match(D)||[];return e}}function B(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"};let t=R.exec(e);for(;t;){try{r[t[0]]=decodeURIComponent(t[0])}catch{const e=E(t[0]);e!==t[0]&&(r[t[0]]=e)}t=R.exec(e)}r["%C2"]="\ufffd";const n=Object.keys(r);for(const o of n)e=e.replace(new RegExp(o,"g"),r[o]);return e}(e)}}function M(e,r){if("string"!==typeof e||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===r)return[];const t=e.indexOf(r);return-1===t?[]:[e.slice(0,t),e.slice(t+r.length)]}function A(e,r){const t={};if(Array.isArray(r))for(const n of r){const r=Object.getOwnPropertyDescriptor(e,n);r?.enumerable&&Object.defineProperty(t,n,r)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){r(n,e[n],e)&&Object.defineProperty(t,n,o)}}return t}const O=e=>null===e||void 0===e,U=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),T=Symbol("encodeFragmentIdentifier");function q(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function _(e,r){return r.encode?r.strict?U(e):encodeURIComponent(e):e}function z(e,r){return r.decode?B(e):e}function L(e){return Array.isArray(e)?e.sort():"object"===typeof e?L(Object.keys(e)).sort(((e,r)=>Number(e)-Number(r))).map((r=>e[r])):e}function K(e){const r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function Y(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function H(e){const r=(e=K(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function X(e,r){q((r={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...r}).arrayFormatSeparator);const t=function(e){let r;switch(e.arrayFormat){case"index":return(e,t,n)=>{r=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return(e,t,n)=>{r=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),r?void 0!==n[e]?n[e]=[...n[e],t]:n[e]=[t]:n[e]=t};case"colon-list-separator":return(e,t,n)=>{r=/(:list)$/.exec(e),e=e.replace(/:list$/,""),r?void 0!==n[e]?n[e]=[...n[e],t]:n[e]=[t]:n[e]=t};case"comma":case"separator":return(r,t,n)=>{const o="string"===typeof t&&t.includes(e.arrayFormatSeparator),i="string"===typeof t&&!o&&z(t,e).includes(e.arrayFormatSeparator);t=i?z(t,e):t;const a=o||i?t.split(e.arrayFormatSeparator).map((r=>z(r,e))):null===t?t:z(t,e);n[r]=a};case"bracket-separator":return(r,t,n)=>{const o=/(\[])$/.test(r);if(r=r.replace(/\[]$/,""),!o)return void(n[r]=t?z(t,e):t);const i=null===t?[]:t.split(e.arrayFormatSeparator).map((r=>z(r,e)));void 0!==n[r]?n[r]=[...n[r],...i]:n[r]=i};default:return(e,r,t)=>{void 0!==t[e]?t[e]=[...[t[e]].flat(),r]:t[e]=r}}}(r),n=Object.create(null);if("string"!==typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=r.decode?o.replace(/\+/g," "):o;let[i,a]=M(e,"=");void 0===i&&(i=e),a=void 0===a?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?a:z(a,r),t(z(i,r),a,n)}for(const[o,i]of Object.entries(n))if("object"===typeof i&&null!==i)for(const[e,t]of Object.entries(i))i[e]=Y(t,r);else n[o]=Y(i,r);return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce(((e,r)=>{const t=n[r];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?e[r]=L(t):e[r]=t,e}),Object.create(null))}function V(e,r){if(!e)return"";q((r={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...r}).arrayFormatSeparator);const t=t=>r.skipNull&&O(e[t])||r.skipEmptyString&&""===e[t],n=function(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{const o=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[_(r,e),"[",o,"]"].join("")]:[...t,[_(r,e),"[",_(o,e),"]=",_(n,e)].join("")]};case"bracket":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[_(r,e),"[]"].join("")]:[...t,[_(r,e),"[]=",_(n,e)].join("")];case"colon-list-separator":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[_(r,e),":list="].join("")]:[...t,[_(r,e),":list=",_(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r="bracket-separator"===e.arrayFormat?"[]=":"=";return t=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[_(t,e),r,_(o,e)].join("")]:[[n,_(o,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,_(r,e)]:[...t,[_(r,e),"=",_(n,e)].join("")]}}(r),o={};for(const[a,s]of Object.entries(e))t(a)||(o[a]=s);const i=Object.keys(o);return!1!==r.sort&&i.sort(r.sort),i.map((t=>{const o=e[t];return void 0===o?"":null===o?_(t,r):Array.isArray(o)?0===o.length&&"bracket-separator"===r.arrayFormat?_(t,r)+"[]":o.reduce(n(t),[]).join("&"):_(t,r)+"="+_(o,r)})).filter((e=>e.length>0)).join("&")}function G(e,r){r={decode:!0,...r};let[t,n]=M(e,"#");return void 0===t&&(t=e),{url:t?.split("?")?.[0]??"",query:X(H(e),r),...r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:z(n,r)}:{}}}function J(e,r){r={encode:!0,strict:!0,[T]:!0,...r};const t=K(e.url).split("?")[0]||"";let n=V({...X(H(e.url),{sort:!1}),...e.query},r);n&&(n=`?${n}`);let o=function(e){let r="";const t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);if(e.fragmentIdentifier){const n=new URL(t);n.hash=e.fragmentIdentifier,o=r[T]?n.hash:`#${e.fragmentIdentifier}`}return`${t}${n}${o}`}function Q(e,r,t){t={parseFragmentIdentifier:!0,[T]:!1,...t};const{url:n,query:o,fragmentIdentifier:i}=G(e,t);return J({url:n,query:A(o,r),fragmentIdentifier:i},t)}function ee(e,r,t){return Q(e,Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t),t)}var re=n,te=t(2889),ne=t(976),oe=t(715);const ie=e=>{let r=0;return e.length>5&&(r+=1),e.length>7&&(r+=1),(e=>new RegExp(/[0-9]/).test(e))(e)&&(r+=1),(e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e))(e)&&(r+=1),(e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e))(e)&&(r+=1),r};var ae=t(237),se=t(2611),le=t(6417);var ce=e=>{let{...r}=e;const[t,n]=(0,m.useState)(""),[l,d]=(0,m.useState)(""),u=(0,i.Z)(),p=(0,te.Z)(),F=(0,a.Z)(u.breakpoints.down("md")),[D,R]=(0,m.useState)(!1),[$,E]=(0,m.useState)(!1),[B,M]=(0,m.useState)(!0),[A,O]=(0,m.useState)(!1),[U,T]=(0,m.useState)({email:"",userId:""}),q=new re.parse(window.location.search);console.log(q);const[_,z]=(0,m.useState)(0),[L,K]=(0,m.useState)(),{register:Y}=(0,h.Z)(),H=()=>{R(!D)},X=()=>{E(!$)},V=e=>{e.preventDefault()},G=e=>{const r=ie(e);var t;z(r),K((t=r)<2?{label:"Poor",color:oe.Z.errorMain}:t<3?{label:"Weak",color:oe.Z.warningDark}:t<4?{label:"Normal",color:oe.Z.orangeMain}:t<5?{label:"Good",color:oe.Z.successMain}:t<6?{label:"Strong",color:oe.Z.successDark}:{label:"Poor",color:oe.Z.errorMain})},J=()=>{O(!1),window.location.href="/login"};return(0,le.jsxs)(le.Fragment,{children:[(0,le.jsx)(s.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:(0,le.jsx)(s.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,le.jsx)(x.Z,{sx:{mb:2},children:(0,le.jsx)(c.Z,{variant:"subtitle1",children:"Sign up with Email address"})})})}),(0,le.jsx)(N.J9,{initialValues:{email:"",password:"",cpassword:"",sponcerid:q.UplineId,contactNumber:"",submit:null},validationSchema:I.Ry().shape({email:I.Z_().max(255).required("Email is required"),sponcerid:I.Z_().length(7,"Sponcer ID must be 7 characters").required("Sponcer ID is required"),password:I.Z_().max(255).required("Password is required"),cpassword:I.Z_().max(255).required("Password is required"),contactNumber:I.Z_().min(10,"Contact number must be at least 10 digits").max(12,"Contact number must be at most 12 digits").required("Contact number is required")}),onSubmit:async(e,r)=>{let{setErrors:n,setStatus:o,setSubmitting:i}=r;try{const r=`${t} ${l}`;T((r=>({...r,email:e.email})));const n=await Y({...e,member_name:r});console.log(n),p.current&&(o({success:!0}),i(!1)),T((e=>({...e,userId:n.userId}))),O(!0)}catch(a){console.error(a),p.current&&(o({success:!1}),n({submit:a.response.data.message}),i(!1))}},children:e=>{let{errors:i,handleBlur:a,handleChange:p,handleSubmit:m,isSubmitting:h,touched:C,values:P}=e;return(0,le.jsxs)("form",{noValidate:!0,onSubmit:m,...r,children:[(0,le.jsxs)(f.Z,{fullWidth:!0,error:Boolean(C.sponcerid&&i.sponcerid),sx:{...u.typography.customInput},children:[(0,le.jsx)(g.Z,{htmlFor:"outlined-adornment-spnace-id",children:"Sponcer ID"}),(0,le.jsx)(Z.Z,{id:"outlined-adornment-spnace-id",type:"number",value:P.sponcerid,name:"sponcerid",onBlur:a,onChange:p,inputProps:{}}),C.sponcerid&&i.sponcerid&&(0,le.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text--register",children:i.sponcerid})]}),(0,le.jsxs)(s.ZP,{container:!0,spacing:F?0:2,children:[(0,le.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,le.jsx)(y.Z,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",value:t,onChange:e=>n(e.target.value),sx:{...u.typography.customInput}})}),(0,le.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,le.jsx)(y.Z,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",value:l,onChange:e=>d(e.target.value),sx:{...u.typography.customInput}})})]}),(0,le.jsxs)(f.Z,{fullWidth:!0,error:Boolean(C.email&&i.email),sx:{...u.typography.customInput},children:[(0,le.jsx)(g.Z,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),(0,le.jsx)(Z.Z,{id:"outlined-adornment-email-register",type:"email",value:P.email,name:"email",onBlur:a,onChange:p,inputProps:{}}),C.email&&i.email&&(0,le.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text--register",children:i.email})]}),(0,le.jsxs)(f.Z,{fullWidth:!0,error:Boolean(C.contactNumber&&i.contactNumber),children:[(0,le.jsx)(g.Z,{htmlFor:"outlined-adornment-contact-number",children:"Contact Number"}),(0,le.jsx)(Z.Z,{id:"outlined-adornment-contact-number",value:P.contactNumber,onChange:p,label:"Contact Number",onBlur:a,name:"contactNumber"}),C.contactNumber&&i.contactNumber&&(0,le.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text-contact-number",children:i.contactNumber})]}),(0,le.jsxs)(f.Z,{fullWidth:!0,error:Boolean(C.password&&i.password),sx:{...u.typography.customInput},children:[(0,le.jsx)(g.Z,{htmlFor:"outlined-adornment-password-register",children:"Password"}),(0,le.jsx)(Z.Z,{id:"outlined-adornment-password-register",type:D?"text":"password",value:P.password,name:"password",label:"Password",onBlur:a,onChange:e=>{p(e),G(e.target.value)},endAdornment:(0,le.jsx)(j.Z,{position:"end",children:(0,le.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:H,onMouseDown:V,edge:"end",size:"large",children:D?(0,le.jsx)(ae.Z,{}):(0,le.jsx)(se.Z,{})})}),inputProps:{}}),C.password&&i.password&&(0,le.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text-password-register",children:i.password})]}),(0,le.jsxs)(f.Z,{fullWidth:!0,error:Boolean(C.cpassword&&i.cpassword),sx:{...u.typography.customInput},children:[(0,le.jsx)(g.Z,{htmlFor:"outlined-adornment-cpassword-register",children:"Confirm Password"}),(0,le.jsx)(Z.Z,{id:"outlined-adornment-cpassword-register",type:$?"text":"password",value:P.cpassword,name:"cpassword",label:"Confirm Password",onBlur:a,onChange:e=>{p(e),G(e.target.value)},endAdornment:(0,le.jsx)(j.Z,{position:"end",children:(0,le.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:X,onMouseDown:V,edge:"end",size:"large",children:$?(0,le.jsx)(ae.Z,{}):(0,le.jsx)(se.Z,{})})}),inputProps:{}}),C.cpassword&&i.cpassword&&(0,le.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text-cpassword-register",children:i.cpassword})]}),0!==_&&(0,le.jsx)(f.Z,{fullWidth:!0,children:(0,le.jsx)(x.Z,{sx:{mb:2},children:(0,le.jsxs)(s.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,le.jsx)(s.ZP,{item:!0,children:(0,le.jsx)(x.Z,{style:{backgroundColor:null===L||void 0===L?void 0:L.color},sx:{width:85,height:8,borderRadius:"7px"}})}),(0,le.jsx)(s.ZP,{item:!0,children:(0,le.jsx)(c.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===L||void 0===L?void 0:L.label})})]})})}),(0,le.jsx)(s.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:(0,le.jsx)(s.ZP,{item:!0,children:(0,le.jsx)(w.Z,{control:(0,le.jsx)(S.Z,{checked:B,onChange:e=>M(e.target.checked),name:"checked",color:"primary"}),label:(0,le.jsxs)(c.Z,{variant:"subtitle1",children:["Agree with \xa0",(0,le.jsx)(c.Z,{variant:"subtitle1",component:o.rU,to:"#",children:"Terms & Condition."})]})})})}),i.submit&&(0,le.jsx)(x.Z,{sx:{mt:3},children:(0,le.jsx)(b.Z,{error:!0,children:i.submit})}),(0,le.jsx)(x.Z,{sx:{mt:2},children:(0,le.jsx)(ne.Z,{children:(0,le.jsx)(k.Z,{disableElevation:!0,disabled:h,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]})}}),(0,le.jsxs)(C.Z,{open:A,onClose:J,children:[(0,le.jsx)(P.Z,{children:"Registration Successful"}),(0,le.jsxs)(W.Z,{children:[(0,le.jsx)(c.Z,{variant:"body1",children:"Congratulations! You have successfully registered."}),(0,le.jsxs)(c.Z,{variant:"body2",sx:{mt:1},children:["Email: ",U.email]}),(0,le.jsxs)(c.Z,{variant:"h4",sx:{mt:2},children:["User ID: ",U.userId]})]}),(0,le.jsx)(k.Z,{onClick:J,children:"Close"})]})]})},de=t(5184);var ue=()=>{const e=(0,i.Z)(),r=(0,a.Z)(e.breakpoints.down("md"));return(0,le.jsx)(d.Z,{children:(0,le.jsxs)(s.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,le.jsx)(s.ZP,{item:!0,xs:12,children:(0,le.jsx)(s.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,le.jsx)(s.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,le.jsx)(u.Z,{children:(0,le.jsxs)(s.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,le.jsx)(s.ZP,{item:!0,sx:{mb:3},children:(0,le.jsx)(o.rU,{to:"#",children:(0,le.jsx)(p.Z,{})})}),(0,le.jsx)(s.ZP,{item:!0,xs:12,children:(0,le.jsx)(s.ZP,{container:!0,direction:r?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,le.jsx)(s.ZP,{item:!0,children:(0,le.jsxs)(l.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,le.jsx)(c.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:r?"h3":"h2",children:"Sign up"}),(0,le.jsx)(c.Z,{variant:"caption",fontSize:"16px",textAlign:r?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,le.jsx)(s.ZP,{item:!0,xs:12,children:(0,le.jsx)(ce,{})}),(0,le.jsx)(s.ZP,{item:!0,xs:12,children:(0,le.jsx)(s.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,le.jsx)(c.Z,{component:o.rU,to:"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),(0,le.jsx)(s.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,le.jsx)(de.Z,{})})]})})}},6467:function(e,r,t){t.d(r,{Z:function(){return g}});var n=t(3366),o=t(7462),i=t(7313),a=t(3061),s=t(1921),l=t(7592),c=t(5469),d=t(7430),u=t(2298);function p(e){return(0,u.Z)("MuiDialogContent",e)}(0,d.Z)("MuiDialogContent",["root","dividers"]);var m=t(3174),h=t(6417);const x=["className","dividers"],f=(0,l.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.dividers&&r.dividers]}})((e=>{let{theme:r,ownerState:t}=e;return(0,o.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(r.vars||r).palette.divider}`,borderBottom:`1px solid ${(r.vars||r).palette.divider}`}:{[`.${m.Z.root} + &`]:{paddingTop:0}})}));var g=i.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiDialogContent"}),{className:i,dividers:l=!1}=t,d=(0,n.Z)(t,x),u=(0,o.Z)({},t,{dividers:l}),m=(e=>{const{classes:r,dividers:t}=e,n={root:["root",t&&"dividers"]};return(0,s.Z)(n,p,r)})(u);return(0,h.jsx)(f,(0,o.Z)({className:(0,a.Z)(m.root,i),ownerState:u,ref:r},d))}))},3604:function(e,r,t){var n=t(7462),o=t(3366),i=t(7313),a=t(3061),s=t(1921),l=t(1113),c=t(7592),d=t(5469),u=t(3174),p=t(3909),m=t(6417);const h=["className","id"],x=(0,c.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,r)=>r.root})({padding:"16px 24px",flex:"0 0 auto"}),f=i.forwardRef((function(e,r){const t=(0,d.Z)({props:e,name:"MuiDialogTitle"}),{className:l,id:c}=t,f=(0,o.Z)(t,h),g=t,Z=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"]},u.a,r)})(g),{titleId:b=c}=i.useContext(p.Z);return(0,m.jsx)(x,(0,n.Z)({component:"h2",className:(0,a.Z)(Z.root,l),ownerState:g,ref:r,variant:"h6",id:b},f))}));r.Z=f},3174:function(e,r,t){t.d(r,{a:function(){return i}});var n=t(7430),o=t(2298);function i(e){return(0,o.Z)("MuiDialogTitle",e)}const a=(0,n.Z)("MuiDialogTitle",["root"]);r.Z=a},4469:function(e,r,t){var n=t(3366),o=t(7462),i=t(7313),a=t(3061),s=t(1921),l=t(3362),c=t(1615),d=t(387),u=t(2530),p=t(501),m=t(5469),h=t(7592),x=t(5560),f=t(3909),g=t(1554),Z=t(9860),b=t(6417);const y=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],j=(0,h.ZP)(g.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,r)=>r.backdrop})({zIndex:-1}),v=(0,h.ZP)(d.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,r)=>r.root})({"@media print":{position:"absolute !important"}}),w=(0,h.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.container,r[`scroll${(0,c.Z)(t.scroll)}`]]}})((e=>{let{ownerState:r}=e;return(0,o.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===r.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===r.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),S=(0,h.ZP)(p.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.paper,r[`scrollPaper${(0,c.Z)(t.scroll)}`],r[`paperWidth${(0,c.Z)(String(t.maxWidth))}`],t.fullWidth&&r.paperFullWidth,t.fullScreen&&r.paperFullScreen]}})((e=>{let{theme:r,ownerState:t}=e;return(0,o.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&{maxWidth:"px"===r.breakpoints.unit?Math.max(r.breakpoints.values.xs,444):`${r.breakpoints.values.xs}${r.breakpoints.unit}`,[`&.${x.Z.paperScrollBody}`]:{[r.breakpoints.down(Math.max(r.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&"xs"!==t.maxWidth&&{maxWidth:`${r.breakpoints.values[t.maxWidth]}${r.breakpoints.unit}`,[`&.${x.Z.paperScrollBody}`]:{[r.breakpoints.down(r.breakpoints.values[t.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${x.Z.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})})),k=i.forwardRef((function(e,r){const t=(0,m.Z)({props:e,name:"MuiDialog"}),d=(0,Z.Z)(),h={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{"aria-describedby":g,"aria-labelledby":k,BackdropComponent:C,BackdropProps:P,children:W,className:I,disableEscapeKeyDown:N=!1,fullScreen:F=!1,fullWidth:D=!1,maxWidth:R="sm",onBackdropClick:$,onClose:E,open:B,PaperComponent:M=p.Z,PaperProps:A={},scroll:O="paper",TransitionComponent:U=u.Z,transitionDuration:T=h,TransitionProps:q}=t,_=(0,n.Z)(t,y),z=(0,o.Z)({},t,{disableEscapeKeyDown:N,fullScreen:F,fullWidth:D,maxWidth:R,scroll:O}),L=(e=>{const{classes:r,scroll:t,maxWidth:n,fullWidth:o,fullScreen:i}=e,a={root:["root"],container:["container",`scroll${(0,c.Z)(t)}`],paper:["paper",`paperScroll${(0,c.Z)(t)}`,`paperWidth${(0,c.Z)(String(n))}`,o&&"paperFullWidth",i&&"paperFullScreen"]};return(0,s.Z)(a,x.D,r)})(z),K=i.useRef(),Y=(0,l.Z)(k),H=i.useMemo((()=>({titleId:Y})),[Y]);return(0,b.jsx)(v,(0,o.Z)({className:(0,a.Z)(L.root,I),closeAfterTransition:!0,components:{Backdrop:j},componentsProps:{backdrop:(0,o.Z)({transitionDuration:T,as:C},P)},disableEscapeKeyDown:N,onClose:E,open:B,ref:r,onClick:e=>{K.current&&(K.current=null,$&&$(e),E&&E(e,"backdropClick"))},ownerState:z},_,{children:(0,b.jsx)(U,(0,o.Z)({appear:!0,in:B,timeout:T,role:"presentation"},q,{children:(0,b.jsx)(w,{className:(0,a.Z)(L.container),onMouseDown:e=>{K.current=e.target===e.currentTarget},ownerState:z,children:(0,b.jsx)(S,(0,o.Z)({as:M,elevation:24,role:"dialog","aria-describedby":g,"aria-labelledby":Y},A,{className:(0,a.Z)(L.paper,A.className),ownerState:z,children:(0,b.jsx)(f.Z.Provider,{value:H,children:W})}))})}))}))}));r.Z=k},3909:function(e,r,t){const n=(0,t(7313).createContext)({});r.Z=n},5560:function(e,r,t){t.d(r,{D:function(){return i}});var n=t(7430),o=t(2298);function i(e){return(0,o.Z)("MuiDialog",e)}const a=(0,n.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);r.Z=a}}]);