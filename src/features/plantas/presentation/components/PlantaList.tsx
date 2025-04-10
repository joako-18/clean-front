import React from "react";
import { Planta } from "../../domain/entities/Planta";

interface Props {
  plantas: Planta[];
  onSelect: (planta: Planta) => void;
  onDelete: (id: number) => void;
}

export const PlantaList: React.FC<Props> = ({ plantas, onSelect, onDelete }) => {
  if (!plantas || plantas.length === 0) {
    return <p className="text-gray-500 italic mt-4">Aún no hay plantas registradas.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Lista de Plantas</h2>
      <ul className="space-y-4">
        {plantas.map((planta) => (
          <li key={planta.id} className="border p-4 rounded shadow">
            <h3 className="font-bold">{planta.nombre}</h3>
            <p>{planta.tipo}</p>
            <p className="text-sm text-gray-600">
              Frecuencia de riego: {planta.riego}
            </p>
            <div className="flex gap-2 mt-2">
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded"
                onClick={() => onSelect(planta)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => onDelete(planta.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
