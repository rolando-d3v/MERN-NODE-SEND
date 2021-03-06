import { useReducer } from "react";
import { authReducer } from "./authReducer";
import authContext from "./authContext";
import clienteAxios from "../../config/clienteAxios";
import { LOGIN_TOKEN, USUARIO_AUTENTICADO, CERRAR_SESION } from "./types";
import { useViewAlert } from "../../hooks/useAlert";
import tokenAuth from "../../config/tokenAuth";

const AuthStates = (props) => {
  //EL SATATE INICIAL
  const initialState = {
    token: typeof window !== "undefined" ? localStorage.getItem("token_x") : "", // es difernte pork es en next corre en node y web
    autenticado: null,
    usuario: null,
    message: null,
  };

  // DEFINIR EL REDUCER
  const [state, dispath] = useReducer(authReducer, initialState);

  //*_registrar nuevo usuario
  const registrarUsuario = async (datos) => {
    try {
      const result = await clienteAxios.post("/usuario", datos);
      if (result) {
        useViewAlert(result.data.message, "success");
      }
    } catch (error) {
      useViewAlert(error.response.data.message, "error");
    }
  };

  //---autenticar usuarios
  const iniciarSesion = async (datos) => {
    try {
      const result = await clienteAxios.post("/login", datos);
      // if (result) {
      useViewAlert(result.data.message, "success");
      dispath({
        type: LOGIN_TOKEN,
        payload: result.data.token,
      });
      // }
    } catch (err) {
      if (err.response) {
        useViewAlert(err.response.data.message, "error");
      }
    }
  };

  //-- autenticar si existe el usuario
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token_x");
    if (token) {
      // tokenAuth obtiene token con axios del Auth
      tokenAuth(token);
      try {
        const result = await clienteAxios.get("/login");
        if (result.data.usuario) {
          dispath({
            type: USUARIO_AUTENTICADO,
            payload: result.data.usuario,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  //CERRAR SE SION
  const cerrarSesion = () => {
    dispath({
      type: CERRAR_SESION,
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        message: state.message,
        registrarUsuario,
        iniciarSesion,
        cerrarSesion,
        usuarioAutenticado,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthStates;
