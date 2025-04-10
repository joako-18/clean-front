import React, { useEffect, useState } from "react";
import { ViveroForm } from "../components/ViveroForm";
import { ViveroList } from "../components/ViveroList";
import { Vivero } from "../../domain/entities/Vivero";
import { useViveroViewModel } from "../viewmodels/ViveroViewModel";

export const ViveroPage: React.FC = () => {
  const [selectedVivero, setSelectedVivero] = useState<Vivero | null>(null);

  const {
    viveros,
    fetchViveros,
    createVivero,
    updateVivero,
    deleteVivero,
    loading
  } = useViveroViewModel();

  useEffect(() => {
    fetchViveros();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestión de Viveros</h1>
      
      <ViveroForm
        selectedVivero={selectedVivero}
        onClear={() => setSelectedVivero(null)}
        onCreate={createVivero}
        onUpdate={updateVivero}
        loading={loading}
      />

      <ViveroList
        viveros={viveros}
        onSelect={setSelectedVivero}
        onDelete={deleteVivero}
      />
    </div>
  );
};
