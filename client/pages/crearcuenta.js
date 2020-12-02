// import { useContext } from "react";
// import AuthContext from "../Context/auth/authContext";

import useAuth from '../hooks/useAuth'
import LayoutBase from "../components/layout/LayoutBase";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdEmail } from "react-icons/md";
import * as FaIcons from "react-icons/fa";

export default function CrearCuenta() {

  // const { registrarUsuario } = useContext(AuthContext);

  const {registrarUsuario} = useAuth()


  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string(),
      email: Yup.string().required("campo obligatorio").email("email invalido"),
      password: Yup.string()
        .required("password obligatorio")
        .min(6, "minimo 6 caracteres"),
    }),
    onSubmit: (formData) => {
      registrarUsuario(formData)
    },
  });

  const errorFormik = (err, touch) => {
    if (err && touch) {
      return (
        <div className="text-red-600 font-semibold absolute right-0 mr-12 ">
          {err}
        </div>
      );
    }
  };

  return (
    <LayoutBase>
      <div className="bg-white w-11/12  lg:w-7/12 mx-auto p-2 rounded-lg">
        <h3 className="text-4xl font-semibold text-center ">Crear cuenta</h3>
        <form className="py-4 px-2 lg:px-8" onSubmit={formik.handleSubmit}>
          <section className="relative flex items-center my-6 ">
            <label
              className="absolute font-semibold bottom-10 ml-2 "
              htmlFor="nombre"
            >
              Nombre
            </label>
            <input
              className="input_x border border-red-500  hover:bg-red-50  leading-tight"
              placeholder="Nombre"
              id="nombre"
              type="text"
              name="nombre"
              onChange={formik.handleChange}
              value={formik.values.nombre}
            />
            <FaIcons.FaUserAlt className="h-5 w-5 fill-current absolute  right-0 mx-4 text-red-400" />
          </section>

          <section className="relative flex items-center my-8   ">
            <label
              className="absolute font-semibold bottom-10 ml-2 "
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="input_x border border-red-500  hover:bg-red-50 leading-tight"
              placeholder="ingresa Email"
              id="email"
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {errorFormik(formik.errors.email, formik.touched.email)}
            <MdEmail className="h-5 w-5 fill-current  absolute  right-0 mx-4 text-red-400" />
          </section>

          <section className="relative flex items-center my-6 ">
            <label
              className="absolute font-semibold bottom-10 ml-2 "
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="input_x border border-red-500  hover:bg-red-50  leading-tight"
              placeholder="ingresa Password"
              id="password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {errorFormik(formik.errors.password, formik.touched.password)}
            <FaIcons.FaUserLock className="h-5 w-5 fill-current  absolute  right-0 mx-4 text-red-400" />
          </section>

          <div className="flex justify-center mt-2">
            <button
              className="py-2 px4 w-9/12 md:w-2/5 font-semibold text-white bg-azul-800 rounded-2xl  hover:bg-blue-900 focus:outline-none "
              type="submit"
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </LayoutBase>
  );
}
