const BACKEND_BASE_URI = process.env.REACT_APP_BACKEND_BASE_URI || "http://localhost:5000";

export const useDeleteEmployee = () => {
  const deleteEmployee = async (email) => {
    try {
      const res = await fetch(`${BACKEND_BASE_URI}/employee/${email}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Delete failed");

      return { success: true, message: data.message };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return { deleteEmployee };
};
