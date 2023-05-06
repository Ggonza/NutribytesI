import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/CSS/login.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nombreRol, setNombreRol] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:8000/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=password&username=${username}&password=${password}`,
        });


        // login OK
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("access_token", data.access_token);
            // Obtener información del usuario y su rol
            const userResponse = await fetch("http://localhost:8000/usuarios/me", {
                headers: {"Authorization": `Bearer ${data.access_token}`},
            });
            if (userResponse.ok) {
                const userData = await userResponse.json();

                // Asegúrate de que estás utilizando la propiedad correcta para el rol en el objeto de usuario
                const nombreRol = userData.Nombre_rol;
                console.log(nombreRol);
                // Redirigir al usuario según su rol
                if (nombreRol === "profesor") {
                    navigate("/ruta-profesor");
                } else if (nombreRol === "cocinero") {
                    navigate("/ruta-cocinero");
                } else {
                    console.error("Rol no reconocido");
                }
            } else {
                console.error("Error al obtener información del usuario");
            }
        } else {
            alert("Error al iniciar sesión");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="left-section">
                    <h1 className="fw-bold">NUTRIBYTES</h1>
                </div>
                <div className="right-section">
                    <form onSubmit={handleSubmit} className="px-4 py-5 login-form">
                        <h2 className="text-center font-weight-bold mb-4 fw-bolder">Login</h2>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Usuario"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control mt-2"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
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
    );
};

export default Login;
