// src/App.tsx
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { ReservaProvider } from "./context/ReservaContext" // ✅ importar el contexto

function App() {
  return (
    <ReservaProvider> {/* ✅ envolver todo */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ReservaProvider>
  )
}

export default App
