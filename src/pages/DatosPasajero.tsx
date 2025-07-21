/**
 * DatosPasajero.tsx
 *
 * 📄 Página donde el usuario ingresa los datos del pasajero.
 * 🔥 Modular, con validación y lista para integrarse al backend.
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReserva } from "../context/ReservaContext";

interface FormularioPasajero {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  dni: string;
  genero: string;
  fechaNacimiento: string;
  email: string;
  telefono: string;
}

const DatosPasajero = () => {
  const { datosReserva } = useReserva();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormularioPasajero>({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    dni: "",
    genero: "",
    fechaNacimiento: "",
    email: "",
    telefono: "",
  });

  const [loading, setLoading] = useState(false);

  if (!datosReserva) {
    return (
      <div className="text-center text-red-600 font-bold mt-10">
        ❌ No hay datos de reserva seleccionados. Por favor vuelve a elegir un asiento.
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🛡 Validación básica
    if (
      !formData.nombre ||
      !formData.apellidoPaterno ||
      !formData.dni ||
      !formData.genero ||
      !formData.fechaNacimiento ||
      !formData.email
    ) {
      alert("⚠️ Por favor completa todos los campos obligatorios.");
      return;
    }

    // 🌐 Simular envío de datos al backend
    setLoading(true);
    setTimeout(() => {
      console.log("✅ Datos enviados correctamente:", formData);
      alert("✅ Datos del pasajero registrados correctamente (modo demo).");

      // 👉 Redirigir a la página de pago (simulado)
      navigate("/pago");
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg mt-6">
      <h1 className="text-2xl font-bold text-primary mb-4">Datos del pasajero</h1>

      {/* Resumen del asiento reservado */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-700">
          <strong>Viaje:</strong> {datosReserva.origen} → {datosReserva.destino}
        </p>
        <p className="text-gray-700">
          <strong>Empresa:</strong> {datosReserva.empresa}
        </p>
        <p className="text-gray-700">
          <strong>Asiento:</strong> {datosReserva.numeroAsiento}
        </p>
        <p className="text-gray-700">
          <strong>Precio:</strong> S/ {datosReserva.precio}
        </p>
      </div>

      {/* Formulario */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Nombre */}
        <div>
          <label className="block font-medium">Nombre *</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Apellidos */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Apellido paterno *</label>
            <input
              type="text"
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Apellido materno *</label>
            <input
              type="text"
              name="apellidoMaterno"
              value={formData.apellidoMaterno}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        {/* DNI */}
        <div>
          <label className="block font-medium">DNI *</label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Género */}
        <div>
          <label className="block font-medium">Género *</label>
          <select
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Selecciona...</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </div>

        {/* Fecha de nacimiento */}
        <div>
          <label className="block font-medium">Fecha de nacimiento *</label>
          <input
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Correo electrónico *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block font-medium">Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          className={`w-full py-2 rounded text-white font-semibold ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary-dark"
          }`}
          disabled={loading}
        >
          {loading ? "Guardando..." : "Continuar"}
        </button>
      </form>
    </div>
  );
};

export default DatosPasajero;
