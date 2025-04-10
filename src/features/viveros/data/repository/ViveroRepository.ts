import { ViveroDTO } from "../models/ViveroDTO";

const API_BASE_URL = "http://localhost:8080/viveros";

export class ViveroRepository {
  
  async getAll(): Promise<ViveroDTO[]> {
    const response = await fetch(API_BASE_URL);
    return await response.json();
  }

  async create(vivero: Omit<ViveroDTO, "id">): Promise<ViveroDTO> {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vivero),
    });
    return await response.json();
  }

  async update(id: number, vivero: Omit<ViveroDTO, "id">): Promise<ViveroDTO> {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vivero),
    });
    return await response.json();
  }

  async delete(id: number): Promise<void> {
    await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
  }
}
