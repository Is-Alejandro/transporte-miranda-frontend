// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ReservaProvider } from "./context/ReservaContext"; // ✅ Proveedor de reservas
import { AuthProvider } from "./context/AuthContext"; // 🛡️ Proveedor de autenticación

/**
 * 🌎 App
 * - Define la estructura principal de la app.
 * - Envuelve todo con `AuthProvider` y `ReservaProvider` para que los contextos globales estén disponibles.
 * - Usa `BrowserRouter` para manejar las rutas.
 */
function App() {
  return (
    <AuthProvider> {/* 🛡️ Autenticación disponible en toda la app */}
      <ReservaProvider> {/* 🎫 Maneja la reserva de asientos */}
        <BrowserRouter>
          {/* 📄 Todas las rutas están separadas en AppRoutes */}
          <AppRoutes />
        </BrowserRouter>
      </ReservaProvider>
    </AuthProvider>
  );
}

export default App;
