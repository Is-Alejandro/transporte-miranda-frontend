/**
 * RutaPrivada.tsx
 *
 * 🔒 Componente que protege las rutas privadas (solo accesibles si el usuario está autenticado).
 */

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RutaPrivada = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    console.warn("🔒 Acceso denegado. Redirigiendo a login...");
    // 👉 Redirige a /login y guarda la página actual para volver luego
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ Usuario autenticado, puede ver la ruta
  return <Outlet />;
};

export default RutaPrivada;
