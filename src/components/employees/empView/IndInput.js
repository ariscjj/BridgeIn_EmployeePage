import React, { useState, useEffect } from 'react'; 
import { Alert } from 'bootstrap';

import { useNavigate, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Employee } from '../../../models/employee.js';

import EmployeeService from '../../../services/employee.service.js'; 
import EditEmployeeService from '../../../services/editEmployee.service.js'; 

import FormInput from './../FormInput';

export default function IndInput(){
  const [first, setFirst] = useState(true);
  const [id, setId] = useState("");
  const d = new Date();
  let time = d.getTime() + "";
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!employees.length){
      onInitialLoad(); 
    }
  }, []); 

  async function onInitialLoad(){
    const employees = await EditEmployeeService.fetchEmployees(); 
    setEmployees(employees);
  }

//   useEffect(() => {
//     if (!id){
//       setId(time);
//       console.log("setTime");
//       console.log(id);
//     }
//   }, []); 


  // const navigate = useNavigate();
  async function onEmpCreate(id, downloadUrl, name, birthday, address, postalCode, city, country, role, email, phone, status) {
    // const d = new Date();
    // let time = d.getTime() + "";
      await EmployeeService.createEmployee(
        new Employee(
          time,
          downloadUrl, 
          name,
          birthday,
          address,
          postalCode,
          city,
          country,
          role,
          email,
          phone,
          status 
        ));
    setId(time);
    setFirst(false);
    console.log("TIME");
    console.log(time);
    console.log(id);
    console.log(first);
    // navigate('/ind-edit');
  }

  async function onEmpEdit(id, downloadUrl, name, birthday, address, postalCode, city, country, role, email, phone, status) {
      await EditEmployeeService.createEmployee(
        new Employee(
          id,
          downloadUrl, 
          name,
          birthday,
          address,
          postalCode,
          city,
          country,
          role,
          email,
          phone,
          status 
        ));
  }

  return (
    <div className="container my-5">
      <div className="card card-body text-left">
        {
          first ? 
            <div>
              <h5 class="card-title text-center">Enter Your Information</h5>
              <FormInput onEmployeeFormSubmit={onEmpCreate}/>
            </div>
          :
            <div>
              <h5 class="card-title text-center">Edit an Employee</h5>
              <FormInput empId={time} onEmployeeFormSubmit={onEmpEdit}/>
            </div>
        }
      </div>
    </div>
  )

}
