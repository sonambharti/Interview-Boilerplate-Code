import { useState } from "react";
import { useNavigate } from "react-router-dom";
const BACKEND_BASE_URI = process.env.REACT_APP_BACKEND_BASE_URI;
console.log(`BACKEND URI ${BACKEND_BASE_URI}`);
export const useAddEmployee = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const addEmployee = async (formData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    try {
        const response = await fetch(
        `${BACKEND_BASE_URI}/api/employee/`,
        {
          method: "POST",
          body: formData,
        },
      );

      const json = await response.json();

      if (!response.ok) {
        setError(json.data);
      } else {
        setIsLoading(false);
        setError(null);
        setSuccess('Profile Updated Successfully 🎉.');
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

  return { addEmployee, isLoading, error, success};
};
