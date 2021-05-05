import * as Types from "../constants/actionTypes";

export const login = (user) => ({ type: Types.LOGIN, payload: { user } });
