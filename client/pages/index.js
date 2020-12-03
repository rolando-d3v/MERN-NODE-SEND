import { useEffect } from "react";
import LayoutBase from "../components/layout/LayoutBase";
import useAuth from '../hooks/useAuth'
// import { useRouter } from "next/router";


export default function Index() {
  // const router = useRouter();


  const {usuarioAutenticado, autenticado} = useAuth()

  //EXTRAER SI EL USUARIO ESTA AUTENTICADO Y SET EN EL  LOCALSTORAGE
  useEffect(() => {
    usuarioAutenticado()
  }, [])


   
  // useEffect(() => {
  //   if (!autenticado) {
  //     router.push("login");
  //   }
  // }, [autenticado]);


  return (
    <LayoutBase>
      <div className="" >
        <h1>index</h1>
        <h1>index</h1>
        <h1>index</h1>
        <h1>index</h1>
      </div>
    </LayoutBase>
  );
}
