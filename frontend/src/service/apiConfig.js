import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5173/api/",  // URL de Django
});

export const getTasks = () => api.get("/tasks/");
export const createTask = (task) => api.post("/tasks/", task);
import { useEffect, useState } from "react";
import { getTasks } from "../services/api";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;