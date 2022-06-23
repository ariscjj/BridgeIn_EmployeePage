import React, { useState, useEffect } from 'react';
//import boostrap from node modules 
import { useNavigate } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css'; 

//import the Employee class from the models folder 
import { Employee } from './models/employee.js';

import EmployeeService from './services/employee.service.js'; 
import FileService from './services/file.service.js';

//import components from components folder
import EmployeeTable from './components/employees/GeneralTable';

import EmployeeInput from './components/employees/GeneralInput'; 

export default function App() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    if (!employees.length){
      onInitialLoad(); 
    }
  }, []); 

  async function onInitialLoad(){
    console.log("LOADING");
    const employees = await EmployeeService.fetchEmployees(); 
    setEmployees(employees);
  }

  async function onEmployeeCreate(photo, name, country, role, email, phone, status) {
    try {
      // upload the file
      const downloadUrl = await FileService.uploadImage(photo, (progress) => {
        console.log('Upload Progress: ', progress);
      });
    
    const employee = await EmployeeService.createEmployee(
      new Employee(
        downloadUrl,
        photo, 
        name,
        country,
        role,
        email,
        phone,
        status
    ));
    setEmployees([...employees, employee]); 

    // navigate('/');
    } catch (err) {
      // setError(err.message);
    }

  }
    
    // const employee = await EmployeeService.createEmployee(
    //   new Employee(
    //     null,
    //     photo, 
    //     name,
    //     country,
    //     role,
    //     email,
    //     phone,
    //     status
    // ));
    // setEmployees([...employees, employee]); 


  return (
    <div className="container my-5">
      <div className="card card-body text-center">
        <h1>Employee List</h1>
        <hr></hr>
        <p>Add an Employee</p>
        <EmployeeInput 
          onEmployeeCreate={onEmployeeCreate}
        />
        <EmployeeTable 
          employees={employees} />
      </div>
    </div>
  )

}

