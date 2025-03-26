import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg rounded-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-3xl font-extrabold">
            <Link to={"/"} className="hover:text-gray-200">
              TodoApp
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="space-x-8 flex items-center">
            <Link
              to={"/"}
              className="text-white font-medium hover:text-gray-200 transition duration-300"
            >
              Trang Chủ
            </Link>
            <Link
              to={"/add"}
              className="text-white font-medium hover:text-gray-200 transition duration-300"
            >
              Thêm Nhiệm Vụ
            </Link>
            <Link
              to={"/signup"}
              className="text-white font-medium hover:text-gray-200 transition duration-300"
            >
              Đăng Ký
            </Link>
            <Link
              to={"signin"}
              className="text-white font-medium hover:text-gray-200 transition duration-300"
            >
              Đăng Nhập
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
