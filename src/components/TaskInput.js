import React, { useState } from 'react'; 

export default function TaskInput(props){
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState(""); 
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobStatus, setJobStatus] = useState("");

  function onTaskFormSubmit(e){
    e.preventDefault();
    props.onTaskCreate(photo, name, country, role, email, phone, jobStatus);
    setPhoto('');
    setName('');
    setCountry('');
    setRole('');
    setEmail('');
    setPhone('');
    setJobStatus('');
  }
  return (
    <div>
      <form onSubmit={onTaskFormSubmit}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Photo</label>
          <input 
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="Photo" />
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
          <input 
            value={jobStatus}
            onChange={(e) => setJobStatus(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="JobStatus" />
        </div>

        <button className="btn btn-outline-secondary" type="submit">
          Submit
        </button> 
      </form>

    </div>
  )

}
