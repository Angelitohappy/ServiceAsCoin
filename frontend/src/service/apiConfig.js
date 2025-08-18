import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/", // URL de Django
});

export const getTasks = () => api.get("/tasks/");
export const createTask = (task) => api.post("/tasks/", task);
