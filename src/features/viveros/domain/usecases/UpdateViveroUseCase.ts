import { Vivero } from "../entities/Vivero";
import { ViveroRepository } from "../../data/repository/ViveroRepository";
import { ViveroDTO } from "../../data/models/ViveroDTO";

export class UpdateViveroUseCase {
  constructor(private repository: ViveroRepository) {}

  async execute(vivero: Vivero): Promise<ViveroDTO> {
    const { id, ...rest } = vivero;
    return this.repository.update(id, rest);
  }
}
