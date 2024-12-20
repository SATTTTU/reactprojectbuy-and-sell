import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Spinner() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => {
        if (prevValue <= 1) {
          clearInterval(interval);
          navigate("/Sign", { state: { from: location.pathname } });
          return 0;
        }
        return prevValue - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate, location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-center text-lg mb-4">
        Redirecting you in {count} seconds...
      </h1>
      <div className="w-12 h-12 border-4 border-t-4 border-green-500 rounded-full animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
