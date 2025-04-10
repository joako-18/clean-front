import { Planta } from "../../domain/entities/Planta";
import { PlantaItem } from "./PlantaItem";

interface Props {
  plantas: Planta[] | null | undefined;
  onDelete: (id: number) => void;
  onUpdate: (id: number, data: Omit<Planta, "id">) => void;
  isLoading: boolean;
}

export const PlantaList = ({ plantas, onDelete, onUpdate, isLoading }: Props) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Lista de Plantas</h2>

      {isLoading ? (
        <p className="text-blue-500">Cargando plantas...</p>
      ) : !plantas || plantas.length === 0 ? (
        <p className="text-gray-500 italic">Aún no hay plantas registradas.</p>
      ) : (
        <ul className="space-y-4">
          {plantas.map((planta) => (
            <PlantaItem
              key={planta.id}
              planta={planta}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
