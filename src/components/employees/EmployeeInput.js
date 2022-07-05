import React, { useState, useEffect } from 'react'; 
import ReactFlagsSelect from "react-flags-select";
import { Alert } from 'bootstrap';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Employee } from '../../models/employee.js';

import EmployeeService from '../../services/employee.service.js'; 
import FileService from '../../services/file.service';

export default function EmployeeInput(props){
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(""); 
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
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
  }

  async function onEmployeeFormSubmit(e) {
    e.preventDefault();
    try {
      const downloadUrl = await FileService.uploadImage(photo, (progress) => {
        console.log('Upload Progress: ', progress);
      });
      const d = new Date();
      let time = d.getTime() + "";

      const employee = await EmployeeService.createEmployee(
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

      console.log("CREATED EMPLOYEE");
      setEmployees([...employees, employee]);
      setPhoto('');
      setName('');
      setBirthday('');
      setAddress('');
      setCity('');
      setPostalCode('');
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

  function stringContainsNumber(_string) {
    return /\d/.test(_string);
  }

  function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }  

  return (
    <div className="container my-5">
      <div className="card card-body text-center">
        <h5 class="card-title">Add an Employee</h5>
        <form onSubmit={onEmployeeFormSubmit}>

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
              onChange={(e) => {
                if(stringContainsNumber(e.target.value)){
                  <Alert key="danger" variant="danger">
                    Please input a valid name!
                  </Alert>
                }else {setName(e.target.value)}}}
              type="text" 
              className="form-control"
              placeholder="Name" />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Birthday</label>
            <input 
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              type="birthday" 
              className="form-control"
              placeholder="Birthday" />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Address</label>
            <input 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text" 
              className="form-control"
              placeholder="Address" />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">City</label>
            <input 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text" 
              className="form-control"
              placeholder="City" />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Postal Code</label>
            <input 
              value={postalCode}
              onChange={(e) => {
                if(!onlyNumbers(e.target.value)){
                  <Alert key="danger" variant="danger">
                    Please input a valid postal code!
                  </Alert>
                }else {setPostalCode(e.target.value)}}}
              type="text" 
              className="form-control"
              placeholder="PostalCode" />
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
              type="email" 
              className="form-control"
              placeholder="name@address.com" />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Phone</label>
            <input 
              value={phone}
              onChange={(e) => {
                if(!onlyNumbers(e.target.value)){
                  <Alert key="danger" variant="danger">
                    Please input a valid number!
                  </Alert>
                }else {setPhone(e.target.value)}}}
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
