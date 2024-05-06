import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

function LogoutBtn() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button
      className="px-4 py-2 text-white transition duration-200 bg-red-500 rounded-md hover:bg-red-600"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
