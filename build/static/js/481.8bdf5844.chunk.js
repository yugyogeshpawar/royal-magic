"use strict";(self.webpackChunkRoyal_Magic=self.webpackChunkRoyal_Magic||[]).push([[481],{3160:function(e,t,a){a.d(t,{DZ:function(){return f},b_:function(){return S},cO:function(){return g}});var s=a(6373),o=a(6573);let r=[],i=[],c=[];const n={ActiveUsersSucess:!1,userBlockedSuccess:!1,InactiveUsersSucess:!1},d={isLoading:!1,error:!1,users:[],stakingHistory:[]},u=(0,s.oM)({name:"user",initialState:d,reducers:{startLoading(e){e.isLoading=!0},hasError(e,t){e.isLoading=!1,e.error=t.payload},getStackingSuccess(e,t){e.isLoading=!1,e.stakingHistory=t.payload},getTeamsSuccess(e,t){e.isLoading=!1,e.output=t.payload}}}),l={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VERSION:"v1.0.1"}.PORT||"https://13.200.50.205:8080/api/admin";u.reducer;const{onToggleFollow:m,deleteUser:h}=u.actions;async function g(){if(!n.ActiveUsersSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("adminAccessToken")}`},t=await o.Z.get(`${l}/activeUser`,{headers:e});n.ActiveUsersSucess=!0,r=t.data}catch(e){console.log(e),n.ActiveUsersSucess=!1}return r}async function S(){if(!n.userBlockedSuccess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("adminAccessToken")}`},t=await o.Z.get(`${l}/blockedUser`,{headers:e});c=t.data,n.userBlockedSuccess=!0}catch(e){console.log(e),n.userBlockedSuccess=!1}return c}async function f(){if(!n.InactiveUsersSucess)try{const e={Authorization:`Bearer ${window.localStorage.getItem("adminAccessToken")}`},t=await o.Z.get(`${l}/inactive-users`,{headers:e});i=t.data,n.InactiveUsersSucess=!0}catch(e){console.log(e),n.InactiveUsersSucess=!1}return i}},9481:function(e,t,a){a.r(t),a.d(t,{default:function(){return n}});var s=a(7313),o=a(8338),r=a(5833),i=a(3160),c=a(6417);function n(){const[e,t]=(0,s.useState)([]);(0,s.useEffect)((()=>{(async()=>{const e=await(0,i.DZ)();if(Array.isArray(null===e||void 0===e?void 0:e.data)){const a=e.data.map(((e,t)=>({id:t+1,member_user_id:e.member_user_id,member_name:e.member_name,contact:e.contact,email:e.email,wallet_amount:e.wallet_amount})));t(a)}})()}),[]);return(0,c.jsx)("div",{style:{height:"80vh",width:"100%"},children:(0,c.jsx)(o._,{rows:e,columns:[{field:"id",headerName:"No.",width:90},{field:"member_user_id",headerName:"Member User Id",width:150,editable:!0},{field:"member_name",headerName:"Member Name",sortable:!1,width:160},{field:"contact",headerName:"Contact",sortable:!1,width:160},{field:"email",headerName:"Email",sortable:!1,width:160},{field:"wallet_amount",headerName:"Wallet Amount",sortable:!1,width:160}],components:{Toolbar:r.n},autoPageSize:!0,showToolbar:!0,slotProps:{toolbar:{showQuickFilter:!0,quickFilterProps:{debounceMs:500}}},sx:{background:"#fff",padding:2,borderRadius:4}})})}}}]);