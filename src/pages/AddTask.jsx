import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onErrors = (errors) => {
    console.log(errors);
  };
  const onValid = (data) => {
    axios
      .post("http://localhost:3000/tasks", data)
      .then(() => {
        alert("Thêm nhiệm vụ thành công");
        navigate("/");
      })
      .catch((errors) => {
        console.error(errors);
      });
  };
  return (
    <div>
      <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Thêm Nhiệm Vụ Mới
        </h1>
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit(onValid, onErrors)}
        >
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
                {...register("title", {
                  required: "Không được bỏ trống form",
                  minLength: {
                    value: 5,
                    message: "Độ dài không được dưới 5 kí tự",
                  },
                })}
              />
              {errors.title && (
                <div style={{ color: "red" }}>{errors.title.message}</div>
              )}
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
                {...register("due_date", {
                  required: "Không được bỏ trống form",
                  validate: (value) => {
                    var today = new Date();
                    var deadline = new Date(value);
                    return (
                      deadline > today ||
                      "Hạn chót phải là ngày trong tương lai"
                    );
                  },
                })}
              />
              {errors.due_date && (
                <div style={{ color: "red" }}>{errors.due_date.message}</div>
              )}
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
                {...register("priority", {
                  required: "Không được bỏ trống form",
                })}
              >
                <option value disabled>
                  Chọn độ ưu tiên
                </option>
                <option value="Cao">Cao</option>
                <option value="Trung bình">Trung bình</option>
                <option value="Thấp">Thấp</option>
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
                {...register("status", {
                  required: "Không được bỏ trống form",
                })}
              >
                <option value disabled>
                  Chọn tình trạng
                </option>
                <option value="Chưa hoàn thành">Chưa hoàn thành</option>
                <option value="Đang tiến hành">Đang tiến hành</option>
                <option value="Hoàn thành">Hoàn thành</option>
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
