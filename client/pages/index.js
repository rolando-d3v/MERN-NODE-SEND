import { useEffect } from "react";
import LayoutBase from "../components/layout/LayoutBase";
import useAuth from '../hooks/useAuth'

export default function Index() {

  const {usuarioAutenticado} = useAuth()

  //EXTRAER SI EL USUARIO ESTA AUTENTICADO Y SET EN EL  LOCALSTORAGE
  useEffect(() => {
    usuarioAutenticado()
  }, [])


  return (
    <LayoutBase>
      <div className="" >
        <h1>index</h1>
      </div>
    </LayoutBase>
  );
}
