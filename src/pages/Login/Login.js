import React, {useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Login() {

     const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Aquí puedes hacer la llamada a la API para iniciar sesión
            console.log('TT',values);
        },
    });

    useEffect(() => {
        if(formik.touched.usuario && formik.errors.usuario) {
            toast.error('El campo Usuario es obligatorio');
        }
        if(formik.touched.contrasena && formik.errors.contrasena) {
            toast.error('El campo Contraseña es obligatorio');
        }
    }, [formik.touched, formik.errors]);

    return (
        <div>
            <div className="login-container">
                <div className="login-box">
                    <div className="left-section">
                        <h1 className="fw-bold">NUTRIBYTES</h1>
                    </div>
                    <div className="right-section">
                        <form className="px-4 py-5 login-form" onSubmit={formik.handleSubmit}>
                            <h2 className="text-center font-weight-bold mb-4 fw-bolder">Login</h2>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="usuario"
                                    className="form-control"
                                    placeholder="Usuario"
                                    value={formik.values.usuario}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="contrasena"
                                    className="form-control mt-2"
                                    placeholder="Contraseña"
                                    value={formik.values.contrasena}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                            </div>
                            <button type="submit" className="btn btn-block boton-inicio mt-3">
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>
                <p className="footer-text">
                    Nutribytes. Todos los derechos reservados 2023
                </p>
            </div>
        </div>
    )
}

function initialValues() {
    return {
        usuario:"",
        contrasena:"",
    }
}

const validationSchema = Yup.object({
    usuario: Yup.string()
        .required('El campo Usuario es obligatorio'),
    contrasena: Yup.string()
        .required('El campo Contraseña es obligatorio'),
});
