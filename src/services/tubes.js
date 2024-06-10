// this is for crudding the post
import api from "./apiConfig.js";

// get tube by ID
export async function getTube(id) {
  const response = await api.get(`/tubes/${id}`);
  return response.data;
}