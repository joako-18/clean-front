import { PlantaRepository } from "../../data/repository/PlantaRepository";
import { Planta } from "../entities/Planta";

export class CreatePlantaUseCase {
  constructor(private repository: PlantaRepository) {}

  async execute(planta: Omit<Planta, "id">): Promise<void> {
    await this.repository.create(planta);
  }
}
