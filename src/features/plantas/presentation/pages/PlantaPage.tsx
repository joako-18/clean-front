import React, { useState } from "react";
import { PlantaForm } from "../components/PlantaForm";
import { PlantaList } from "../components/PlantaList";
import { Planta } from "../../domain/entities/Planta";

export const PlantaPage: React.FC = () => {
  const [selectedPlanta, setSelectedPlanta] = useState<Planta | null>(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestión de Plantas</h1>
      <PlantaForm selectedPlanta={selectedPlanta} onClear={() => setSelectedPlanta(null)} />
      <PlantaList onEdit={(planta) => setSelectedPlanta(planta)} />
    </div>
  );
};
