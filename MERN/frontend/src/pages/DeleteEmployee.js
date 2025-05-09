import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeleteEmployee } from '../hooks/useDeleteEmployee';
import Alert from '../components/Alert';

export default function DeleteEmployee () {
    const [email, setEmail] = useState("");
    const {isLoading, error, success, deleteEmployee} = useDeleteEmployee();
    
    const handleChange = (e) => {
      setEmail((email) => email =  e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await deleteEmployee(email);
    };
    const navigate = useNavigate();
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Delete Employee</h2>  
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-6">
            {error && <Alert type="error" message={error} />}
            {success && <Alert type="success" message={success} />}
          
          <label className="flex flex-col">
            Email:
            <input name="email" value={email} onChange={handleChange} required className="border p-2 rounded" />
          </label>
          <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" disabled={isLoading}>
            Submit
          </button>
        </form>
  
        <div className="center flex gap-4">
          <button onClick={() => navigate("/get-all")} className="bg-green-600 text-white px-4 py-2 rounded">Get All</button>
          <button onClick={() => navigate("/get-employee")} className="bg-indigo-600 text-white px-4 py-2 rounded">Get by Email</button>
          <button onClick={() => navigate("/update-employee")} className="bg-yellow-500 text-white px-4 py-2 rounded">Update</button>
          <button onClick={() => navigate("/")} className="bg-orange-600 text-white px-4 py-2 rounded">Add Employee</button>
        </div>
      </div>
    );
}
