import axios from "axios";

const API_URL = "http://localhost:3001";

export const getTaskAll = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/tasks/${id}`);
  return response.data;
}

export const updateTask = async (id, task) => {
  const response = await axios.put(`${API_URL}/tasks/${id}`, task);
  return response.data;
}

export const completeTask = async (id, done) => {
  const response = await axios.patch(`${API_URL}/tasks/${id}`, { done });
  return response.data;
}