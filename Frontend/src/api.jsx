import axios from "axios";

const API = axios.create({
  baseURL: "https://to-dolist-1-lows.onrender.com", // Backend URL
  withCredentials: true, // Allows session cookies
});

// Auth API
export const register = (data) => API.post("/api/auth/register", data);
export const login = (data) => API.post("/api/auth/login", data);
export const logout = () => API.post("/api/auth/logout");
export const getUser = () => API.get("/api/auth/me");

// Task API
export const fetchTasks = () => API.get("/api/tasks");
export const addTask = (task) => API.post("/api/tasks", task);
export const updateTask = (id, task) => API.put(`/api/tasks/${id}`, task);
export const deleteTask = (id) => API.delete(`/api/tasks/${id}`);