import { useState } from "react";
import { Vivero } from "../../domain/entities/Vivero";
import { ViveroRepository } from "../../data/repository/ViveroRepository";
import { CreateViveroUseCase } from "../../domain/usecases/CreateViveroUseCase";
import { DeleteViveroUseCase } from "../../domain/usecases/DeleteViveroUseCase";
import { ViewViverosUseCase } from "../../domain/usecases/ViewViverosUseCase";
import { UpdateViveroUseCase } from "../../domain/usecases/UpdateViveroUseCase";

const repository = new ViveroRepository();
const createUseCase = new CreateViveroUseCase(repository);
const deleteUseCase = new DeleteViveroUseCase(repository);
const viewUseCase = new ViewViverosUseCase(repository);
const updateUseCase = new UpdateViveroUseCase(repository);

export const useViveroViewModel = () => {
  const [viveros, setViveros] = useState<Vivero[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchViveros = async () => {
    try {
      setLoading(true);
      const data = await viewUseCase.execute();
      setViveros(data);
    } catch (error) {
      console.error("Error al cargar los viveros:", error);
    } finally {
      setLoading(false);
    }
  };

  const createVivero = async (vivero: Omit<Vivero, "id">) => {
    try {
      setLoading(true);
      await createUseCase.execute(vivero);
      setViveros((prevViveros) => [...prevViveros, { ...vivero, id: Date.now() }]);
    } catch (error) {
      console.error("Error al crear vivero:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteVivero = async (id: number) => {
    try {
      setLoading(true);
      await deleteUseCase.execute(id);
      setViveros((prevViveros) => prevViveros.filter((v) => v.id !== id));
    } catch (error) {
      console.error("Error al eliminar vivero:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateVivero = async (id: number, vivero: Omit<Vivero, "id">) => {
    try {
      setLoading(true);
      await updateUseCase.execute({ id, ...vivero });
      await fetchViveros();
    } catch (error) {
      console.error("Error al actualizar vivero:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    viveros,
    loading,
    fetchViveros,
    createVivero,
    deleteVivero,
    updateVivero
  };
};
