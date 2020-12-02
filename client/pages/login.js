import LayoutBase from "../components/layout/LayoutBase";
import { useFormik } from "formik";
import Yup from "yup";
import { MdEmail } from "react-icons/md";
import * as FaIcons from "react-icons/fa";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
    },
    // validationSchema: {

    // },
    onSubmit: (formData) => {
      console.log(formData)
    },
  });

  return (
    <LayoutBase>
      <div className="bg-white w-11/12  lg:w-7/12 mx-auto p-2 rounded-lg">
        <h3 className="text-4xl font-semibold text-center ">Crear cuenta</h3>
        <form className="p-4" onSubmit={formik.handleSubmit} >
          <section className="relative flex items-center my-6 ">
            <label
              className="absolute font-semibold bottom-11 ml-2 "
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
            {/* {errorFormik(
                formik.errors.repeatemail,
                formik.touched.repeatemail
              )} */}
            <FaIcons.FaUserAlt className="h-5 w-5 fill-current absolute  right-0 mx-4 text-red-400" />
          </section>

          <section className="relative flex items-center my-8   ">
            <label
              className="absolute font-semibold bottom-11 ml-2 "
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
            {/* {errorFormik(formik.errors.email, formik.touched.email)} */}
            <MdEmail className="h-5 w-5 fill-current  absolute  right-0 mx-4 text-red-400" />
          </section>

          <section className="relative flex items-center my-6 ">
            <label
              className="absolute font-semibold bottom-11 ml-2 "
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
            {/* {errorFormik(formik.errors.email, formik.touched.email)} */}
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
