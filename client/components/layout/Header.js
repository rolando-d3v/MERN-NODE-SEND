import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center py-4 justify-between">
      <Link href="/">
        <img src="assets/logo.svg" alt="logo" />
      </Link>
      <section className='space-x-3' >
        <Link href="/login">
          <a className="btn text-white  bg-red-400 ">Iniciar Sesion</a>
        </Link>
        <Link href="/crearcuenta">
          <a className="btn text-white  bg-azul-800 ">Crear Cuenta</a>
        </Link>
      </section>
    </div>
  );
}
