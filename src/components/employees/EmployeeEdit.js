import React, { useState, useEffect } from 'react'; 
import ReactFlagsSelect from "react-flags-select";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Employee } from '../../models/employee.js';

import EmployeeService from '../../services/employee.service.js'; 
import FileService from '../../services/file.service';


export default function EmployeeInput(props){
  const [id, setId] = useState("");
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(""); 
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!employees.length){
      onInitialLoad(); 
    }
  }, []); 

  async function onInitialLoad(){
    const employees = await EmployeeService.fetchEmployees(); 
    setEmployees(employees);
  };


  async function onEmployeeFormSubmit(e) {
   // add the employee to the employees state 
   //create the employee 
  e.preventDefault();
    try {
      const downloadUrl = await FileService.uploadImage(photo, (progress) => {
       console.log('Upload Progress: ', progress);
     });
      console.log("editing Empt")
      console.log(id)
      console.log(name)

     const editedEmp = employees.find((employee) => employee.id === id);
      console.log("EDITING");
      console.log(editedEmp);
      console.log(editedEmp.name)
     editedEmp.name = name;
      console.log(editedEmp.name);
     editedEmp.photo = downloadUrl;
     editedEmp.country = country;
     editedEmp.role = role;
     editedEmp.email = email; 
     editedEmp.phone = phone; 
     editedEmp.status = status; 

     await EmployeeService.updateEmployee(editedEmp);
      console.log("done editing emp");

     setPhoto(null);
     setName('');
     setCountry('');
     setRole('');
     setEmail('');
     setPhone('');
     setStatus('');


   } catch (err) {
     // TODO handle this
   }
 }


  function onFileSelected(e) {
    if (e.target.files.length){
      setPhoto(e.target.files[0]);
    } else {
      setPhoto(null);
    }
  }

  return (
    <div className="container my-5">
      <div className="card card-body text-center">
        <h5 class="card-title">Edit an Employee</h5>
        <form onSubmit={onEmployeeFormSubmit}>
          <div className="mb-3">
            <select 
              className="form-select" 
              aria-label="Default select example"
              searchable={true}
              onChange={(e) => setId(e.target.value)}>
            <option selected>Select employee to edit</option>
              {
                employees.map((employee) => 
                <option value={ employee.id }> { employee.name }</option>
                )
              }
            </select>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Photo</label>
            <div className="input-group mb-3">
              <input 
                type="file" 
                class="form-control" 
                id="inputGroupFile02"
                accept=".png, .jpg, .jpeg"
                onChange={onFileSelected} />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text" 
              className="form-control"
              placeholder="Name" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Country</label>
            <ReactFlagsSelect
              value={country}
              searchable={true}
              selected={country}
              onSelect={(country) => setCountry(country)}
            />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Role</label>
          <input 
            value={role}
            onChange={(e) => setRole(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="Role" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="Email" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Phone</label>
          <input 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="Phone" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Status</label>
            <select 
              class="form-select" 
              aria-label="Default select example"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              type="text">
              <option selected>Select...</option>
              <option value="Hired">Hired</option>
              <option value="Onboarding">Onboarding</option>
              <option value="Employed">Employed</option>
              <option value="Offboarding">Offboarding</option>
              <option value="Terminating">Terminated</option>
            </select>
        </div>
        <button className="btn btn-outline-secondary" type="submit">
          Submit
        </button> 
      </form>
    </div>
  </div>
  )

}
