"use strict";(self.webpackChunkRoyal_Magic=self.webpackChunkRoyal_Magic||[]).push([[853],{4734:function(e,t,a){a.d(t,{Ez:function(){return B},LK:function(){return w},hN:function(){return k},jQ:function(){return R},mF:function(){return p},rM:function(){return T},vD:function(){return _}});var s=a(6373),r=a(6573);let o=[],n=[],i=[],c=[],u=[],l=[],d=[];const f={stakingHistorySucess:!1,stakingSucess:!1,stakingBonusSucess:!1,refBonusSucess:!1,withdrawHisSuccess:!1,teamListSucess:!1,RefBonusSucess:!1,myRefferalSucess:!1,levelBonusSucess:!1},g={isLoading:!1,error:!1,users:[],stakingHistory:o},m=(0,s.oM)({name:"user",initialState:g,reducers:{startLoading(e){e.isLoading=!0},hasError(e,t){e.isLoading=!1,e.error=t.payload},getStackingSuccess(e,t){e.isLoading=!1,e.stakingHistory=t.payload},getTeamsSuccess(e,t){e.isLoading=!1,e.output=t.payload}}}),S={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VERSION:"v1.0.1"}.PORT||"http://15.206.66.148:8080/api";m.reducer;const{onToggleFollow:h,deleteUser:y}=m.actions;async function w(){if(!f.teamListSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`,"Referrer-Policy":"unsafe-url"},t=await r.Z.get(`${S}/Team/MyTeam`,{headers:e});f.teamListSucess=!0,c=t.data}catch(e){console.log(e),f.teamListSucess=!1}return c}async function k(){if(!f.myRefferalSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`,"Referrer-Policy":"unsafe-url"},t=await r.Z.get(`${S}/Team/MyReferral`,{headers:e});l=t.data,f.myRefferalSucess=!0}catch(e){console.log(e),f.myRefferalSucess=!1}return l}async function _(){if(!f.levelBonusSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`,"Referrer-Policy":"unsafe-url"},t=await r.Z.get(`${S}/Earning/levelbonus`,{headers:e});f.levelBonusSucess=!0,d=t.data}catch(e){console.log(e),f.levelBonusSucess=!1}return d}async function R(){if(!f.RefBonusSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`,"Referrer-Policy":"unsafe-url"},t=await r.Z.get(`${S}/Earning/ReferralBonus`,{headers:e});f.RefBonusSucess=!0,u=t.data}catch(e){console.log(e),f.RefBonusSucess=!1}return u}async function p(){if(!f.withdrawHisSuccess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`,"Referrer-Policy":"unsafe-url"},t=await r.Z.get(`${S}/Withdraw/Summary`,{headers:e});f.withdrawHisSuccess=!0,i=t.data}catch(e){console.log(e),f.withdrawHisSuccess=!1}return i}async function T(){if(!f.stakingHistorySucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`,"Referrer-Policy":"unsafe-url"},t=await r.Z.get(`${S}/Staking/Summary`,{headers:e});f.stakingHistorySucess=!0,o=t.data}catch(e){console.log(e),f.stakingHistorySucess=!1}return o}async function B(e){if(!f.stakingSucess)try{const t=window.localStorage.getItem("accessToken"),a=await(0,r.Z)({method:"post",url:`${S}/Staking/`,headers:{authorization:`Bearer ${t}`,"Content-Type":"application/json"},data:{wallerAddress:e.wallet,amount:e.staking,transactionHash:e.transactionHash}});f.stakingSucess=!0,n=a.data}catch(t){console.log(t),f.stakingSucess=!1,n=t}return n}},3853:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var s=a(7313),r=a(8338),o=a(5833),n=a(6617),i=a(4734),c=a(6417);function u(){const[e,t]=(0,s.useState)([]);(0,s.useEffect)((()=>{(async()=>{const e=await(0,i.jQ)();if(Array.isArray(null===e||void 0===e?void 0:e.data)){const a=e.data.map(((e,t)=>({id:t+1,member_user_id:e.member_user_id,member_name:e.member_name,registration_date:(0,n.Z)(new Date(e.calculate_date),"dd-MM-yyyy"),topup_amount:e.income_amt})));t(a)}})()}),[]);return(0,c.jsx)("div",{style:{height:"80vh",width:"100%"},children:(0,c.jsx)(r._,{rows:e,columns:[{field:"id",headerName:"ID",width:50},{field:"member_user_id",headerName:"Member ID",width:100},{field:"member_name",headerName:"Name",hide:!0,width:180},{field:"registration_date",headerName:"Date of Registration",hide:!0,width:150},{field:"topup_amount",headerName:"Topup Amount",width:160}],components:{Toolbar:o.n},autoPageSize:!0,showToolbar:!0,slotProps:{toolbar:{showQuickFilter:!0,quickFilterProps:{debounceMs:500}}},sx:{background:"#fff",padding:2,borderRadius:4}})})}}}]);