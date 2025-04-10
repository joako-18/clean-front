import React, { useEffect, useState } from "react";
import { PlantaForm } from "../components/PlantaForm";
import { PlantaList } from "../components/PlantaList";
import { Planta } from "../../domain/entities/Planta";
import { usePlantaViewModel } from "../viewmodels/PlantaViewModel";

export const PlantaPage: React.FC = () => {
  const [selectedPlanta, setSelectedPlanta] = useState<Planta | null>(null);

  const {
    plantas,
    fetchPlantas,
    createPlanta,
    updatePlanta,
    deletePlanta,
    isUpdating,
  } = usePlantaViewModel();

  useEffect(() => {
    fetchPlantas();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestión de Plantas</h1>

      <PlantaForm
        selectedPlanta={selectedPlanta}
        onClear={() => setSelectedPlanta(null)}
        onCreate={createPlanta}
        onUpdate={updatePlanta}
        loading={isUpdating}
      />

      <PlantaList
        plantas={plantas}
        onSelect={setSelectedPlanta}
        onDelete={deletePlanta}
      />
    </div>
  );
};
