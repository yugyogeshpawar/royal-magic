"use strict";(self.webpackChunkRoyal_Magic=self.webpackChunkRoyal_Magic||[]).push([[10],{3010:function(e,r,n){n.r(r),n.d(r,{default:function(){return R}});var s=n(9860),t=n(4813),o=n(9019),i=n(5898),a=n(1113),l=n(9536),d=n(547),c=n(5602),m=n(7313),u=n(7890),h=n(9466),x=n(7829),p=n(1685),w=n(1550),Z=n(3306),j=n(9914),g=n(5480),f=n(9099),P=n(4469),y=n(3604),v=n(6467),b=n(4117),C=n(4285),S=n(3463),I=n(9429),B=n(2889),k=n(976),E=n(6417);var F=e=>{let{...r}=e;const[n,t]=(0,m.useState)(!1),[l,d]=(0,m.useState)(300),[c,F]=(0,m.useState)({email:!1,password:!1,otp:!1,newPassword:!1,confirmPassword:!1}),[M,N]=(0,m.useState)(""),[R,W]=(0,m.useState)(""),[T,A]=(0,m.useState)(""),[O,D]=(0,m.useState)(""),[H]=(0,m.useState)({}),U=(0,s.Z)(),_=(0,B.Z)(),{confirmOptPassword:q,forgotPassword:z}=(0,C.Z)(),V=(0,u.s0)(),J=()=>{t(!0)},L=()=>{t(!1)};(0,m.useEffect)((()=>{let e;return n&&(e=setInterval((()=>{d((e=>e-1))}),1e3)),()=>{clearInterval(e)}}),[n]),(0,m.useEffect)((()=>{0===l&&L()}),[l]);const G=e=>()=>{F((r=>({...r,[e]:!0})))},K=()=>{n&&J()};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(o.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:(0,E.jsx)(o.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,E.jsx)(x.Z,{sx:{mb:2},children:(0,E.jsx)(a.Z,{variant:"subtitle1",children:"Forgot Password"})})})}),(0,E.jsx)(I.J9,{initialValues:{email:"info@royalmagic.live",submit:null},validationSchema:S.Ry().shape({email:S.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:async(e,r)=>{let{setErrors:n,setStatus:s,setSubmitting:t}=r;try{console.log(e),await z(e.email),D(e.email),_.current&&(s({success:!0}),t(!1)),J()}catch(o){console.error(o),_.current&&(s({success:!1}),n({submit:o.message}),t(!1))}},children:e=>{let{errors:n,handleChange:s,handleSubmit:t,isSubmitting:o,values:l}=e;return(0,E.jsx)(p.Z,{onClickAway:K,children:(0,E.jsxs)("form",{noValidate:!0,onSubmit:t,...r,children:[(0,E.jsxs)(w.Z,{fullWidth:!0,error:Boolean(c.email&&n.email),sx:{...U.typography.customInput},children:[(0,E.jsx)(Z.Z,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),(0,E.jsx)(j.Z,{id:"outlined-adornment-email-login",type:"email",value:l.email,name:"email",onBlur:G("email"),onChange:s,label:"Email Address / Username",inputProps:{}}),c.email&&n.email&&(0,E.jsx)(g.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.email})]}),(0,E.jsxs)(i.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[(0,E.jsx)("div",{}),(0,E.jsx)(a.Z,{variant:"subtitle1",color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},component:h.rU,to:"/login",children:"Login"})]}),n.submit&&(0,E.jsx)(x.Z,{sx:{mt:3},children:(0,E.jsx)(g.Z,{error:!0,children:n.submit})}),(0,E.jsx)(x.Z,{sx:{mt:2},children:(0,E.jsx)(k.Z,{children:(0,E.jsx)(f.Z,{disableElevation:!0,disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Forgot Password"})})})]})})}}),(0,E.jsxs)(P.Z,{open:n,onClose:L,children:[(0,E.jsx)(y.Z,{children:"Forgot Password"}),(0,E.jsxs)(v.Z,{children:[(0,E.jsxs)(w.Z,{fullWidth:!0,error:Boolean(c.otp&&H.otp),sx:{...U.typography.customInput},children:[(0,E.jsx)(Z.Z,{htmlFor:"outlined-adornment-otp",children:"OTP"}),(0,E.jsx)(j.Z,{id:"outlined-adornment-otp",type:"text",value:M,name:"otp",onBlur:G("otp"),onChange:e=>N(e.target.value),label:"OTP",inputProps:{}}),c.otp&&H.otp&&(0,E.jsx)(g.Z,{error:!0,id:"standard-weight-helper-text-otp",children:H.otp})]}),(0,E.jsxs)(a.Z,{variant:"body2",sx:{marginBottom:1},children:["OTP will expire in: ",Math.floor(l/60),":",l%60<10?"0"+l%60:l%60]}),(0,E.jsxs)(w.Z,{fullWidth:!0,error:Boolean(c.newPassword&&H.newPassword),sx:{...U.typography.customInput},children:[(0,E.jsx)(Z.Z,{htmlFor:"outlined-adornment-new-password",children:"New Password"}),(0,E.jsx)(j.Z,{id:"outlined-adornment-new-password",type:"password",value:R,name:"newPassword",onBlur:G("newPassword"),onChange:e=>W(e.target.value),label:"New Password",inputProps:{}}),c.newPassword&&H.newPassword&&(0,E.jsx)(g.Z,{error:!0,id:"outlined-adornment-new-password-helper-text",children:H.newPassword}),!c.newPassword&&(0,E.jsx)(g.Z,{id:"standard-weight-helper-text-new-password",children:"Enter your new password"}),H.newPassword&&(0,E.jsx)(g.Z,{error:!0,id:"outlined-adornment-new-password-helper-text",children:H.newPassword})]}),(0,E.jsxs)(w.Z,{fullWidth:!0,error:Boolean(c.confirmPassword&&H.confirmPassword),sx:{...U.typography.customInput},children:[(0,E.jsx)(Z.Z,{htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),(0,E.jsx)(j.Z,{id:"outlined-adornment-confirm-password",type:"password",value:T,name:"confirmPassword",onBlur:G("confirmPassword"),onChange:e=>A(e.target.value),label:"Confirm Password",inputProps:{}}),c.confirmPassword&&H.confirmPassword&&(0,E.jsx)(g.Z,{error:!0,id:"outlined-adornment-confirm-password-helper-text",children:H.confirmPassword}),!c.confirmPassword&&(0,E.jsx)(g.Z,{id:"standard-weight-helper-text-confirm-password",children:"Confirm your new password"}),H.confirmPassword&&(0,E.jsx)(g.Z,{error:!0,id:"outlined-adornment-new-password-helper-text",children:H.confirmPassword})]}),(0,E.jsxs)(b.Z,{children:[(0,E.jsx)(f.Z,{onClick:L,color:"primary",variant:"outlined",children:"Cancel"}),(0,E.jsx)(f.Z,{color:"primary",variant:"contained",onClick:async()=>{try{if(console.log(123),R!=T)throw console.log("password should match"),"password should match";await q(M,R,T,O),V("/login")}catch(e){console.error(e)}},children:"Submit New Password"})]})]})]})]})},M=n(1926),N=n(5184);var R=()=>{const e=(0,s.Z)(),r=(0,t.Z)(e.breakpoints.down("md"));return(0,E.jsx)(d.Z,{children:(0,E.jsxs)(o.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,E.jsx)(o.ZP,{item:!0,xs:12,children:(0,E.jsx)(o.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,E.jsx)(o.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,E.jsx)(c.Z,{children:(0,E.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,E.jsx)(o.ZP,{item:!0,sx:{mb:3},children:(0,E.jsx)(M.Z,{})}),(0,E.jsx)(o.ZP,{item:!0,xs:12,children:(0,E.jsx)(o.ZP,{container:!0,direction:r?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,E.jsx)(o.ZP,{item:!0,children:(0,E.jsxs)(i.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,E.jsx)(a.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:r?"h3":"h2",children:"Hi, Welcome Back"}),(0,E.jsx)(a.Z,{variant:"caption",fontSize:"16px",textAlign:r?"center":"inherit",children:"Enter your email to continue"})]})})})}),(0,E.jsx)(o.ZP,{item:!0,xs:12,children:(0,E.jsx)(F,{})}),(0,E.jsx)(o.ZP,{item:!0,xs:12,children:(0,E.jsx)(l.Z,{})})]})})})})}),(0,E.jsx)(o.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,E.jsx)(N.Z,{})})]})})}},3604:function(e,r,n){var s=n(7462),t=n(3366),o=n(7313),i=n(3061),a=n(1921),l=n(1113),d=n(7592),c=n(5469),m=n(3174),u=n(3909),h=n(6417);const x=["className","id"],p=(0,d.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,r)=>r.root})({padding:"16px 24px",flex:"0 0 auto"}),w=o.forwardRef((function(e,r){const n=(0,c.Z)({props:e,name:"MuiDialogTitle"}),{className:l,id:d}=n,w=(0,t.Z)(n,x),Z=n,j=(e=>{const{classes:r}=e;return(0,a.Z)({root:["root"]},m.a,r)})(Z),{titleId:g=d}=o.useContext(u.Z);return(0,h.jsx)(p,(0,s.Z)({component:"h2",className:(0,i.Z)(j.root,l),ownerState:Z,ref:r,variant:"h6",id:g},w))}));r.Z=w}}]);