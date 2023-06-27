import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from 'axios';
// ----------------------------------------------------------------------

let stakingHistory = [];
let activeUsers = [];
let inactiveUsers = [];
let blockedUsers = [];
const initializer = {
  ActiveUsersSucess: false,
  userBlockedSuccess: false,
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

const baseUrl = process.env.PORT || 'http://15.206.66.148:8080/api/admin';

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
