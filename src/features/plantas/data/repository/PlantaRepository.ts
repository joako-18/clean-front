import { Planta } from "../models/Planta";

export class PlantaRepository {
  private apiUrl = "http://localhost:8080/plantas";

  async getAll(): Promise<Planta[]> {
    const res = await fetch(this.apiUrl);
    return res.json();
  }

  async create(planta: Omit<Planta, "id">): Promise<void> {
    await fetch(this.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(planta),
    });
  }

  async update(planta: Planta): Promise<void> {
    await fetch(this.apiUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(planta),
    });
  }
  
  

  async delete(id: number): Promise<void> {
    await fetch(`${this.apiUrl}/${id}`, { method: "DELETE" });
  }
}
