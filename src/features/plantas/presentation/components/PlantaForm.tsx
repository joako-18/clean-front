import React, { useEffect, useState } from "react";
import { usePlantaViewModel } from "../viewmodels/PlantaViewModel";
import { Planta } from "../../domain/entities/Planta";

type Props = {
  selectedPlanta: Planta | null;
  onClear: () => void;
};

export const PlantaForm: React.FC<Props> = ({ selectedPlanta, onClear }) => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [riego, setRiego] = useState("");

  const { createPlanta, updatePlanta } = usePlantaViewModel();

  useEffect(() => {
    if (selectedPlanta) {
      setNombre(selectedPlanta.nombre);
      setTipo(selectedPlanta.tipo);
      setRiego(selectedPlanta.riego.toString());
    } else {
      setNombre("");
      setTipo("");
      setRiego("");
    }
  }, [selectedPlanta]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const plantaData = {
      nombre,
      tipo,
      riego: Number(riego),
    };

    if (selectedPlanta) {
      await updatePlanta({ id: selectedPlanta.id, ...plantaData });
      onClear();
    } else {
      await createPlanta(plantaData);
    }

    setNombre("");
    setTipo("");
    setRiego("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-x-2">
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
        required
        className="border p-2"
      />
      <input
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        placeholder="Tipo"
        required
        className="border p-2"
      />
      <input
        type="number"
        value={riego}
        onChange={(e) => setRiego(e.target.value)}
        placeholder="Riego"
        required
        className="border p-2"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        {selectedPlanta ? "Actualizar" : "Agregar"}
      </button>
      {selectedPlanta && (
        <button type="button" onClick={onClear} className="bg-gray-400 text-white px-4 py-2 rounded">
          Cancelar
        </button>
      )}
    </form>
  );
};
