import { useState } from "react";
const BACKEND_BASE_URI = process.env.REACT_APP_BACKEND_BASE_URI;

export const useGetAllEmployee = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await fetch(`${BACKEND_BASE_URI}/employee`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (res.ok) {
        setEmployees(data);
      }
    } catch (err) {
      console.error("Failed to fetch employees:", err.message);
    }
  };

  return { employees, fetchEmployees };
};
