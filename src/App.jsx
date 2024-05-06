import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-wrap content-between min-h-screen">
      <div className="block w-full">
        <Header />
        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <div className="spinner"></div> {/* This is your spinner */}
          </div>
        ) : (
          <main>
            <Outlet />
          </main>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
