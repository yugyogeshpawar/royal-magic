"use strict";(self.webpackChunkRoyal_Magic=self.webpackChunkRoyal_Magic||[]).push([[774],{4734:function(A,g,o){o.d(g,{Ez:function(){return I},LK:function(){return D},hN:function(){return p},jQ:function(){return E},mF:function(){return N},rM:function(){return w},vD:function(){return m}});var a=o(6373),e=o(6573);let t=[],s=[],i=[],B=[],n=[],C=[],U=[];const Q={stakingHistorySucess:!1,stakingSucess:!1,stakingBonusSucess:!1,refBonusSucess:!1,withdrawHisSuccess:!1,teamListSucess:!1,RefBonusSucess:!1,myRefferalSucess:!1,levelBonusSucess:!1},l={isLoading:!1,error:!1,users:[],stakingHistory:t},r=(0,a.oM)({name:"user",initialState:l,reducers:{startLoading(A){A.isLoading=!0},hasError(A,g){A.isLoading=!1,A.error=g.payload},getStackingSuccess(A,g){A.isLoading=!1,A.stakingHistory=g.payload},getTeamsSuccess(A,g){A.isLoading=!1,A.output=g.payload}}}),c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VERSION:"v1.0.1"}.PORT||"http://13.200.50.205:3010/api";r.reducer;const{onToggleFollow:S,deleteUser:K}=r.actions;async function D(){if(!Q.teamListSucess)try{const A={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},g=await e.Z.get(`${c}/Team/MyTeam`,{headers:A});Q.teamListSucess=!0,B=g.data}catch(A){console.log(A),Q.teamListSucess=!1}return B}async function p(){if(!Q.RefBonusSucess)try{const A={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},g=await e.Z.get(`${c}/Team/MyReferral`,{headers:A});C=g.data,Q.RefBonusSucess=!0}catch(A){console.log(A),Q.RefBonusSucess=!1}return C}async function m(){if(!Q.levelBonusSucess)try{const A={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},g=await e.Z.get(`${c}/Earning/levelBonus`,{headers:A});Q.levelBonusSucess=!0,U=g.data}catch(A){console.log(A),Q.levelBonusSucess=!1}return U}async function E(){if(!Q.RefBonusSucess)try{const A={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},g=await e.Z.get(`${c}/Earning/ReferralBonus`,{headers:A});Q.RefBonusSucess=!0,n=g.data}catch(A){console.log(A),Q.RefBonusSucess=!1}return n}async function N(){if(!Q.withdrawHisSuccess)try{const A={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},g=await e.Z.get(`${c}/Withdraw/Summary`,{headers:A});Q.withdrawHisSuccess=!0,i=g.data}catch(A){console.log(A),Q.withdrawHisSuccess=!1}return i}async function w(){if(!Q.stakingHistorySucess)try{const A={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},g=await e.Z.get(`${c}/Staking/Summary`,{headers:A});Q.stakingHistorySucess=!0,t=g.data}catch(A){console.log(A),Q.stakingHistorySucess=!1}return t}async function I(A){if(!Q.stakingSucess)try{const g=window.localStorage.getItem("accessToken"),o=await(0,e.Z)({method:"post",url:`${c}/Staking/`,headers:{authorization:`Bearer ${g}`,"Content-Type":"application/json"},data:{wallerAddress:A.wallet,amount:A.staking,transactionHash:A.transactionHash}});Q.stakingSucess=!0,s=o.data}catch(g){console.log(g),Q.stakingSucess=!1,s=g}return s}},1774:function(A,g,o){o.r(g),o.d(g,{default:function(){return S}});var a=o(7313),e=o(7829),t=o(4631),s=o(9099),i=o(2586),B="data:image/png;base64,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",n=o(8359),C=o(9881),U=o(1198),Q=o(7131),l=o(4734),r=o(6417);const c=a.forwardRef((function(A,g){return(0,r.jsx)(C.Z,{elevation:6,ref:g,variant:"filled",...A})}));function S(){const[A,g]=a.useState(!1),[o,C]=a.useState(!1),[S,K]=a.useState({wallet:"",staking:"",transactionHash:""}),[D,p]=a.useState({wallet:"",staking:"",transactionHash:""}),m=(A,o)=>{"clickaway"!==o&&g(!1)},E=()=>{try{navigator.clipboard.writeText("0x3bCaD00fDde10EbB9285899dd01522D8E0A54337"),g(!0)}catch(A){const o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("display","none");const a="0x3bCaD00fDde10EbB9285899dd01522D8E0A54337";o.setAttribute("value",a),document.body.appendChild(o),o.select(),document.execCommand("Copy"),o.parentElement.removeChild(o),g(!0)}},N=(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(s.Z,{color:"secondary",size:"small",onClick:m,children:"UNDO"}),(0,r.jsx)(Q.Z,{size:"small","aria-label":"close",color:"inherit",onClick:m,children:(0,r.jsx)(U.Z,{fontSize:"small"})})]}),w=A=>{const{name:g,value:o}=A.target;K((A=>({...A,[g]:o})))};return(0,r.jsxs)(e.Z,{sx:{display:"flex",flexWrap:"wrap"},children:[(0,r.jsxs)(e.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:async A=>{A.preventDefault();try{const A=(()=>{const A={};return""===S.wallet.trim()&&(A.wallet="Wallet is required."),""===S.staking.trim()&&(A.staking="Staking amount is required."),""===S.transactionHash.trim()&&(A.transactionHash="Transaction hash is required."),A})();if(0===Object.keys(A).length){if(500==(await(0,l.Ez)(S)).response.status)throw console.log("Transaction hash is already submitted"),"Transaction hash is already submitted";C(!0)}else p(A)}catch(g){p((A=>({...A,transactionHash:g})))}},sx:{display:"flex",flexDirection:"column",background:"white",width:"fit-content",p:4,borderRadius:"20px",mb:4},children:[(0,r.jsx)("h1",{children:"Enter Deposit Details"}),(0,r.jsx)(t.Z,{error:Boolean(D.wallet),id:"outlined-error-helper-text-wallet",label:"Wallet",name:"wallet",value:S.wallet,onChange:w,helperText:D.wallet,sx:{mt:2,width:{sm:200,md:300},"& .MuiInputBase-root":{}}}),(0,r.jsx)(t.Z,{error:Boolean(D.staking),id:"outlined-error-helper-text-staking",label:"Deposit (USD)",name:"staking",value:S.staking,onChange:w,helperText:D.staking,sx:{mt:2,width:{sm:200,md:300}}}),(0,r.jsx)(t.Z,{error:Boolean(D.transactionHash),id:"outlined-error-helper-text-transaction-hash",label:"Transaction Hash",name:"transactionHash",value:S.transactionHash,onChange:w,helperText:D.transactionHash,sx:{mt:2,width:{sm:200,md:300},"& .MuiInputBase-root":{}}}),(0,r.jsx)(s.Z,{type:"submit",variant:"contained",disableElevation:!0,sx:{mt:2,width:"200px"},children:"Submit"}),(0,r.jsx)("p",{children:"Deposit: Lock crypto, support network - Tron."})]}),(0,r.jsxs)(e.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:{display:"flex",flexDirection:"column",background:"white",width:"fit-content",p:4,borderRadius:"20px",ml:2},children:[(0,r.jsxs)(e.Z,{children:[(0,r.jsx)("img",{src:B,alt:"QrCode",width:240}),(0,r.jsx)("h1",{children:"Important"}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:"This address is only for Royal Magic"}),(0,r.jsx)("li",{children:"Sending any other coin or token to this address may result in the loss"}),(0,r.jsx)("li",{children:"Deposits will automatically be processed after 3 network confirmations."})]})]}),(0,r.jsxs)(e.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mt:2},children:[(0,r.jsx)(t.Z,{disabled:!0,id:"outlined-error-helper-text",label:"0x3bCaD00fDde10EbB9285899dd01522D8E0A54337",sx:{width:"100%"}}),(0,r.jsx)(i.Z,{sx:{color:"action.active",mr:1,my:.5},onClick:()=>{E()}}),(0,r.jsx)(n.Z,{style:{backgroundColor:"#fff"},open:A,autoHideDuration:1e3,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:m,message:"Copied",action:N}),(0,r.jsx)(n.Z,{autoHideDuration:6e3,open:o,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:(A,g)=>{"clickaway"!==g&&C(!1)},action:N,children:(0,r.jsx)(c,{severity:"success",children:"Request Submitted Successfully"})})]})]})]})}},2586:function(A,g,o){var a=o(4836);g.Z=void 0;var e=a(o(5045)),t=o(6417),s=(0,e.default)((0,t.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");g.Z=s}}]);