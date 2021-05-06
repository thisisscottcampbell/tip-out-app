import * as Types from "../constants/actionTypes";

export const setEmail = (email) => ({
  type: Types.SET_EMAIL,
  payload: { email },
});
export const setPassword = (password) => ({
  type: Types.SET_PASSWORD,
  payload: { password },
});
