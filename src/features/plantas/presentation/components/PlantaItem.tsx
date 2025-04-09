import React from "react";
import { usePlantaViewModel } from "../viewmodels/PlantaViewModel";
import { Planta } from "../../domain/entities/Planta";

type Props = {
  planta: Planta;
  onEdit: (planta: Planta) => void;
};

export const PlantaItem: React.FC<Props> = ({ planta, onEdit }) => {
  const { deletePlanta } = usePlantaViewModel();

  return (
    <li className="border p-4 rounded flex justify-between items-center">
      <div>
        <p><strong>{planta.nombre}</strong></p>
        <p>Tipo: {planta.tipo} | Riego: {planta.riego}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onEdit(planta)} className="text-blue-500 hover:underline">
          Editar
        </button>
        <button onClick={() => deletePlanta(planta.id)} className="text-red-500 hover:underline">
          Eliminar
        </button>
      </div>
    </li>
  );
};

