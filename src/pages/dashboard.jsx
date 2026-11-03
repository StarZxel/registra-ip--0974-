import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  // Recuperamos y convertimos los datos del usuario desde el localStorage
  const usuarioGuardado = localStorage.getItem('registraIpUsuario');
  const usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;

  const handleCerrarSesion = () => {
    // Eliminamos la sesión del localStorage
    localStorage.removeItem('registraIpUsuario');
    // Redirigimos de vuelta a la página de registro
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h2>Panel de Control (Dashboard)</h2>
      
      {usuario ? (
        <div className="welcome-card" style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', background: '#fff' }}>
          <h3>¡Bienvenido, {usuario.nombre}! 👋</h3>
          <p><strong>Correo electrónico:</strong> {usuario.correo}</p>
          <p><strong>Tipo de creador:</strong> {usuario.tipoCreador}</p>
          
          <button 
            onClick={handleCerrarSesion} 
            style={{ marginTop: '15px', padding: '10px 15px', background: '#dc2626', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <p>No hay información de usuario disponible.</p>
      )}
    </div>
  );
}