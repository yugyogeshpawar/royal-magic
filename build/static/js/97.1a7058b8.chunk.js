"use strict";(self.webpackChunkRoyal_Magic=self.webpackChunkRoyal_Magic||[]).push([[97],{4734:function(e,t,a){a.d(t,{Ez:function(){return R},LK:function(){return y},hN:function(){return _},jQ:function(){return T},mF:function(){return p},rM:function(){return B},vD:function(){return k}});var s=a(6373),o=a(6573);let n=[],i=[],r=[],c=[],u=[],d=[],l=[];const g={stakingHistorySucess:!1,stakingSucess:!1,stakingBonusSucess:!1,refBonusSucess:!1,withdrawHisSuccess:!1,teamListSucess:!1,RefBonusSucess:!1,myRefferalSucess:!1,levelBonusSucess:!1},h={isLoading:!1,error:!1,users:[],stakingHistory:n},S=(0,s.oM)({name:"user",initialState:h,reducers:{startLoading(e){e.isLoading=!0},hasError(e,t){e.isLoading=!1,e.error=t.payload},getStackingSuccess(e,t){e.isLoading=!1,e.stakingHistory=t.payload},getTeamsSuccess(e,t){e.isLoading=!1,e.output=t.payload}}}),m={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VERSION:"v1.0.1"}.PORT||"https://backend.royalmagic.live/api";S.reducer;const{onToggleFollow:f,deleteUser:w}=S.actions;async function y(){if(!g.teamListSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},t=await o.Z.get(`${m}/Team/MyTeam`,{headers:e});g.teamListSucess=!0,c=t.data}catch(e){console.log(e),g.teamListSucess=!1}return c}async function _(){if(!g.RefBonusSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},t=await o.Z.get(`${m}/Team/MyReferral`,{headers:e});d=t.data,g.RefBonusSucess=!0}catch(e){console.log(e),g.RefBonusSucess=!1}return d}async function k(){if(!g.levelBonusSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},t=await o.Z.get(`${m}/Earning/levelBonus`,{headers:e});g.levelBonusSucess=!0,l=t.data}catch(e){console.log(e),g.levelBonusSucess=!1}return l}async function T(){if(!g.RefBonusSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},t=await o.Z.get(`${m}/Earning/ReferralBonus`,{headers:e});g.RefBonusSucess=!0,u=t.data}catch(e){console.log(e),g.RefBonusSucess=!1}return u}async function p(){if(!g.withdrawHisSuccess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},t=await o.Z.get(`${m}/Withdraw/Summary`,{headers:e});g.withdrawHisSuccess=!0,r=t.data}catch(e){console.log(e),g.withdrawHisSuccess=!1}return r}async function B(){if(!g.stakingHistorySucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},t=await o.Z.get(`${m}/Staking/Summary`,{headers:e});g.stakingHistorySucess=!0,n=t.data}catch(e){console.log(e),g.stakingHistorySucess=!1}return n}async function R(e){if(!g.stakingSucess)try{const t=window.localStorage.getItem("accessToken"),a=await(0,o.Z)({method:"post",url:`${m}/Staking/`,headers:{authorization:`Bearer ${t}`,"Content-Type":"application/json"},data:{wallerAddress:e.wallet,amount:e.staking,transactionHash:e.transactionHash}});g.stakingSucess=!0,i=a.data}catch(t){console.log(t),g.stakingSucess=!1,i=t}return i}},9858:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var s=a(7313),o=a(8338),n=a(5833),i=a(4734),r=a(6617),c=a(6417);function u(){const[e,t]=(0,s.useState)([]);(0,s.useEffect)((()=>{(async()=>{const e=await(0,i.mF)();console.log(e.data),Array.isArray(null===e||void 0===e?void 0:e.data)&&t(e.data.map(((e,t)=>({id:t+1,member_user_id:e.member_user_id,member_name:e.member_name,with_amt:e.withdraw_amount,with_date:(0,r.Z)(new Date(e.with_date),"dd-MM-yyyy"),paid_status:e.paid_status}))))})()}),[]);const a=s.useMemo((()=>[{field:"id",headerName:"ID"},{field:"member_user_id",headerName:"Member ID"},{field:"member_name",headerName:"Name",hide:!0},{field:"with_amt",headerName:"Withdraw Amount",width:120},{field:"with_date",headerName:"Date of Amount",hide:!0},{field:"paid_status",headerName:"Paid Status",type:"boolean"}]),[]);return(0,c.jsx)("div",{style:{height:"80vh",width:"100%"},children:(0,c.jsx)(o._,{rows:e,columns:a,autoPageSize:!0,components:{Toolbar:n.n},quickFilterText:"Search",sx:{background:"#fff",padding:2,borderRadius:4},showToolbar:!0,slotProps:{toolbar:{showQuickFilter:!0,quickFilterProps:{debounceMs:500}}}})})}}}]);