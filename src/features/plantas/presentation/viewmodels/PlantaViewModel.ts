import { useState } from "react";
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

  const fetchPlantas = async () => {
    const data = await viewUseCase.execute();
    setPlantas(data);
  };

  const createPlanta = async (planta: Omit<Planta, "id">) => {
    await createUseCase.execute(planta);
    await fetchPlantas();
  };

  const deletePlanta = async (id: number) => {
    await deleteUseCase.execute(id);
    await fetchPlantas();
  };

  const updatePlanta = async (planta: Planta) => {
    await updateUseCase.execute(planta);
    await fetchPlantas();
  };

  return {
    plantas,
    fetchPlantas,
    createPlanta,
    deletePlanta,
    updatePlanta,
  };
};
