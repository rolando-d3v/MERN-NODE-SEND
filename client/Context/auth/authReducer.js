import { USUARIO_AUTENTICADO } from "./types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case USUARIO_AUTENTICADO:
      return {
        ...state,
        usuario: action.payload,
      };
    default:
      return state;
  }
};
