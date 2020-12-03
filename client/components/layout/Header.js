import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Link from "next/link";

export default function Header() {
  const { usuario, usuarioAutenticado, cerrarSesion } = useAuth();

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  // console.log(usuario);

  return (
    <div className="flex flex-col md:flex-row items-center py-4 justify-between">
      <Link href="/">
        <img src="assets/logo.svg" alt="logo" />
      </Link>

      {usuario ? (
        <div>
          <h3>hola Rolando {usuario.nombre} </h3>
          <button
            className="btn text-white  bg-azul-800"
            onClick={()=> cerrarSesion() }
          >
          
            cerrarSesion{" "}
          </button>
        </div>
      ) : (
        <section className="space-x-3">
          <Link href="/login">
            <a className="btn text-white  bg-red-400 ">Iniciar Sesion</a>
          </Link>
          <Link href="/crearcuenta">
            <a className="btn text-white  bg-azul-800 ">Crear Cuenta</a>
          </Link>
        </section>
      )}
    </div>
  );
}
