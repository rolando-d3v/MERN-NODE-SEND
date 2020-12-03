import { LOGIN_TOKEN } from "./types";

export const authReducer = (state, action) => {
  switch (action.type) {
      
    case LOGIN_TOKEN:
        localStorage.setItem('token_x', action.payload )
      return {
          ...state,
          token: action.payload,
          autenticado: true
      };

    default:
      return state;
  }
};
