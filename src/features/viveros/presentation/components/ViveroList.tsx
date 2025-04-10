import { Vivero } from "../../domain/entities/Vivero";

interface Props {
  viveros: Vivero[];
  onSelect: (vivero: Vivero) => void;
  onDelete: (id: number) => void;
}

export const ViveroList = ({ viveros, onSelect, onDelete }: Props) => {
  if (!viveros || viveros.length === 0) {
    return <p className="text-gray-500 italic mt-4">Aún no hay viveros registrados.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Lista de Viveros</h2>
      <ul className="space-y-4">
        {viveros.map((vivero) => (
          <li key={vivero.id} className="border p-4 rounded shadow">
            <h3 className="font-bold">{vivero.nombre}</h3>
            <p>{vivero.descripcion}</p>
            <p className="text-sm text-gray-600">{vivero.direccion}</p>
            <div className="flex gap-2 mt-2">
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded"
                onClick={() => onSelect(vivero)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => onDelete(vivero.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
