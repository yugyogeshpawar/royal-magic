import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from 'axios';
// ----------------------------------------------------------------------

let stakingHistory = [];
let activeUsers = [];
let inactiveUsers = [];
let blockedUsers = [];
let Investment = [];
let Withdraw = [];
const initializer = {
  ActiveUsersSucess: false,
  userBlockedSuccess: false,
  InvestmentSucess: false,
  InactiveUsersSucess: false
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

const baseUrl = process.env.PORT || 'https://backend.royalmagic.live/api/admin';

// Reducer
export default slice.reducer;

// Actions
export const { onToggleFollow, deleteUser } = slice.actions;

// ----------------------------------------------------------------------

export async function getActiveUsers() {
  if (!initializer.ActiveUsersSucess) {
    try {
      const accessToken = window.localStorage.getItem('adminAccessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Referrer-Policy': 'unsafe-url'
      };
      const response = await axios.get(`${baseUrl}/activeUser`, {
        headers
      });
      initializer.ActiveUsersSucess = true;
      activeUsers = response.data;
    } catch (error) {
      console.log(error);
      initializer.ActiveUsersSucess = false;
    }
  }
  return activeUsers;
}
// ----------------------------------------------------------------------
export async function getBlockedUsers() {
  if (!initializer.userBlockedSuccess) {
    try {
      const accessToken = window.localStorage.getItem('adminAccessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Referrer-Policy': 'unsafe-url'
      };
      const response = await axios.get(`${baseUrl}/blockedUser`, {
        headers
      });
      blockedUsers = response.data;
      initializer.userBlockedSuccess = true;
    } catch (error) {
      console.log(error);
      initializer.userBlockedSuccess = false;
    }
  }
  return blockedUsers;
}
// ----------------------------------------------------------------------
export async function getInactiveUsers() {
  if (!initializer.InactiveUsersSucess) {
    try {
      const accessToken = window.localStorage.getItem('adminAccessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Referrer-Policy': 'unsafe-url'
      };
      const response = await axios.get(`${baseUrl}/inactive-users`, {
        headers
      });
      inactiveUsers = response.data;
      initializer.InactiveUsersSucess = true;
    } catch (error) {
      console.log(error);
      initializer.InactiveUsersSucess = false;
    }
  }
  return inactiveUsers;
}
// ----------------------------------------------------------------------
export async function getInvestSummary() {
  if (!initializer.InvestmentSucess) {
    try {
      const accessToken = window.localStorage.getItem('adminAccessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      const response = await axios.get(`${baseUrl}/summary`, {
        headers
      });
      Investment = response.data;
      initializer.InvestmentSucess = true;
    } catch (error) {
      console.log(error);
      initializer.InvestmentSucess = false;
      Investment = error;
    }
  }
  return Investment;
}
// ----------------------------------------------------------------------
export async function getWithdrawReqSummary() {
  if (!initializer.WithdrawSucess) {
    try {
      const accessToken = window.localStorage.getItem('adminAccessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      const response = await axios.get(`${baseUrl}/withdrawRequest`, {
        headers
      });
      console.log(response.data);
      Withdraw = response.data;
      initializer.WithdrawSucess = true;
    } catch (error) {
      console.log(error);
      initializer.WithdrawSucess = false;
      Withdraw = error;
    }
  }
  return Withdraw;
}
// ----------------------------------------------------------------------
export async function getWithdrawSummary() {
  if (!initializer.WithdrawSucess) {
    try {
      const accessToken = window.localStorage.getItem('adminAccessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      const response = await axios.get(`${baseUrl}/withdrawRequest`, {
        headers
      });
      console.log(response.data);
      Withdraw = response.data;
      initializer.WithdrawSucess = true;
    } catch (error) {
      console.log(error);
      initializer.WithdrawSucess = false;
      Withdraw = error;
    }
  }
  return Withdraw;
}
