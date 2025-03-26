import React from "react";

const AddTask = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Thêm Nhiệm Vụ Mới
        </h1>
        <form action="#" method="POST">
          <div className="space-y-6">
            {/* Tên Nhiệm Vụ */}
            <div>
              <label
                htmlFor="taskName"
                className="block text-gray-700 font-semibold"
              >
                Tên Nhiệm Vụ
              </label>
              <input
                type="text"
                id="taskName"
                name="taskName"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập tên nhiệm vụ"
                required
              />
            </div>
            {/* Hạn Chót */}
            <div>
              <label
                htmlFor="dueDate"
                className="block text-gray-700 font-semibold"
              >
                Hạn Chót
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Độ Ưu Tiên */}
            <div>
              <label
                htmlFor="priority"
                className="block text-gray-700 font-semibold"
              >
                Độ Ưu Tiên
              </label>
              <select
                id="priority"
                name="priority"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value disabled selected>
                  Chọn độ ưu tiên
                </option>
                <option value="High">Cao</option>
                <option value="Medium">Trung bình</option>
                <option value="Low">Thấp</option>
              </select>
            </div>
            {/* Tình Trạng */}
            <div>
              <label
                htmlFor="status"
                className="block text-gray-700 font-semibold"
              >
                Tình Trạng
              </label>
              <select
                id="status"
                name="status"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value disabled selected>
                  Chọn tình trạng
                </option>
                <option value="Incomplete">Chưa hoàn thành</option>
                <option value="In Progress">Đang tiến hành</option>
                <option value="Completed">Hoàn thành</option>
              </select>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full mt-6 py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Thêm Nhiệm Vụ
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
