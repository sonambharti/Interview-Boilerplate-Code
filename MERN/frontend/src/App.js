import {Suspense, lazy} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
const AddEmployee = lazy(() => import("./pages/Home"));
// const AddEmployee = lazy(() => import("./pages/AddEmployee"));
const GetAll = lazy(() => import("./pages/GetAll"));
const GetEmployee = lazy(() => import("./pages/GetEmployee"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AddEmployee />} />
          <Route path="/get-all" element={<GetAll />} />
          <Route path="/get-employee" element={<GetEmployee />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
