import { useState } from "react";
import { Planta } from "../../domain/entities/Planta";

interface Props {
  planta: Planta;
  onDelete: (id: number) => void;
  onUpdate: (id: number, data: Omit<Planta, "id">) => void;
}

export const PlantaItem = ({ planta, onDelete, onUpdate }: Props) => {
  const [editing, setEditing] = useState(false);
  const [nombre, setNombre] = useState(planta.nombre);
  const [tipo, setTipo] = useState(planta.tipo);
  const [riego, setRiego] = useState(planta.riego.toString());

  const handleUpdate = () => {
    const riegoNum = parseInt(riego);
    if (!nombre.trim() || !tipo.trim() || isNaN(riegoNum) || riegoNum <= 0) {
      alert("Valores inválidos");
      return;
    }

    onUpdate(planta.id, { nombre, tipo, riego: riegoNum });
    setEditing(false);
  };

  return (
    <li className="border p-4 rounded-lg shadow bg-white">
      {editing ? (
        <div className="space-y-2">
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            value={riego}
            onChange={(e) => setRiego(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Guardar
            </button>
            <button
              onClick={() => setEditing(false)}
              className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p><strong>🌱 {planta.nombre}</strong></p>
          <p>Tipo: {planta.tipo}</p>
          <p>Riego cada {planta.riego} días</p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => setEditing(true)}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(planta.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
    </li>
  );
};
