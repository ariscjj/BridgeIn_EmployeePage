import React, { useState } from 'react'; 
import { useNavigate, Link } from 'react-router-dom';

import EmployeeService from '../../services/employee.service';

import FileService from '../../services/file.service';

import { Employee } from '../../models/employee.js';



export default function EmployeeInput(){
  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(""); 
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [employees, setEmployees] = useState([]);

  async function onEmployeeFormSubmit(e) {
    // add the employee to the employees state 
    //create the employee 
    try {
      const downloadUrl = await FileService.uploadImage(photo, (progress) => {
        console.log('Upload Progress: ', progress);
      });

      const employee = await EmployeeService.createEmployee(
        new Employee({
          id: null,
          photo: downloadUrl, 
          name: name,
          country: country,
          role: role,
          email: email,
          phone: phone,
          status: status
        }));
      setEmployees([...employees, employee]);
      navigate('employee-list');

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
    <div>
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
            onChange={(e) => setName(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="Name" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Country</label>
          <input 
            value={country}
            onChange={(e) => setCountry(e.target.value)}

            type="text" 
            className="form-control"
            placeholder="Country" />
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
  )

}
