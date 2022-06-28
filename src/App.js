import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import NavBar from './common/NavBar';
import EmployeeInput from './components/employees/EmployeeInput'
import EmployeeTable from './components/employees/EmployeeTable'


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='add-employee' element={<EmployeeInput />} />
        <Route path='employee-table' element={<EmployeeTable />} />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}
