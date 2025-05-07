const BACKEND_BASE_URI = process.env.REACT_APP_BACKEND_BASE_URI || "http://localhost:5000";

export const useUpdateEmployee = () => {
  const updateEmployee = async (formData) => {
    try {
      const res = await fetch(`${BACKEND_BASE_URI}/employee/${formData.email}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update");

      return { success: true, data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return { updateEmployee };
};
