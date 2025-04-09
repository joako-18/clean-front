import { ViveroRepository } from "../../data/repository/ViveroRepository";

export class DeleteViveroUseCase {
  constructor(private repository: ViveroRepository) {}

  async execute(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}
