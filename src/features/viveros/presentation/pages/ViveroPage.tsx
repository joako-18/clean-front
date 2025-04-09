import React, { useState } from "react";
import { ViveroForm } from "../components/ViveroForm";
import { ViveroList } from "../components/ViveroList";
import { Vivero } from "../../domain/entities/Vivero";

export const ViveroPage: React.FC = () => {
  const [selectedVivero, setSelectedVivero] = useState<Vivero | null>(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestión de Viveros</h1>
      <ViveroForm selectedVivero={selectedVivero} onClear={() => setSelectedVivero(null)} />
      <ViveroList onSelect={setSelectedVivero} />
    </div>
  );
};
