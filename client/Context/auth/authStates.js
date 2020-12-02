import { useReducer } from "react";
import AuthContext from "./authContext";
import { authReducer } from "./authReducer";
import { USUARIO_AUTENTICADO } from "./types";

const AuthStates = (props) => {
  //DEFINIR EL SATATE INICIAL
  const initialState = {
    token: "",
    autenticado: null,
    usuario: null,
    message: null,
  };

  // DEFINIR EL REDUCER
  const [state, dispath] = useReducer(authReducer, initialState);




  //registrar nuevo usuario
  const registrarUsuario = (datos) => {
    console.log('desde registro');
    console.log(datos);
    // dispath({
    //   type: USUARIO_AUTENTICADO,
    //   payload: nombre,
    // });
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
