<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
//import boostrap from node modules 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'; 
//import the Employee class from the models folder 
import { Employee } from './models/employee.js';
import EmployeeService from './services/employee.service.js'; 
//import components from components folder
import EmployeeTable from './components/employees/EmployeeTable';
import EmployeeInput from './components/employees/EmployeeInput'; 
export default function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    if (!employees.length){
      onInitialLoad(); 
    }
  }, []); 
  async function onInitialLoad(){
    const employees = await EmployeeService.fetchEmployees(); 
    setEmployees(employees);
  }

  async function onEmployeeCreate(photo, name, birthday, address, city, postalCode, country, role, email, phone, status) {
    // add the employee to the employees state 
    //create the employee 
    const employee = await EmployeeService.createEmployee(
      new Employee(
        null,
        photo, 
        name,
        birthday,
        address,
        city,
        postalCode,
        country,
        role,
        email,
        phone,
        status
    ));
    employees.set(employee);
    setEmployees([...employees, employee]); 
  }
=======
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import NavBar from './common/NavBar';
import EmployeeInput from './components/employees/EmployeeInput'
import EmployeeTable from './components/employees/EmployeeTable'
import EmployeeEdit from './components/employees/EmployeeEdit'
import EditEmployeeInput from './components/employees/EditEmployeeInput'
import EditTable from './components/employees/EditTable'


export default function App() {
>>>>>>> original
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='add-employee' element={<EmployeeInput />} />
        <Route path='employee-table' element={<EmployeeTable />} />
        <Route path='employee-edit' element={<EditEmployeeInput/>} />
        <Route path='edit-table' element={<EditTable/>} />

      </Routes>
    </BrowserRouter>
  )
}
