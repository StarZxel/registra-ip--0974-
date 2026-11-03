import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import RutaProtegida from './components/RutaProtegida';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Ruta pública para el registro */}
          <Route path="/" element={<Registro />} />
          
          {/* Ruta protegida para el dashboard */}
          <Route 
            path="/dashboard" 
            element={
              <RutaProtegida>
                <Dashboard />
              </RutaProtegida>
            } 
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}