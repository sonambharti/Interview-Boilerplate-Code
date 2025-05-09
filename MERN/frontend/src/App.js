import {Suspense, lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const AddEmployee = lazy(() => import("./pages/AddEmployee"));
// const AddEmployee = lazy(() => import("./pages/AddEmployee"));
const GetAll = lazy(() => import("./pages/GetAll"));
const GetEmployee = lazy(() => import("./pages/GetEmployee"));
const UpdateEmployee = lazy(() => import("./pages/UpdateEmployee"));
const DeleteEmployee = lazy(() => import("./pages/DeleteEmployee"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AddEmployee />} />
          <Route path="/get-all" element={<GetAll />} />
          <Route path="/get-employee" element={<GetEmployee />} />
          <Route path='/update-employee' element={<UpdateEmployee />} />
          <Route path='/delete' element={<DeleteEmployee />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

