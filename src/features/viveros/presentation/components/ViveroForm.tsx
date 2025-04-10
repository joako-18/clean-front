import React, { useEffect, useState } from "react";
import { Vivero } from "../../domain/entities/Vivero";

type Props = {
  selectedVivero: Vivero | null;
  onClear: () => void;
  onCreate: (data: Omit<Vivero, "id">) => Promise<void>;
  onUpdate: (id: number, data: Omit<Vivero, "id">) => Promise<void>;
  loading: boolean;
};

export const ViveroForm: React.FC<Props> = ({
  selectedVivero,
  onClear,
  onCreate,
  onUpdate,
  loading
}) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [direccion, setUbicacion] = useState("");

  useEffect(() => {
    if (selectedVivero) {
      setNombre(selectedVivero.nombre);
      setDescripcion(selectedVivero.descripcion);
      setUbicacion(selectedVivero.direccion);
    } else {
      setNombre("");
      setDescripcion("");
      setUbicacion("");
    }
  }, [selectedVivero]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { nombre, descripcion, direccion };
    if (selectedVivero) {
      await onUpdate(selectedVivero.id, data);
      onClear();
    } else {
      await onCreate(data);
    }
    setNombre("");
    setDescripcion("");
    setUbicacion("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del vivero"
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción del vivero"
          className="border rounded p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={direccion}
          onChange={(e) => setUbicacion(e.target.value)}
          placeholder="Ubicación del vivero"
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
          {loading ? "Guardando..." : selectedVivero ? "Actualizar" : "Agregar"}
        </button>
        {selectedVivero && (
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
