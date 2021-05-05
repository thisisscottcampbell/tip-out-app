import * as Types from "../constants/actionTypes";

const initialState = {
  email: "",
  password: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      console.log("login", action.payload.user);
      return {
        ...state,
        email: action.payload.user.email,
        password: action.payload.user.password,
      };
    default:
      return state;
  }
};

export default loginReducer;
