import { useEffect, useContext } from "react";
import LayoutBase from "../components/layout/LayoutBase";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as FaIcons from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import authContext from '../Context/auth/authContext'

export default function Login() {
  const {iniciarSesion, autenticado} = useContext(authContext)
  const router = useRouter();

  //escucha los cambios de autenticafo de null a true
  useEffect(() => {
    if (autenticado) {
      router.push("/");
    }
  }, [autenticado]);


  //FORMULARIO FORMIK
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string(),
      email: Yup.string().required("campo obligatorio").email("email invalido"),
      password: Yup.string().required("password obligatorio"),
    }),
    onSubmit: (formData) => {
      iniciarSesion(formData);
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
        <h3 className="text-4xl font-semibold text-center ">Iniciar Sesion</h3>
        <form className="py-4 px-2 lg:px-8" onSubmit={formik.handleSubmit}>
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
              Iniciar Sesion
            </button>
          </div>
        </form>
      </div>
    </LayoutBase>
  );
}
