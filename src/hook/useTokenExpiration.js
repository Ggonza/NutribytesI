import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

export const useTokenExpiration = () => {
  const [isTokenExpired, setIsTokenExpired] = useState(false);

  useEffect(() => {
    const verificarExpiracionToken = () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setIsTokenExpired(true);
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp && decodedToken.exp < currentTime) {
          setIsTokenExpired(true);
        } else {
          setIsTokenExpired(false);
        }
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        setIsTokenExpired(true);
      }
    };

    verificarExpiracionToken();
  }, []);

  return isTokenExpired;
};
