import React, { useState } from 'react'; 

export default function EmployeeInput(props){
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState(""); 
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
<<<<<<< HEAD:src/components/TaskInput.js
  const [jobStatus, setJobStatus] = useState("");
  


=======
  const [status, setStatus] = useState("");
>>>>>>> 3f7569cad28d7a439b2a5bc7ab0707e0c14a94dd:src/components/employees/EmployeeInput.js

  function onEmployeeFormSubmit(e){
    e.preventDefault();
<<<<<<< HEAD:src/components/TaskInput.js
    props.onTaskCreate(photo, name, birthday, address, city, postalCode, country, role, email, phone, jobStatus);
=======
    props.onEmployeeCreate(photo, name, country, role, email, phone, status);
>>>>>>> 3f7569cad28d7a439b2a5bc7ab0707e0c14a94dd:src/components/employees/EmployeeInput.js
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
              value={photo}
              onChange={(e) => setPhoto(e.target.value)} />
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
          <label for="exampleFormControlInput1" class="form-label">Birthday</label>
          <input 
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            type="text" 
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
            onChange={(e) => setPostalCode(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="PostalCode" />
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
