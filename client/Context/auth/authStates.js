import { useReducer } from "react";
import AuthContext from "./authContext";
import { authReducer } from "./authReducer";
import clienteAxios from "../../config/clienteAxios";
import { USUARIO_AUTENTICADO } from "./types";

const AuthStates = (props) => {
  //DEFINIR EL SATATE INICIAL
  const initialState = {
    token: "rolando R",
    autenticado: null,
    usuario: null,
    message: null,
  };

  // DEFINIR EL REDUCER
  const [state, dispath] = useReducer(authReducer, initialState);


  //registrar nuevo usuario
  const registrarUsuario = async (datos) => {
    try {
      const result = await clienteAxios.post("/usuario", datos);
    //   console.log("desde registro");
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };

  const usuarioAuthorization = (nombre) => {
    dispath({
      type: USUARIO_AUTENTICADO,
      payload: nombre,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        message: state.message,
        usuarioAuthorization,
        registrarUsuario,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthStates;
