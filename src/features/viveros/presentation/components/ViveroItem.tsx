import React from "react";
import { Vivero } from "../../domain/entities/Vivero";

type Props = {
  vivero: Vivero;
  onSelect: (vivero: Vivero) => void;
  onDelete: (id: number) => void;
};

export const ViveroItem: React.FC<Props> = ({ vivero, onSelect, onDelete }) => {
  return (
    <li
      className="border p-4 rounded flex justify-between items-center cursor-pointer hover:bg-gray-100"
      onClick={() => onSelect(vivero)}
    >
      <span>
        {vivero.nombre}, {vivero.descripcion}, {vivero.direccion}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(vivero.id);
        }}
        className="text-red-500 hover:underline"
      >
        Eliminar
      </button>
    </li>
  );
};
