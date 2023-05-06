import React, {useState, useEffect} from 'react';

const Profesor = ({history}) => {
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        const obtenerInfoUsuario = async () => {
            const token = localStorage.getItem('access_token');
            if (!token) {
                history.push('/');
                return;
            }

            try {
                const response = await fetch("http://localhost:8000/usuarios/me", {
                    mode: 'CORS',
                    headers: {"Authorization": `Bearer ${token}`},
                });

                if (response.ok) {
                    const data = await response.json();
                    setNombre(data.Nombre);
                } else {
                    console.error("Error al obtener información del usuario");
                    console.log("Estado de la respuesta:", response.status);
                    console.log("Mensaje de error de la API:", await response.text());
                }
            } catch (error) {
                console.error("Error al obtener información del usuario:", error);
            }
        };

        obtenerInfoUsuario();
    }, [history]);

    // El resto del componente Profesor
    const cerrarSesion = () => {
        // Elimina el token de acceso y el nombre de usuario de localStorage
        // y redirige al usuario a la página de inicio de sesión
        localStorage.removeItem('access_token');
        localStorage.removeItem('username');
        history.push('/');
    };

    return (
        <div>
            <h1>Bienvenido, {nombre}!</h1>
            <p>Esta es la página del profesor.</p>
            <button onClick={cerrarSesion}>Cerrar sesión</button>
        </div>
    );
};

export default Profesor;
