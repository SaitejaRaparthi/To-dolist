

import { useEffect, useState } from "react";
import { fetchTasks, addTask, updateTask, deleteTask, getUser, logout } from "../api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        if (!userData.data) {
          navigate("/login");
          return;
        }
        setUser(userData.data);
        const tasksData = await fetchTasks();
        setTasks(tasksData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [navigate]);

  const handleAddTask = async (task) => {
    try {
      const newTask = await addTask(task);
      setTasks([...tasks, newTask.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleCompleteTask = async (taskId) => {
    try {
      const updatedTask = await updateTask(taskId, { status: "completed" });
      setTasks(tasks.map((task) => (task._id === taskId ? updatedTask.data : task)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleLogout = async () => {
    navigate("/login");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-semibold">Welcome {user?.name}, Please track your task list</h2>
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Logout
        </button>
      </div>

      <TaskForm onAdd={handleAddTask} />
      <TaskList tasks={tasks} onComplete={handleCompleteTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Dashboard;
