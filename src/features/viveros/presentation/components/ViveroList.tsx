import React, { useEffect } from "react";
import { useViveroViewModel } from "../viewmodels/ViveroViewModel";
import { ViveroItem } from "./ViveroItem";
import { Vivero } from "../../domain/entities/Vivero";

type Props = {
  onSelect: (vivero: Vivero) => void;
};

export const ViveroList: React.FC<Props> = ({ onSelect }) => {
  const { viveros, fetchViveros } = useViveroViewModel();

  useEffect(() => {
    fetchViveros();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Lista de Viveros</h2>
      <ul className="space-y-2">
        {viveros.map((v) => (
          <ViveroItem key={v.id} vivero={v} onSelect={onSelect} />
        ))}
      </ul>
    </div>
  );
};
