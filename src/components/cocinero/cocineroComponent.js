import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTokenExpiration} from '../../hook/useTokenExpiration';


const Profesor = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const navigate = useNavigate();
    const tokenExpired = useTokenExpiration();

    useEffect(() => {
        const obtenerInfoUsuario = async () => {
            const token = localStorage.getItem('access_token');

            if (!token || tokenExpired) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('username');
                navigate('/');
                return;
            }
            try {
                const response = await fetch("http://localhost:8000/usuarios/me", {
                    headers: {"Authorization": `Bearer ${token}`},
                });

                if (response.ok) {
                    const data = await response.json();
                    setNombre(data.Nombre);
                    setApellido(data.Apellido);
                } else {
                    console.error("Error al obtener información del usuario");
                    console.log("Estado de la respuesta:", response.status);
                    console.log("Mensaje de error de la API:", await response.text());
                }
            } catch (error) {
                console.error("Error al obtener información del usuario:", error);
            }
        };
        obtenerInfoUsuario().catch((error) => {
            console.error('Error al ejecutar obtenerInfoUsuario:', error);
        });
    }, [navigate, tokenExpired]);

    // El resto del componente Profesor
    const cerrarSesion = () => {
        // Elimina el token de acceso y el nombre de usuario de localStorage
        // y redirige al usuario a la página de inicio de sesión
        localStorage.removeItem('access_token');
        localStorage.removeItem('username');
        navigate('/');
    };

    return (
        <div>
            <h1>Bienvenido, {nombre} {apellido}!</h1>
            <p>Esta es la página del cocinero.</p>
            <button onClick={cerrarSesion}>Cerrar sesión</button>
        </div>
    );
};

export default Profesor;
