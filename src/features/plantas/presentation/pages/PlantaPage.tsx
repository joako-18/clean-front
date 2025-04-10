import { usePlantaViewModel } from "../viewmodels/PlantaViewModel";
import { PlantaForm } from "../components/PlantaForm";
import { PlantaList } from "../components/PlantaList";

export const PlantaPage = () => {
  const {
    plantas,
    isUpdating,
    createPlanta,
    deletePlanta,
    updatePlanta,
  } = usePlantaViewModel();

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Gestión de Plantas</h1>
      <PlantaForm onCreate={createPlanta} />
      <PlantaList
        plantas={plantas}
        onDelete={deletePlanta}
        onUpdate={updatePlanta}
        isLoading={isUpdating}
      />
    </div>
  );
};
