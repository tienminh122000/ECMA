import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa task không"))
      axios.delete(`http://localhost:3000/tasks/${id}`).then((res) => {
        setTasks((prevValue) => {
          return prevValue.filter((value) => value.id !== id);
        });
      });
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Todo List
        </h1>
        {/* Task List */}
        <div className="space-y-4">
          {tasks.map((task) => (
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="flex flex-col">
                <span className="font-medium text-gray-800">
                  Nhiệm vụ: {task.title}
                </span>
                <span className="text-sm text-gray-600">
                  Hạn chót: {task.due_date}
                </span>
                <span className="text-sm text-gray-600">
                  Độ ưu tiên: {task.priority}
                </span>
                <span className="text-sm text-gray-600">
                  Tình trạng: {task.status}
                </span>
              </div>
              <div className="space-x-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={() => navigate(`/edit/${task.id}`)}
                >
                  Sửa
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
