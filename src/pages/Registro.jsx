import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registro() {
  // Estados para capturar los campos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [tipoCreador, setTipoCreador] = useState('Diseñador');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: campos no vacíos (Paso 7)
    if (!nombre.trim() || !correo.trim()) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    // Validación básica de formato de correo (Paso 7)
    if (!correo.includes('@') || !correo.includes('.')) {
      setError('Por favor, introduce un correo electrónico válido.');
      return;
    }

    // Si pasa las validaciones, limpiamos errores
    setError('');

    // Paso 8: Guardar los datos del creador en localStorage
    const usuarioData = { nombre, correo, tipoCreador };
    localStorage.setItem('registraIpUsuario', JSON.stringify(usuarioData));

    // Redirigir al dashboard (Paso 8)
    navigate('/dashboard');
  };

  return (
    <div className="registro-container">
      <h2>Registro de Creador</h2>
      
      <form onSubmit={handleSubmit} className="registro-form">
        <div className="form-group">
          <label>Nombre:</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre completo"
          />
        </div>

        <div className="form-group">
          <label>Correo:</label>
          <input 
            type="email" 
            value={correo} 
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div className="form-group">
          <label>Tipo de creador:</label>
          <select value={tipoCreador} onChange={(e) => setTipoCreador(e.target.value)}>
            <option value="Diseñador">Diseñador</option>
            <option value="Fotógrafo">Fotógrafo</option>
            <option value="Escritor">Escritor</option>
            <option value="Cineasta">Cineasta</option>
          </select>
        </div>

        {/* Contenedor de errores accesible requerido por la práctica (Paso 7) */}
        <div aria-live="polite" className="error-message" style={{ color: 'red', margin: '10px 0' }}>
          {error && <p>{error}</p>}
        </div>

        <button type="submit" className="btn-submit">Registrarse</button>
      </form>
    </div>
  );
}