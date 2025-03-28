

import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState({ taskName: "", description: "", expectedTime: "" });

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onAdd(task); }}
      className="space-y-4 p-6 bg-white shadow-md rounded-lg"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Task Name</label>
        <input
          type="text"
          placeholder="Enter Task Name"
          value={task.taskName}
          onChange={(e) => setTask({ ...task, taskName: e.target.value })}
          required
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          placeholder="Enter Task Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Expected Time (min)</label>
        <input
          type="number"
          placeholder="Enter Expected Time"
          value={task.expectedTime}
          onChange={(e) => setTask({ ...task, expectedTime: e.target.value })}
          required
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
