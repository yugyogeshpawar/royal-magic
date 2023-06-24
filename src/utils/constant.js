const BASE_URL = 'http://13.200.50.205:3010/api';

export const API_ROUTES = {
  GET_ACTIVE_USER: BASE_URL + '/admin/activeUser',
  BLOCKER_USER: BASE_URL + '/admin/blockedUser',
  SUMMARY: BASE_URL + '/investment/summary',

  WITHDRAW_REQUEST: BASE_URL + '/withdraw/withdrawRequest',
  WITHDRAW_SUMMARY: BASE_URL + '/withdraw/withdrawSummary'
};
