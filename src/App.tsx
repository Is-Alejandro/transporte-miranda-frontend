// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ReservaProvider } from "./context/ReservaContext"; // ✅ Proveedor global del contexto

/**
 * 🌎 App
 * - Define la estructura principal de la app.
 * - Envuelve todo con `ReservaProvider` para que el contexto global esté disponible.
 * - Usa `BrowserRouter` para manejar las rutas.
 */
function App() {
  return (
    <ReservaProvider>
      {/* ✅ El contexto permite compartir la reserva entre componentes */}
      <BrowserRouter>
        {/* 📄 Todas las rutas están separadas en AppRoutes */}
        <AppRoutes />
      </BrowserRouter>
    </ReservaProvider>
  );
}

export default App;
