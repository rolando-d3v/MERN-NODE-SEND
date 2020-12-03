import { useReducer } from "react";
import { authReducer } from "./authReducer";
import AuthContext from "./authContext";
import clienteAxios from "../../config/clienteAxios";
import { LOGIN_TOKEN } from "./types";
import { useViewAlert } from "../../hooks/useAlert";
import tokenAuth from '../../config/tokenAuth'

const AuthStates = (props) => {
  //DEFINIR EL SATATE INICIAL
  const initialState = {
    token: typeof window !== "undefined" ? localStorage.getItem("token_x") : "",     // es difernte pork es en next corre en node y web
    autenticado: null,
    usuario: null,
    message: null,
  };

  // DEFINIR EL REDUCER
  const [state, dispath] = useReducer(authReducer, initialState);

  //--registrar nuevo usuario
  const registrarUsuario = async (datos) => {
    try {
      const result = await clienteAxios.post("/usuario", datos);
      if (result) {
        useViewAlert(result.data.message, "success");
      }
    } catch (error) {
      useViewAlert(error.response.data.message, "error");
      console.log(error.response.data);
    }
  };

  //---autenticar usuarios
  const iniciarSesion = async (datos) => {
    try {
      const result = await clienteAxios.post("/login", datos);
      if (result) {
        useViewAlert(result.data.message, "success");
        dispath({
          type: LOGIN_TOKEN,
          payload: result.data.token,
        });
      }
    } catch (err) {
      if (err.response) {
        useViewAlert(err.response.data.message, "error");
      }
    }
  };

  //-- autenticar si existe el usuario
  const usuarioAutenticado = async () => {

    const token = localStorage.getItem('token_x')
    console.log(token);
    if (token) {
        tokenAuth(token)
    }

    try {
        const result = await clienteAxios.get('/login')
        console.log(result.data);
    } catch (err) {
        console.log(err);
    }

   
    // dispath({
    //   type: USUARIO_AUTENTICADO,
    //   payload: nombre,
    // });
  };




  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        message: state.message,
        usuarioAutenticado,
        registrarUsuario,
        iniciarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthStates;
