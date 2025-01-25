import axios from "axios";

const PokeApi = axios.create({
  baseURL: "http://localhost:8000/pokemon/api/v1/pokemon/",
});

export const getAllPokemon = async () => {
  return PokeApi.get("/");
};
export const getPokemon = async (id) => {
  return PokeApi.get(`/${id}/`);
};

export const createPokemon = async (pokemon) => {
  return PokeApi.post("/", pokemon);
};

export const deletePokemon = async (id) => {
  return PokeApi.delete(`/${id}/`);
};
export const updatePokemon = async (id, pokemon) => {
  return PokeApi.put(`/${id}/`, pokemon);
};
