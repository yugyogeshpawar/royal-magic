"use strict";(self.webpackChunkRoyal_Magic=self.webpackChunkRoyal_Magic||[]).push([[902],{7902:function(e,r,t){t.r(r),t.d(r,{default:function(){return le}});var n={};t.r(n),t.d(n,{exclude:function(){return X},extract:function(){return H},parse:function(){return V},parseUrl:function(){return J},pick:function(){return Q},stringify:function(){return G},stringifyUrl:function(){return K}});var o=t(9466),s=t(9860),i=t(4813),a=t(9019),c=t(5898),l=t(1113),d=t(547),u=t(5602),m=t(1926),p=t(7313),h=t(4285),x=t(7890),g=t(7829),f=t(1550),j=t(3306),y=t(9914),b=t(5480),Z=t(4631),w=t(1727),v=t(7131),C=t(3929),S=t(4758),k=t(9099),P=t(3463),F=t(9429);const I="%[a-f0-9]{2}",N=new RegExp("("+I+")|([^%]+?)","gi"),E=new RegExp("("+I+")+","gi");function O(e,r){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;r=r||1;const t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],O(t),O(n))}function R(e){try{return decodeURIComponent(e)}catch{let r=e.match(N)||[];for(let t=1;t<r.length;t++)r=(e=O(r,t).join("")).match(N)||[];return e}}function A(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"};let t=E.exec(e);for(;t;){try{r[t[0]]=decodeURIComponent(t[0])}catch{const e=R(t[0]);e!==t[0]&&(r[t[0]]=e)}t=E.exec(e)}r["%C2"]="\ufffd";const n=Object.keys(r);for(const o of n)e=e.replace(new RegExp(o,"g"),r[o]);return e}(e)}}function $(e,r){if("string"!==typeof e||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===r)return[];const t=e.indexOf(r);return-1===t?[]:[e.slice(0,t),e.slice(t+r.length)]}function U(e,r){const t={};if(Array.isArray(r))for(const n of r){const r=Object.getOwnPropertyDescriptor(e,n);r?.enumerable&&Object.defineProperty(t,n,r)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){r(n,e[n],e)&&Object.defineProperty(t,n,o)}}return t}const B=e=>null===e||void 0===e,q=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),D=Symbol("encodeFragmentIdentifier");function W(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function M(e,r){return r.encode?r.strict?q(e):encodeURIComponent(e):e}function _(e,r){return r.decode?A(e):e}function z(e){return Array.isArray(e)?e.sort():"object"===typeof e?z(Object.keys(e)).sort(((e,r)=>Number(e)-Number(r))).map((r=>e[r])):e}function L(e){const r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function T(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function H(e){const r=(e=L(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function V(e,r){W((r={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...r}).arrayFormatSeparator);const t=function(e){let r;switch(e.arrayFormat){case"index":return(e,t,n)=>{r=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return(e,t,n)=>{r=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),r?void 0!==n[e]?n[e]=[...n[e],t]:n[e]=[t]:n[e]=t};case"colon-list-separator":return(e,t,n)=>{r=/(:list)$/.exec(e),e=e.replace(/:list$/,""),r?void 0!==n[e]?n[e]=[...n[e],t]:n[e]=[t]:n[e]=t};case"comma":case"separator":return(r,t,n)=>{const o="string"===typeof t&&t.includes(e.arrayFormatSeparator),s="string"===typeof t&&!o&&_(t,e).includes(e.arrayFormatSeparator);t=s?_(t,e):t;const i=o||s?t.split(e.arrayFormatSeparator).map((r=>_(r,e))):null===t?t:_(t,e);n[r]=i};case"bracket-separator":return(r,t,n)=>{const o=/(\[])$/.test(r);if(r=r.replace(/\[]$/,""),!o)return void(n[r]=t?_(t,e):t);const s=null===t?[]:t.split(e.arrayFormatSeparator).map((r=>_(r,e)));void 0!==n[r]?n[r]=[...n[r],...s]:n[r]=s};default:return(e,r,t)=>{void 0!==t[e]?t[e]=[...[t[e]].flat(),r]:t[e]=r}}}(r),n=Object.create(null);if("string"!==typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=r.decode?o.replace(/\+/g," "):o;let[s,i]=$(e,"=");void 0===s&&(s=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?i:_(i,r),t(_(s,r),i,n)}for(const[o,s]of Object.entries(n))if("object"===typeof s&&null!==s)for(const[e,t]of Object.entries(s))s[e]=T(t,r);else n[o]=T(s,r);return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce(((e,r)=>{const t=n[r];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?e[r]=z(t):e[r]=t,e}),Object.create(null))}function G(e,r){if(!e)return"";W((r={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...r}).arrayFormatSeparator);const t=t=>r.skipNull&&B(e[t])||r.skipEmptyString&&""===e[t],n=function(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{const o=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[M(r,e),"[",o,"]"].join("")]:[...t,[M(r,e),"[",M(o,e),"]=",M(n,e)].join("")]};case"bracket":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[M(r,e),"[]"].join("")]:[...t,[M(r,e),"[]=",M(n,e)].join("")];case"colon-list-separator":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[M(r,e),":list="].join("")]:[...t,[M(r,e),":list=",M(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r="bracket-separator"===e.arrayFormat?"[]=":"=";return t=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[M(t,e),r,M(o,e)].join("")]:[[n,M(o,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,M(r,e)]:[...t,[M(r,e),"=",M(n,e)].join("")]}}(r),o={};for(const[i,a]of Object.entries(e))t(i)||(o[i]=a);const s=Object.keys(o);return!1!==r.sort&&s.sort(r.sort),s.map((t=>{const o=e[t];return void 0===o?"":null===o?M(t,r):Array.isArray(o)?0===o.length&&"bracket-separator"===r.arrayFormat?M(t,r)+"[]":o.reduce(n(t),[]).join("&"):M(t,r)+"="+M(o,r)})).filter((e=>e.length>0)).join("&")}function J(e,r){r={decode:!0,...r};let[t,n]=$(e,"#");return void 0===t&&(t=e),{url:t?.split("?")?.[0]??"",query:V(H(e),r),...r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:_(n,r)}:{}}}function K(e,r){r={encode:!0,strict:!0,[D]:!0,...r};const t=L(e.url).split("?")[0]||"";let n=G({...V(H(e.url),{sort:!1}),...e.query},r);n&&(n=`?${n}`);let o=function(e){let r="";const t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);if(e.fragmentIdentifier){const n=new URL(t);n.hash=e.fragmentIdentifier,o=r[D]?n.hash:`#${e.fragmentIdentifier}`}return`${t}${n}${o}`}function Q(e,r,t){t={parseFragmentIdentifier:!0,[D]:!1,...t};const{url:n,query:o,fragmentIdentifier:s}=J(e,t);return K({url:n,query:U(o,r),fragmentIdentifier:s},t)}function X(e,r,t){return Q(e,Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t),t)}var Y=n,ee=t(2889),re=t(976),te=t(715);const ne=e=>{let r=0;return e.length>5&&(r+=1),e.length>7&&(r+=1),(e=>new RegExp(/[0-9]/).test(e))(e)&&(r+=1),(e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e))(e)&&(r+=1),(e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e))(e)&&(r+=1),r};var oe=t(237),se=t(2611),ie=t(6417);var ae=e=>{let{...r}=e;const[t,n]=(0,p.useState)(""),[c,d]=(0,p.useState)(""),u=(0,s.Z)(),m=(0,ee.Z)(),I=(0,i.Z)(u.breakpoints.down("md")),[N,E]=(0,p.useState)(!1),[O,R]=(0,p.useState)(!1),[A,$]=(0,p.useState)(!0),U=new Y.parse(window.location.search);console.log(U);const[B,q]=(0,p.useState)(0),[D,W]=(0,p.useState)(),{register:M}=(0,h.Z)(),_=()=>{E(!N)},z=()=>{R(!O)},L=e=>{e.preventDefault()},T=e=>{const r=ne(e);var t;q(r),W((t=r)<2?{label:"Poor",color:te.Z.errorMain}:t<3?{label:"Weak",color:te.Z.warningDark}:t<4?{label:"Normal",color:te.Z.orangeMain}:t<5?{label:"Good",color:te.Z.successMain}:t<6?{label:"Strong",color:te.Z.successDark}:{label:"Poor",color:te.Z.errorMain})};return(0,ie.jsxs)(ie.Fragment,{children:[(0,ie.jsx)(a.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:(0,ie.jsx)(a.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,ie.jsx)(g.Z,{sx:{mb:2},children:(0,ie.jsx)(l.Z,{variant:"subtitle1",children:"Sign up with Email address"})})})}),(0,ie.jsx)(F.J9,{initialValues:{email:"",password:"",cpassword:"",sponcerid:U.UplineId,contactNumber:"",submit:null},validationSchema:P.Ry().shape({email:P.Z_().email("Must be a valid email").max(255).required("Email is required"),sponcerid:P.Z_().length(7,"Sponcer ID must be 7 characters").required("Sponcer ID is required"),password:P.Z_().max(255).required("Password is required"),cpassword:P.Z_().max(255).required("Password is required"),contactNumber:P.Z_().min(10,"Contact number must be at least 10 digits").max(12,"Contact number must be at most 12 digits").required("Contact number is required")}),onSubmit:async(e,r)=>{let{setErrors:n,setStatus:o,setSubmitting:s}=r;try{const r=`${t} ${c}`;await M({...e,member_name:r}),m.current&&(o({success:!0}),s(!1)),x.Fg}catch(i){console.error(i),m.current&&(o({success:!1}),n({submit:i.response.data.message}),s(!1))}},children:e=>{let{errors:s,handleBlur:i,handleChange:m,handleSubmit:p,isSubmitting:h,touched:x,values:P}=e;return(0,ie.jsxs)("form",{noValidate:!0,onSubmit:p,...r,children:[(0,ie.jsxs)(f.Z,{fullWidth:!0,error:Boolean(x.sponcerid&&s.sponcerid),sx:{...u.typography.customInput},children:[(0,ie.jsx)(j.Z,{htmlFor:"outlined-adornment-spnace-id",children:"Sponcer ID"}),(0,ie.jsx)(y.Z,{id:"outlined-adornment-spnace-id",type:"number",value:P.sponcerid,name:"sponcerid",onBlur:i,onChange:m,inputProps:{}}),x.sponcerid&&s.sponcerid&&(0,ie.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text--register",children:s.sponcerid})]}),(0,ie.jsxs)(a.ZP,{container:!0,spacing:I?0:2,children:[(0,ie.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,ie.jsx)(Z.Z,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",value:t,onChange:e=>n(e.target.value),sx:{...u.typography.customInput}})}),(0,ie.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,ie.jsx)(Z.Z,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",value:c,onChange:e=>d(e.target.value),sx:{...u.typography.customInput}})})]}),(0,ie.jsxs)(f.Z,{fullWidth:!0,error:Boolean(x.email&&s.email),sx:{...u.typography.customInput},children:[(0,ie.jsx)(j.Z,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),(0,ie.jsx)(y.Z,{id:"outlined-adornment-email-register",type:"email",value:P.email,name:"email",onBlur:i,onChange:m,inputProps:{}}),x.email&&s.email&&(0,ie.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text--register",children:s.email})]}),(0,ie.jsxs)(f.Z,{fullWidth:!0,error:Boolean(x.contactNumber&&s.contactNumber),children:[(0,ie.jsx)(j.Z,{htmlFor:"outlined-adornment-contact-number",children:"Contact Number"}),(0,ie.jsx)(y.Z,{id:"outlined-adornment-contact-number",value:P.contactNumber,onChange:m,label:"Contact Number",onBlur:i,name:"contactNumber"}),x.contactNumber&&s.contactNumber&&(0,ie.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text-contact-number",children:s.contactNumber})]}),(0,ie.jsxs)(f.Z,{fullWidth:!0,error:Boolean(x.password&&s.password),sx:{...u.typography.customInput},children:[(0,ie.jsx)(j.Z,{htmlFor:"outlined-adornment-password-register",children:"Password"}),(0,ie.jsx)(y.Z,{id:"outlined-adornment-password-register",type:N?"text":"password",value:P.password,name:"password",label:"Password",onBlur:i,onChange:e=>{m(e),T(e.target.value)},endAdornment:(0,ie.jsx)(w.Z,{position:"end",children:(0,ie.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:_,onMouseDown:L,edge:"end",size:"large",children:N?(0,ie.jsx)(oe.Z,{}):(0,ie.jsx)(se.Z,{})})}),inputProps:{}}),x.password&&s.password&&(0,ie.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text-password-register",children:s.password})]}),(0,ie.jsxs)(f.Z,{fullWidth:!0,error:Boolean(x.cpassword&&s.cpassword),sx:{...u.typography.customInput},children:[(0,ie.jsx)(j.Z,{htmlFor:"outlined-adornment-cpassword-register",children:"Confirm Password"}),(0,ie.jsx)(y.Z,{id:"outlined-adornment-cpassword-register",type:O?"text":"password",value:P.cpassword,name:"cpassword",label:"Confirm Password",onBlur:i,onChange:e=>{m(e),T(e.target.value)},endAdornment:(0,ie.jsx)(w.Z,{position:"end",children:(0,ie.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:z,onMouseDown:L,edge:"end",size:"large",children:O?(0,ie.jsx)(oe.Z,{}):(0,ie.jsx)(se.Z,{})})}),inputProps:{}}),x.cpassword&&s.cpassword&&(0,ie.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text-cpassword-register",children:s.cpassword})]}),0!==B&&(0,ie.jsx)(f.Z,{fullWidth:!0,children:(0,ie.jsx)(g.Z,{sx:{mb:2},children:(0,ie.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,ie.jsx)(a.ZP,{item:!0,children:(0,ie.jsx)(g.Z,{style:{backgroundColor:null===D||void 0===D?void 0:D.color},sx:{width:85,height:8,borderRadius:"7px"}})}),(0,ie.jsx)(a.ZP,{item:!0,children:(0,ie.jsx)(l.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===D||void 0===D?void 0:D.label})})]})})}),(0,ie.jsx)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:(0,ie.jsx)(a.ZP,{item:!0,children:(0,ie.jsx)(C.Z,{control:(0,ie.jsx)(S.Z,{checked:A,onChange:e=>$(e.target.checked),name:"checked",color:"primary"}),label:(0,ie.jsxs)(l.Z,{variant:"subtitle1",children:["Agree with \xa0",(0,ie.jsx)(l.Z,{variant:"subtitle1",component:o.rU,to:"#",children:"Terms & Condition."})]})})})}),s.submit&&(0,ie.jsx)(g.Z,{sx:{mt:3},children:(0,ie.jsx)(b.Z,{error:!0,children:s.submit})}),(0,ie.jsx)(g.Z,{sx:{mt:2},children:(0,ie.jsx)(re.Z,{children:(0,ie.jsx)(k.Z,{disableElevation:!0,disabled:h,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]})}})]})},ce=t(5184);var le=()=>{const e=(0,s.Z)(),r=(0,i.Z)(e.breakpoints.down("md"));return(0,ie.jsx)(d.Z,{children:(0,ie.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,ie.jsx)(a.ZP,{item:!0,xs:12,children:(0,ie.jsx)(a.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,ie.jsx)(a.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,ie.jsx)(u.Z,{children:(0,ie.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,ie.jsx)(a.ZP,{item:!0,sx:{mb:3},children:(0,ie.jsx)(o.rU,{to:"#",children:(0,ie.jsx)(m.Z,{})})}),(0,ie.jsx)(a.ZP,{item:!0,xs:12,children:(0,ie.jsx)(a.ZP,{container:!0,direction:r?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,ie.jsx)(a.ZP,{item:!0,children:(0,ie.jsxs)(c.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,ie.jsx)(l.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:r?"h3":"h2",children:"Sign up"}),(0,ie.jsx)(l.Z,{variant:"caption",fontSize:"16px",textAlign:r?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,ie.jsx)(a.ZP,{item:!0,xs:12,children:(0,ie.jsx)(ae,{})}),(0,ie.jsx)(a.ZP,{item:!0,xs:12,children:(0,ie.jsx)(a.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,ie.jsx)(l.Z,{component:o.rU,to:"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),(0,ie.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,ie.jsx)(ce.Z,{})})]})})}}}]);