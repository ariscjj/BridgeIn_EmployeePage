import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
//import EmployeesPage from './components/EmployeesPage';
import EmployeeInput from './components/employees/EmployeeInput';
import EmployeeTable from './components/employees/EmployeeTable';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/employee-table' element={<EmployeeTable />} />
        <Route path='/add-employee' element={<EmployeeInput />} />
      </Routes>
    </BrowserRouter>
  )
}

