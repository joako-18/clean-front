import { PlantaRepository } from "../../data/repository/PlantaRepository";

export class DeletePlantaUseCase {
  constructor(private repository: PlantaRepository) {}

  async execute(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
