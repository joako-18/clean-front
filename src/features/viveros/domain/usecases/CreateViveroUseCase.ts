import { Vivero } from "../entities/Vivero";
import { ViveroRepository } from "../../data/repository/ViveroRepository";

export class CreateViveroUseCase {
  constructor(private repository: ViveroRepository) {}

  async execute(vivero: Omit<Vivero, "id">): Promise<Vivero> {
    return this.repository.create(vivero);
  }
}
