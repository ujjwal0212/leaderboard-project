import axios from "axios";

const BASE_URL = "http://localhost:9090/leaderboard";

export const addUser = (id, name) => {
  return axios.post(`${BASE_URL}/add?id=${id}&name=${name}`);
};

export const updateScore = (id, score) => {
  return axios.put(`${BASE_URL}/score?id=${id}&sc=${score}`);
};

export const getTopK = (k) => {
  return axios.get(`${BASE_URL}/top/${k}`);
};

export const getRank = (id) => {
  return axios.get(`${BASE_URL}/rank/${id}`);
};