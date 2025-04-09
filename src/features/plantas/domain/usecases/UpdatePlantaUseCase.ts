import { PlantaRepository } from "../../data/repository/PlantaRepository";
import { Planta } from "../entities/Planta";

export class UpdatePlantaUseCase {
  constructor(private repository: PlantaRepository) {}

  async execute(planta: Planta): Promise<void> {
    await this.repository.update(planta);
  }
}
