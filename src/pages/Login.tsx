/**
 * Login.tsx
 *
 * 📄 Página de inicio de sesión para usuarios de la app Transporte Miranda.
 */

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // 🔙 Guardamos la ruta previa a la que quería acceder
  const from = (location.state as any)?.from?.pathname || "/";

  // 🌱 Estados locales
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  /**
   * 🚀 Maneja el envío del formulario
   */
  const manejarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const success = await login(correo, password);
      if (success) {
        console.log("✅ Login exitoso");
        navigate(from, { replace: true }); // 🔙 Redirige a la ruta previa o home
      } else {
        setError("❌ Credenciales inválidas. Intenta de nuevo.");
      }
    } catch (err) {
      console.error("❌ Error en login:", err);
      setError("❌ Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-primary mb-4">Iniciar Sesión</h1>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={manejarSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Correo electrónico</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              placeholder="correo@ejemplo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              placeholder="••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white rounded py-2 font-semibold hover:bg-primary-dark disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          ¿No tienes cuenta?{" "}
          <a
            href="/register"
            className="text-primary font-medium hover:underline"
          >
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
