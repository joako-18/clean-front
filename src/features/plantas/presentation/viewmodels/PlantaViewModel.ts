import { useEffect, useState } from "react";
import { Planta } from "../../domain/entities/Planta";
import { PlantaRepository } from "../../data/repository/PlantaRepository";
import { CreatePlantaUseCase } from "../../domain/usecases/CreatePlantaUseCase";
import { DeletePlantaUseCase } from "../../domain/usecases/DeletePlantaUseCase";
import { ViewPlantasUseCase } from "../../domain/usecases/ViewPlantasUseCase";
import { UpdatePlantaUseCase } from "../../domain/usecases/UpdatePlantaUseCase";

const repository = new PlantaRepository();
const createUseCase = new CreatePlantaUseCase(repository);
const deleteUseCase = new DeletePlantaUseCase(repository);
const viewUseCase = new ViewPlantasUseCase(repository);
const updateUseCase = new UpdatePlantaUseCase(repository);

export const usePlantaViewModel = () => {
  const [plantas, setPlantas] = useState<Planta[]>([]);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [plantaToEdit, setPlantaToEdit] = useState<Planta | null>(null);

  const fetchPlantas = async () => {
    try {
      const data = await viewUseCase.execute();
      setPlantas(data);
    } catch (error) {
      console.error("Error al obtener plantas:", error);
    }
  };

  const createPlanta = async (planta: Omit<Planta, "id">) => {
    try {
      setIsUpdating(true);
      await createUseCase.execute(planta);
      await fetchPlantas();
    } catch (error) {
      console.error("Error al crear planta:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const deletePlanta = async (id: number) => {
    try {
      setIsUpdating(true);
      await deleteUseCase.execute(id);
      await fetchPlantas();
    } catch (error) {
      console.error("Error al eliminar planta:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const updatePlanta = async (id: number, data: Omit<Planta, "id">) => {
    try {
      setIsUpdating(true);
      await updateUseCase.execute({ id, ...data });
      await fetchPlantas();
    } catch (error) {
      console.error("Error al actualizar planta:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const selectPlantaToEdit = (planta: Planta) => {
    setPlantaToEdit(planta);
  };

  useEffect(() => {
    fetchPlantas();
  }, []);

  return {
    plantas,
    isUpdating,
    plantaToEdit,
    fetchPlantas,
    createPlanta,
    deletePlanta,
    updatePlanta,
    selectPlantaToEdit,
  };
};
