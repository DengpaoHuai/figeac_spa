import { Rando } from "../schemas/rando.schema";

export const createRando = async (rando: Omit<Rando, "_id">) => {
  const response = await fetch(
    "https://crudcrud.com/api/46d2dd8e017b46368d149e056716ef1b/rando",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rando),
    }
  );
  const data = await response.json();
  return data;
};

const deleteRando = async (id: string) => {
  const response = await fetch(
    `https://crudcrud.com/api/46d2dd8e017b46368d149e056716ef1b/rando/${id}`,
    {
      method: "DELETE",
    }
  );
  const data = await response.json();
  return data;
};
