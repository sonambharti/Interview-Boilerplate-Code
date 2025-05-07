const BACKEND_BASE_URI = process.env.REACT_APP_BACKEND_BASE_URI || "http://localhost:5000";

export const useGetEmployeeByEmail = () => {
  const fetchEmployeeByEmail = async (email) => {
    try {
      const res = await fetch(`${BACKEND_BASE_URI}/employee/${email}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "User not found");
      }
      return { success: true, data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return { fetchEmployeeByEmail };
};
