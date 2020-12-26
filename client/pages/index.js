import { useEffect, useContext } from "react";
import LayoutBase from "../components/layout/LayoutBase";
import authContext from '../Context/auth/authContext'


export default function Index() {
  
  const {usuarioAutenticado} = useContext(authContext)

  //EXTRAER SI EL USUARIO ESTA AUTENTICADO Y SET EN EL  LOCALSTORAGE
  useEffect(() => {
    const token = localStorage.getItem('token_x');
    if(token) {
      usuarioAutenticado()
    }
  }, [])


   
  return (
    <LayoutBase>
      <div className="" >
        <h1>index</h1>
     
      </div>
    </LayoutBase>
  );
}
