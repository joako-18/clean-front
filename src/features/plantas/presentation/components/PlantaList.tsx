import React, { useEffect } from "react";
import { usePlantaViewModel } from "../viewmodels/PlantaViewModel";
import { PlantaItem } from "./PlantaItem";
import { Planta } from "../../domain/entities/Planta";

type Props = {
  onEdit: (planta: Planta) => void;
};

export const PlantaList: React.FC<Props> = ({ onEdit }) => {
  const { plantas, fetchPlantas } = usePlantaViewModel();

  useEffect(() => {
    fetchPlantas();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Lista de Plantas</h2>
      <ul className="space-y-2">
        {plantas.map((p) => (
          <PlantaItem key={p.id} planta={p} onEdit={onEdit} />
        ))}
      </ul>
    </div>
  );
};
