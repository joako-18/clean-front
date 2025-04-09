import { Vivero } from "../entities/Vivero";
import { ViveroRepository } from "../../data/repository/ViveroRepository";

export class ViewViverosUseCase {
  constructor(private repository: ViveroRepository) {}

  async execute(): Promise<Vivero[]> {
    return this.repository.getAll();
  }
}
