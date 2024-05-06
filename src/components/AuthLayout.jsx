import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      if (authentication && !authStatus) {
        navigate("/login");
      } else if (!authentication && authStatus) {
        navigate("/");
      }
      setLoading(false);
    };

    checkAuthentication();
  }, [navigate, authStatus, authentication]);

  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="w-32 h-32 border-t-2 border-b-2 border-gray-100 rounded-full animate-spin"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
