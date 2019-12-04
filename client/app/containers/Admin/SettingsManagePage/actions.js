/*
 *
 * SettingsManagePage actions
 *
 */

import * as types from './constants';

export const loadAllSettingsRequest = payload => ({
  type: types.LOAD_ALL_SETTINGS_REQUEST,
  payload,
});
export const loadAllSettingsSuccess = payload => ({
  type: types.LOAD_ALL_SETTINGS_SUCCESS,
  payload,
});
export const loadAllSettingsFailure = payload => ({
  type: types.LOAD_ALL_SETTINGS_FAILURE,
  payload,
});
export const setValue = payload => ({
  type: types.SET_VALUE,
  payload,
});
