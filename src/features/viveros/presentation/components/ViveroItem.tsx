import React from "react";
import { Vivero } from "../../domain/entities/Vivero";
import { useViveroViewModel } from "../viewmodels/ViveroViewModel";

type Props = {
  vivero: Vivero;
  onSelect: (vivero: Vivero) => void;
};

export const ViveroItem: React.FC<Props> = ({ vivero, onSelect }) => {
  const { deleteVivero } = useViveroViewModel();

  return (
    <li
      className="border p-4 rounded flex justify-between items-center cursor-pointer hover:bg-gray-100"
      onClick={() => onSelect(vivero)}
    >
      <span>{vivero.nombre}, {vivero.descripcion}, {vivero.ubicacion}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteVivero(vivero.id);
        }}
        className="text-red-500 hover:underline"
      >
        Eliminar
      </button>
    </li>
  );
};
