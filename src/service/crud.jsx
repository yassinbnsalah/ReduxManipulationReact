import axios from "axios";

const url = "http://localhost:3001/movies";

export const getAllMovies = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addMovies = async (event) => {
  return await axios.post(url, event);
};

export const editMovies = async (id, event) => {
  return await axios.put(`${url}/${id}`, event);
};

export const deleteMovies = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
