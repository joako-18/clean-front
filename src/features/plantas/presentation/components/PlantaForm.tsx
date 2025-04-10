import { useState } from "react";
import { Planta } from "../../domain/entities/Planta";

interface Props {
  onCreate: (planta: Omit<Planta, "id">) => void;
}

export const PlantaForm = ({ onCreate }: Props) => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [riego, setRiego] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const riegoNum = parseInt(riego);

    if (!nombre.trim() || !tipo.trim() || isNaN(riegoNum) || riegoNum <= 0) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    onCreate({ nombre, tipo, riego: riegoNum });
    setNombre("");
    setTipo("");
    setRiego("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-xl shadow space-y-3">
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="border rounded w-full p-2"
      />
      <input
        type="text"
        placeholder="Tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="border rounded w-full p-2"
      />
      <input
        type="number"
        placeholder="Riego (en días)"
        value={riego}
        onChange={(e) => setRiego(e.target.value)}
        className="border rounded w-full p-2"
        min={1}
      />
      <button
        type="submit"
        className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition"
      >
        Crear Planta
      </button>
    </form>
  );
};
