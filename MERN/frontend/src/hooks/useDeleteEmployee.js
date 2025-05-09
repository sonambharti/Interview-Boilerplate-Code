import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_BASE_URI = process.env.REACT_APP_BACKEND_BASE_URI || "http://localhost:5000";

export const useDeleteEmployee = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const deleteEmployee = async (email) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch(`${BACKEND_BASE_URI}/api/employee/delete`, {
        method: "DELETE",
        body: JSON.stringify({email}),
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await res.json();
      if (!res.ok){
        setError(data.message);
      }

      else {
        setIsLoading(false);
        setError(null);
        setSuccess('Employee Deleted Successfully 🎉.');
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, success, deleteEmployee };
};
