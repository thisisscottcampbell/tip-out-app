import * as Types from "../constants/actionTypes";

const initialState = {
  email: "",
  password: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_EMAIL:
      console.log("set email", action.payload.email);
      return {
        ...state,
        email: action.payload.email,
      };
    case Types.SET_PASSWORD:
      console.log("set password", action.payload.password);
      return {
        ...state,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default loginReducer;
