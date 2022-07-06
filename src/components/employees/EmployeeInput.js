import React, { useState } from 'react'; 
// import ReactFlagsSelect from "react-flags-select";
import { Alert } from 'bootstrap';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Employee } from '../../models/employee.js';
// import FileService from '../../services/file.service';

import EmployeeService from '../../services/employee.service.js'; 
import FormInput from './FormInput';

export default function EmployeeInput(){
  // const [photo, setPhoto] = useState(null);
  // const [name, setName] = useState(""); 
  // const [birthday, setBirthday] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [postalCode, setPostalCode] = useState("");
  // const [country, setCountry] = useState("");
  // const [role, setRole] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [status, setStatus] = useState("");
  // const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     if (!employees.length){
//       onInitialLoad(); 
//     }
//   }, []); 

//   async function onInitialLoad(){
//     const employees = await EmployeeService.fetchEmployees(); 
//     setEmployees(employees);
//   }

  async function onEmployeeFormSubmit(downloadUrl, name, birthday, address, postalCode, city, country, role, email, phone, status) {
      const d = new Date();
      let time = d.getTime() + "";

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

     <Alert key="success" variant="success">
      Successfully created employee!
     </Alert>
  }

  return (
    <div className="container my-5">
      <div className="card card-body text-center">
        <h5 class="card-title">Add an Employee</h5>
        <FormInput onEmployeeFormSubmit={onEmployeeFormSubmit}/>
      </div>
    </div>
  )

}
