

const TaskList = ({ tasks, onComplete, onDelete }) => (
  <div className="space-y-4 p-6 bg-white shadow-md rounded-lg">
    {tasks.map((task) => (
      <div key={task._id} className="border-b pb-4 mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{task.taskName}</h3>
        <p className="text-gray-600">{task.description}</p>
        <div className="mt-2">
          <span className="text-sm text-gray-500">Expected Time: {task.expectedTime} mins</span>
        </div>

        <div className="flex space-x-4 mt-4">
          <span className="text-sm text-gray-600">Status: {task.status}</span>
          {task.status === "pending" && (
            <button
              onClick={() => onComplete(task._id)}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Mark Complete
            </button>
          )}
          <button
            onClick={() => onDelete(task._id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default TaskList;
