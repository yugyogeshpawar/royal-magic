import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from 'axios';
// ----------------------------------------------------------------------

let stakingHistory = [];
let stakingPost = [];
let withDrawHistory = [];
let teams = [];
let refBonus = [];
let stackingBonus = [];
let myRefferal = [];
let levelBonus = [];
const initializer = {
  stakingHistorySucess: false,
  stakingSucess: false,
  stakingBonusSucess: false,
  refBonusSucess: false,
  withdrawHisSuccess: false,
  teamListSucess: false,
  RefBonusSucess: false,
  myRefferalSucess: false,
  levelBonusSucess: false
};

const initialState = {
  isLoading: false,
  error: false,
  users: [],
  stakingHistory
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET USERS
    getStackingSuccess(state, action) {
      state.isLoading = false;
      state.stakingHistory = action.payload;
    },

    // GET MYTEAMS
    getTeamsSuccess(state, action) {
      state.isLoading = false;
      state.output = action.payload;
    }
  }
});

<<<<<<< HEAD
const baseUrl = process.env.PORT || 'http://15.206.66.148:8080/api';
=======
const baseUrl = process.env.PORT || 'https://backend.royalmagic.live/api';
>>>>>>> d5c3db15ebc148a5f13b45b8b844744c93b6d896

// Reducer
export default slice.reducer;

// Actions
export const { onToggleFollow, deleteUser } = slice.actions;

// ----------------------------------------------------------------------

export async function getTeams() {
  if (!initializer.teamListSucess) {
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/Team/MyTeam`, {
        headers
      });
      initializer.teamListSucess = true;
      teams = response.data;
    } catch (error) {
      console.log(error);
      initializer.teamListSucess = false;
    }
  }
  return teams;
}
// ----------------------------------------------------------------------
export async function getMyRefferal() {
  if (!initializer.RefBonusSucess) {
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/Team/MyReferral`, {
        headers
      });
      myRefferal = response.data;
      initializer.RefBonusSucess = true;
    } catch (error) {
      console.log(error);
      initializer.RefBonusSucess = false;
    }
  }
  return myRefferal;
}
// ----------------------------------------------------------------------
export async function getStakingBonus() {
  if (!initializer.stakingBonusSucess) {
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/Earning/StakingBonus`, {
        headers
      });
      initializer.stakingBonusSucess = true;
      stackingBonus = response.data;
    } catch (error) {
      console.log(error);
      initializer.stakingBonusSucess = false;
    }
  }
  return stackingBonus;
}
// ----------------------------------------------------------------------
export async function getLevelBonus() {
  if (!initializer.levelBonusSucess) {
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/Earning/levelBonus`, {
        headers
      });
      initializer.levelBonusSucess = true;
      levelBonus = response.data;
    } catch (error) {
      console.log(error);
      initializer.levelBonusSucess = false;
    }
  }
  return levelBonus;
}
// ----------------------------------------------------------------------
export async function getRefBonus() {
  if (!initializer.RefBonusSucess) {
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/Earning/ReferralBonus`, {
        headers
      });
      initializer.RefBonusSucess = true;
      refBonus = response.data;
    } catch (error) {
      console.log(error);
      initializer.RefBonusSucess = false;
    }
  }
  return refBonus;
}
// ----------------------------------------------------------------------
export async function getWithdrawHistory() {
  if (!initializer.withdrawHisSuccess) {
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/Withdraw/Summary`, {
        headers
      });
      initializer.withdrawHisSuccess = true;
      withDrawHistory = response.data;
    } catch (error) {
      console.log(error);
      initializer.withdrawHisSuccess = false;
    }
  }
  return withDrawHistory;
}
// ----------------------------------------------------------------------

export async function getStacking() {
  if (!initializer.stakingHistorySucess) {
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(`${baseUrl}/Staking/Summary`, {
        headers
      });
      initializer.stakingHistorySucess = true;
      stakingHistory = response.data;
    } catch (error) {
      console.log(error);
      initializer.stakingHistorySucess = false;
    }
  }
  return stakingHistory;
}

// ----------------------------------------------------------------------
export async function postDesposit(values) {
  if (!initializer.stakingSucess) {
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const response = await axios({
        method: 'post',
        url: `${baseUrl}/Staking/`,
        headers: { authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        data: { wallerAddress: values.wallet, amount: values.staking, transactionHash: values.transactionHash }
      });
      initializer.stakingSucess = true;
      stakingPost = response.data;
    } catch (error) {
      console.log(error);
      initializer.stakingSucess = false;
      stakingPost = error;
    }
  }
  return stakingPost;
}

// ----------------------------------------------------------------------

export function getUsers() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios1.get('/api/user/all');
      dispatch(slice.actions.getUsersSuccess(response.data.users));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
// ----------------------------------------------------------------------
