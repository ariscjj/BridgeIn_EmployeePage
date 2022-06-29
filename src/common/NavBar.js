//import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">BridgeIn</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/add-employee">Add Employee</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/employee-table">Employee Table</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/employee-edit">Employee Edit</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
