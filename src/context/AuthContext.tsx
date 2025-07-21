/**
 * AuthContext.tsx
 *
 * 🛡️ Contexto para manejar la autenticación de usuarios
 * en la app de Transporte Miranda.
 *
 * Proporciona:
 * - Estado global de autenticación
 * - Funciones login, logout y registro (simuladas)
 */

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  usuario: Usuario | null;
  login: (correo: string, password: string) => Promise<boolean>;
  logout: () => void;
  registrar: (nombre: string, correo: string, password: string) => Promise<boolean>;
}

// 🔥 Crear el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 🛡️ Proveedor del contexto
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  /**
   * 🚀 Simular login
   */
  const login = async (correo: string, password: string): Promise<boolean> => {
    console.log("🔐 Simulando login...");
    if (correo === "demo@correo.com" && password === "123456") {
      setIsAuthenticated(true);
      setUsuario({ id: 1, nombre: "Usuario Demo", correo });
      return true;
    }
    return false; // ❌ Credenciales inválidas
  };

  /**
   * 🚀 Simular logout
   */
  const logout = () => {
    console.log("🚪 Cerrando sesión...");
    setIsAuthenticated(false);
    setUsuario(null);
  };

  /**
   * 🚀 Simular registro
   */
  const registrar = async (nombre: string, correo: string, password: string): Promise<boolean> => {
    console.log("📝 Simulando registro...");
    setIsAuthenticated(true);
    setUsuario({ id: 2, nombre, correo });
    return true;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, usuario, login, logout, registrar }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * 🎯 Hook personalizado para usar el contexto
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return context;
};
