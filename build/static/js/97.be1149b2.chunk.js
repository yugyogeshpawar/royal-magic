"use strict";(self.webpackChunkRoyal_Magic=self.webpackChunkRoyal_Magic||[]).push([[97],{4734:function(e,a,t){t.d(a,{Ez:function(){return B},LK:function(){return y},hN:function(){return _},jQ:function(){return R},mF:function(){return T},rM:function(){return p},vD:function(){return k}});var s=t(6373),r=t(6573);let o=[],n=[],i=[],c=[],u=[],l=[],d=[];const f={stakingHistorySucess:!1,stakingSucess:!1,stakingBonusSucess:!1,refBonusSucess:!1,withdrawHisSuccess:!1,teamListSucess:!1,RefBonusSucess:!1,myRefferalSucess:!1,levelBonusSucess:!1},g={isLoading:!1,error:!1,users:[],stakingHistory:o},m=(0,s.oM)({name:"user",initialState:g,reducers:{startLoading(e){e.isLoading=!0},hasError(e,a){e.isLoading=!1,e.error=a.payload},getStackingSuccess(e,a){e.isLoading=!1,e.stakingHistory=a.payload},getTeamsSuccess(e,a){e.isLoading=!1,e.output=a.payload}}}),h={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VERSION:"v1.0.1"}.PORT||"http://15.206.66.148:8080/api";m.reducer;const{onToggleFollow:S,deleteUser:w}=m.actions;async function y(){if(!f.teamListSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`,"Referrer-Policy":"unsafe-url"},a=await r.Z.get(`${h}/Team/MyTeam`,{headers:e});f.teamListSucess=!0,c=a.data}catch(e){console.log(e),f.teamListSucess=!1}return c}async function _(){if(!f.myRefferalSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`,"Referrer-Policy":"unsafe-url"},a=await r.Z.get(`${h}/Team/MyReferral`,{headers:e});l=a.data,f.myRefferalSucess=!0}catch(e){console.log(e),f.myRefferalSucess=!1}return l}async function k(){if(!f.levelBonusSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`,"Referrer-Policy":"unsafe-url"},a=await r.Z.get(`${h}/Earning/levelbonus`,{headers:e});f.levelBonusSucess=!0,d=a.data}catch(e){console.log(e),f.levelBonusSucess=!1}return d}async function R(){if(!f.RefBonusSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`,"Referrer-Policy":"unsafe-url"},a=await r.Z.get(`${h}/Earning/ReferralBonus`,{headers:e});f.RefBonusSucess=!0,u=a.data}catch(e){console.log(e),f.RefBonusSucess=!1}return u}async function T(){if(!f.withdrawHisSuccess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`,"Referrer-Policy":"unsafe-url"},a=await r.Z.get(`${h}/Withdraw/Summary`,{headers:e});f.withdrawHisSuccess=!0,i=a.data}catch(e){console.log(e),f.withdrawHisSuccess=!1}return i}async function p(){if(!f.stakingHistorySucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`,"Referrer-Policy":"unsafe-url"},a=await r.Z.get(`${h}/Staking/Summary`,{headers:e});f.stakingHistorySucess=!0,o=a.data}catch(e){console.log(e),f.stakingHistorySucess=!1}return o}async function B(e){if(!f.stakingSucess)try{const a=window.localStorage.getItem("accessToken"),t=await(0,r.Z)({method:"post",url:`${h}/Staking/`,headers:{authorization:`Bearer ${a}`,"Content-Type":"application/json"},data:{wallerAddress:e.wallet,amount:e.staking,transactionHash:e.transactionHash}});f.stakingSucess=!0,n=t.data}catch(a){console.log(a),f.stakingSucess=!1,n=a}return n}},9858:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var s=t(7313),r=t(8338),o=t(5833),n=t(4734),i=t(6617),c=t(6417);function u(){const[e,a]=(0,s.useState)([]);(0,s.useEffect)((()=>{(async()=>{const e=await(0,n.mF)();console.log(e.data),Array.isArray(null===e||void 0===e?void 0:e.data)&&a(e.data.map(((e,a)=>({id:a+1,member_user_id:e.member_user_id,member_name:e.member_name,with_amt:e.withdraw_amount,with_date:(0,i.Z)(new Date(e.with_date),"dd-MM-yyyy"),paid_status:e.paid_status}))))})()}),[]);const t=s.useMemo((()=>[{field:"id",headerName:"ID"},{field:"member_user_id",headerName:"Member ID"},{field:"member_name",headerName:"Name",hide:!0},{field:"with_amt",headerName:"Withdraw Amount",width:120},{field:"with_date",headerName:"Date of Amount",hide:!0},{field:"paid_status",headerName:"Paid Status",type:"boolean"}]),[]);return(0,c.jsx)("div",{style:{height:"80vh",width:"100%"},children:(0,c.jsx)(r._,{rows:e,columns:t,autoPageSize:!0,components:{Toolbar:o.n},quickFilterText:"Search",sx:{background:"#fff",padding:2,borderRadius:4},showToolbar:!0,slotProps:{toolbar:{showQuickFilter:!0,quickFilterProps:{debounceMs:500}}}})})}}}]);