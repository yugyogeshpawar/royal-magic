"use strict";(self.webpackChunkRoyal_Magic=self.webpackChunkRoyal_Magic||[]).push([[327],{4734:function(e,t,s){s.d(t,{Ez:function(){return v},LK:function(){return y},hN:function(){return k},jQ:function(){return T},mF:function(){return p},rM:function(){return B},vD:function(){return _}});var a=s(6373),n=s(6573);let o=[],r=[],i=[],c=[],u=[],d=[],l=[];const g={stakingHistorySucess:!1,stakingSucess:!1,stakingBonusSucess:!1,refBonusSucess:!1,withdrawHisSuccess:!1,teamListSucess:!1,RefBonusSucess:!1,myRefferalSucess:!1,levelBonusSucess:!1},h={isLoading:!1,error:!1,users:[],stakingHistory:o},S=(0,a.oM)({name:"user",initialState:h,reducers:{startLoading(e){e.isLoading=!0},hasError(e,t){e.isLoading=!1,e.error=t.payload},getStackingSuccess(e,t){e.isLoading=!1,e.stakingHistory=t.payload},getTeamsSuccess(e,t){e.isLoading=!1,e.output=t.payload}}}),f={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VERSION:"v1.0.1"}.PORT||"http://localhost:3010/api";S.reducer;const{onToggleFollow:m,deleteUser:w}=S.actions;async function y(){if(!g.teamListSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},t=await n.Z.get(`${f}/Team/MyTeam`,{headers:e});g.teamListSucess=!0,c=t.data}catch(e){console.log(e),g.teamListSucess=!1}return c}async function k(){if(!g.RefBonusSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},t=await n.Z.get(`${f}/Team/MyReferral`,{headers:e});d=t.data,g.RefBonusSucess=!0}catch(e){console.log(e),g.RefBonusSucess=!1}return d}async function _(){if(!g.levelBonusSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},t=await n.Z.get(`${f}/Earning/levelBonus`,{headers:e});g.levelBonusSucess=!0,l=t.data}catch(e){console.log(e),g.levelBonusSucess=!1}return l}async function T(){if(!g.RefBonusSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},t=await n.Z.get(`${f}/Earning/ReferralBonus`,{headers:e});g.RefBonusSucess=!0,u=t.data}catch(e){console.log(e),g.RefBonusSucess=!1}return u}async function p(){if(!g.withdrawHisSuccess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},t=await n.Z.get(`${f}/Withdraw/Summary`,{headers:e});g.withdrawHisSuccess=!0,i=t.data}catch(e){console.log(e),g.withdrawHisSuccess=!1}return i}async function B(){if(!g.stakingHistorySucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("accessToken")}`},t=await n.Z.get(`${f}/Staking/Summary`,{headers:e});g.stakingHistorySucess=!0,o=t.data}catch(e){console.log(e),g.stakingHistorySucess=!1}return o}async function v(e){if(!g.stakingSucess)try{const t=window.localStorage.getItem("accessToken"),s=await(0,n.Z)({method:"post",url:`${f}/Staking/`,headers:{authorization:`Bearer ${t}`,"Content-Type":"application/json"},data:{wallerAddress:e.wallet,amount:e.staking,transactionHash:e.transactionHash}});g.stakingSucess=!0,r=s.data}catch(t){console.log(t),g.stakingSucess=!1}return r}},4327:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var a=s(7313),n=s(8338),o=s(5833),r=s(4734),i=s(6617),c=s(6417);function u(){const[e,t]=(0,a.useState)([]);(0,a.useEffect)((()=>{(async()=>{const e=await(0,r.rM)();Array.isArray(null===e||void 0===e?void 0:e.data)&&t((t=>[...t,...e.data.map((e=>({id:e.record_no,member_user_id:e.member_user_id,member_name:e.member_name,sys_date:(0,i.Z)(new Date(e.tr_date),"dd-MM-yyyy"),investment:e.invest_package,transaction_id:e.hash_code,walletAddress:e.walletAddress,checked:e.checked?"Confirmed":"Pending",status:e.status,deposit_type:e.deposit_type})))]))})()}),[]);const s=a.useMemo((()=>[{field:"id",headerName:"ID",width:50},{field:"sys_date",headerName:"Date",width:120},{field:"investment",headerName:"Investment",hide:!0,width:120},{field:"transaction_id",headerName:"Transaction ID",flex:1},{field:"walletAddress",headerName:"Wallet Address",hide:!0,flex:1},{field:"checked",headerName:"Status",flex:1}]),[]);return(0,c.jsx)("div",{style:{height:"80vh",width:"100%"},children:(0,c.jsx)(n._,{rows:e,columns:s,autoPageSize:!0,components:{Toolbar:o.n},quickFilterText:"Search",sx:{background:"#fff",padding:2,borderRadius:4},showToolbar:!0,slotProps:{toolbar:{showQuickFilter:!0,quickFilterProps:{debounceMs:500}}}})})}}}]);