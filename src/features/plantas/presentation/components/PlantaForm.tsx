import React, { useEffect, useState } from "react";
import { Planta } from "../../domain/entities/Planta";

type Props = {
  selectedPlanta: Planta | null;
  onClear: () => void;
  onCreate: (data: Omit<Planta, "id">) => Promise<void>;
  onUpdate: (id: number, data: Omit<Planta, "id">) => Promise<void>;
  loading: boolean;
};

export const PlantaForm: React.FC<Props> = ({
  selectedPlanta,
  onClear,
  onCreate,
  onUpdate,
  loading,
}) => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [riego, setRiego] = useState<number | string>("");

  useEffect(() => {
    if (selectedPlanta) {
      setNombre(selectedPlanta.nombre);
      setTipo(selectedPlanta.tipo);
      setRiego(selectedPlanta.riego);
    } else {
      setNombre("");
      setTipo("");
      setRiego("");
    }
  }, [selectedPlanta?.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      nombre,
      tipo,
      riego: typeof riego === "string" ? parseInt(riego) : riego,
    };

    if (selectedPlanta) {
      await onUpdate(selectedPlanta.id, data);
      onClear();
    } else {
      await onCreate(data);
    }

    setNombre("");
    setTipo("");
    setRiego("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre de la planta"
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          placeholder="Tipo de planta"
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          value={riego}
          onChange={(e) => setRiego(e.target.value)}
          placeholder="Frecuencia de riego"
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Guardando..." : selectedPlanta ? "Actualizar" : "Agregar"}
        </button>
        {selectedPlanta && (
          <button
            type="button"
            onClick={onClear}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};
