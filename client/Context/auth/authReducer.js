import { CERRAR_SESION, LOGIN_TOKEN, USUARIO_AUTENTICADO } from "./types";

export const authReducer = (state, action) => {
  switch (action.type) {

    case LOGIN_TOKEN:
      localStorage.setItem("token_x", action.payload);
      return {
        ...state,
        token: action.payload,
        autenticado: true,
      };

    case USUARIO_AUTENTICADO:
      return {
        ...state,
        usuario: action.payload,
        // autenticado: true
      };

    case CERRAR_SESION:
      localStorage.removeItem("token_x");
      return {
        ...state,
        usuario: null,
        token: null,
        autenticado: null,
      };

    default:
      return state;
  }
};
