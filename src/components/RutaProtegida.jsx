import { Navigate } from 'react-router-dom';

export default function RutaProtegida({ children }) {
  // Verificamos si los datos del usuario existen en el localStorage
  const usuario = localStorage.getItem('registraIpUsuario');

  // Si no hay usuario registrado, lo mandamos de regreso al inicio (registro)
  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  // Si sí hay sesión, mostramos la página protegida
  return children;
}