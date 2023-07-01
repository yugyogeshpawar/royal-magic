"use strict";(self.webpackChunkRoyal_Magic=self.webpackChunkRoyal_Magic||[]).push([[820],{3160:function(e,t,a){a.d(t,{DZ:function(){return A},IL:function(){return $},NJ:function(){return v},SH:function(){return p},b_:function(){return k},cO:function(){return b},o8:function(){return I},on:function(){return T},ty:function(){return _},wg:function(){return U}});var s=a(6373),o=a(6573);let r=[],c=[],n=[],i=[],u=[],d=[],l=[],h=[];const m={ActiveUsersSucess:!1,userBlockedSuccess:!1,InvestmentSucess:!1,InactiveUsersSucess:!1},g={isLoading:!1,error:!1,users:[],stakingHistory:[]},S=(0,s.oM)({name:"user",initialState:g,reducers:{startLoading(e){e.isLoading=!0},hasError(e,t){e.isLoading=!1,e.error=t.payload},getStackingSuccess(e,t){e.isLoading=!1,e.stakingHistory=t.payload},getTeamsSuccess(e,t){e.isLoading=!1,e.output=t.payload}}}),w={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VERSION:"v1.0.1"}.PORT||"https://backend.royalmagic.live/api/admin";S.reducer;const{onToggleFollow:f,deleteUser:y}=S.actions;async function b(){if(!m.ActiveUsersSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("adminAccessToken")}`,"Referrer-Policy":"unsafe-url"},t=await o.Z.get(`${w}/activeUser`,{headers:e});m.ActiveUsersSucess=!0,r=t.data}catch(e){console.log(e),m.ActiveUsersSucess=!1}return r}async function k(){if(!m.userBlockedSuccess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("adminAccessToken")}`,"Referrer-Policy":"unsafe-url"},t=await o.Z.get(`${w}/blockedUser`,{headers:e});n=t.data,m.userBlockedSuccess=!0}catch(e){console.log(e),m.userBlockedSuccess=!1}return n}async function A(){if(!m.InactiveUsersSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("adminAccessToken")}`,"Referrer-Policy":"unsafe-url"},t=await o.Z.get(`${w}/inactive-users`,{headers:e});c=t.data,m.InactiveUsersSucess=!0}catch(e){console.log(e),m.InactiveUsersSucess=!1}return c}async function _(){if(!m.InvestmentSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("adminAccessToken")}`},t=await o.Z.get(`${w}/summary`,{headers:e});i=t.data,m.InvestmentSucess=!0}catch(e){console.log(e),m.InvestmentSucess=!1,i=e}return i}async function v(){if(!m.WithdrawSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("adminAccessToken")}`},t=await o.Z.get(`${w}/withdrawRequest`,{headers:e});console.log(t.data),u=t.data,m.WithdrawSucess=!0}catch(e){console.log(e),m.WithdrawSucess=!1,u=e}return u}async function I(){if(!m.WithdrawSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("adminAccessToken")}`},t=await o.Z.get(`${w}/withdrawRequest`,{headers:e});console.log(t.data),u=t.data,m.WithdrawSucess=!0}catch(e){console.log(e),m.WithdrawSucess=!1,u=e}return u}async function T(e){if(!m.SearchSucess)try{const t={Authorization:`Bearer ${window.localStorage.getItem("adminAccessToken")}`},a=await o.Z.get(`${w}/search?search=${e}`,{headers:t});d=a.data,m.SearchSucess=!0}catch(t){console.log(t),m.SearchSucess=!1,d=t}return d}async function p(e){if(!m.SearchDashboardSucess)try{const t={Authorization:`Bearer ${window.localStorage.getItem("adminAccessToken")}`},a=await o.Z.get(`${w}/search-dashboard?userID=${e}`,{headers:t});l=a.data,m.SearchDashboardSucess=!0}catch(t){console.log(t),m.SearchDashboardSucess=!1,l=t}return l}async function $(e){if(!m.blockUser)try{const t=window.localStorage.getItem("adminAccessToken"),a=await(0,o.Z)({method:"post",url:`${w}/block-user`,headers:{authorization:`Bearer ${t}`,"Content-Type":"application/json"},data:{userID:e}});h=a.data,m.blockUser=!0}catch(t){console.log(t),m.blockUser=!1,h=t}return h}async function U(e){if(!m.blockUser)try{const t=window.localStorage.getItem("adminAccessToken"),a=await(0,o.Z)({method:"post",url:`${w}/unblock-user`,headers:{authorization:`Bearer ${t}`,"Content-Type":"application/json"},data:{userID:e}});h=a.data,m.blockUser=!0}catch(t){console.log(t),m.blockUser=!1,h=t}return h}},5820:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var s=a(7313),o=a(8338),r=a(5833),c=a(3160),n=a(6417);function i(){const[e,t]=(0,s.useState)([]);(0,s.useEffect)((()=>{(async()=>{const e=await(0,c.b_)();if(Array.isArray(null===e||void 0===e?void 0:e.data)){const a=e.data.map(((e,t)=>({id:t+1,member_user_id:e.member_user_id,member_name:e.member_name,contact:e.contact,email:e.email,wallet_amount:e.wallet_amount})));t(a)}})()}),[]);return(0,n.jsx)("div",{style:{height:"80vh",width:"100%"},children:(0,n.jsx)(o._,{rows:e,columns:[{field:"id",headerName:"No.",width:90},{field:"member_user_id",headerName:"Member User Id",width:150,editable:!0},{field:"member_name",headerName:"Member Name",sortable:!1,width:160},{field:"contact",headerName:"Contact",sortable:!1,width:160},{field:"email",headerName:"Email",sortable:!1,width:160},{field:"wallet_amount",headerName:"Wallet Amount",sortable:!1,width:160}],components:{Toolbar:r.n},autoPageSize:!0,showToolbar:!0,slotProps:{toolbar:{showQuickFilter:!0,quickFilterProps:{debounceMs:500}}},sx:{background:"#fff",padding:2,borderRadius:4}})})}}}]);