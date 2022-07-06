import React, { useState, useEffect } from 'react'; 
import ReactFlagsSelect from "react-flags-select";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Employee } from '../../models/employee.js';

import EditEmployeeService from '../../services/editEmployee.service.js'; 
import EmployeeService from '../../services/employee.service.js'; 
import FileService from '../../services/file.service';

export default function EditEmployeeInput(props){
  const [id, setId] = useState("");
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
  const [selected, setSelected] = useState(false); 

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

      const employee = await EditEmployeeService.createEmployee(
        new Employee(
          id,
          downloadUrl, 
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

      console.log("CREATED EMPLOYEE");
      setEmployees([...employees, employee]);
      setPhoto(null);
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

  function onEditSelected(editId) {
    console.log("EDITING ID");
    console.log(editId);
    let emp = employees.find((employee) => employee.id === editId)
  
    setId(emp.id);
    setName(emp.name);
    setBirthday(emp.birthday);
    setAddress(emp.address);
    setCity(emp.city);
    setPostalCode(emp.postalCode);
    setCountry(emp.country);
    setRole(emp.role);
    setEmail(emp.email);
    setPhone(emp.phone);
    setStatus(emp.status);

    console.log("EMPLOYEE ID");
    console.log(editId);

    setSelected(true); 
    console.log("set attribute values");
    console.log(phone);
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
              onChange={(e) => onEditSelected(e.target.value)}
              className="form-select" 
              aria-label="Default select example" 
               >
            <option selected>Select employee to edit</option>
              {
                employees.map((employee) => 
                <option 
                  key={employee.id} 
                  value={employee.id}> {employee.name}</option>
                )
              }
            </select>
          </div>

          { selected ? (
          <div>
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
      </div>
          ) : (
            <div> </div>

          )
          }
      </form>
    </div>
  </div>
  )

}

