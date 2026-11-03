import './Layout.css'; // Aquí pondremos los estilos responsivos

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      {/* Encabezado pedido por la práctica */}
      <header className="header">
        <h2>REGISTRA-IP</h2>
      </header>

      {/* Contenido dinámico (aquí aparecerán tus páginas de Registro o Dashboard) */}
      <main className="content">
        {children}
      </main>
    </div>
  );
}