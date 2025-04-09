import { PlantaRepository } from "../../data/repository/PlantaRepository";
import { Planta } from "../entities/Planta";

export class ViewPlantasUseCase {
  constructor(private repository: PlantaRepository) {}

  async execute(): Promise<Planta[]> {
    return this.repository.getAll();
  }
}
