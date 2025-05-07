import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAddEmployee } from "../hooks/useAddEmployee";
import Alert from "../components/Alert";




function AddEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    role: "",
    salary: 0
  });
  const { addEmployee, isLoading: isAdding, error, success } = useAddEmployee();

  const handleChange = (e) => {
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(formData);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Employee Form</h2>
      {error && <Alert type="error" message={error} />}
      {success && <Alert type="success" message={success} />}

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-6">
        <label className="flex flex-col">
          Name:
          <input name="name" value={formData.name} onChange={handleChange} required className="border p-2 rounded" />
        </label>
        <label className="flex flex-col">
          Email:
          <input name="email" value={formData.email} onChange={handleChange} required className="border p-2 rounded" />
        </label>
        <label className="flex flex-col">
          Phone:
          <input name="phone" value={formData.phone} onChange={handleChange} required className="border p-2 rounded" />
        </label>
        <label className="flex flex-col">
          Department:
          <input name="department" value={formData.department} onChange={handleChange} required className="border p-2 rounded" />
        </label>
        <label className="flex flex-col">
          Role:
          <input name="role" value={formData.role} onChange={handleChange} required className="border p-2 rounded" />
        </label>
        <label className="flex flex-col">
          Salary:
          <input name="salary" value={formData.salary} onChange={handleChange} required type="number" className="border p-2 rounded" />
        </label>
        <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" disabled={isAdding}>
          {isAdding ? "Submitting..." : "Submit"}
        </button>
      </form>

      <div className="center flex gap-4">
        <button onClick={() => <Navigate to="/get-all" />} className="bg-green-600 text-white px-4 py-2 rounded">Get All</button>
        <button onClick={() => <Navigate to="/get-employee" />} className="bg-indigo-600 text-white px-4 py-2 rounded">Get by Email</button>
        <button onClick={() => <Navigate to="/update" />} className="bg-yellow-500 text-white px-4 py-2 rounded">Update</button>
        <button onClick={() => <Navigate to="/delete" />} className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
      </div>
    </div>
  );
}

export default AddEmployee;
