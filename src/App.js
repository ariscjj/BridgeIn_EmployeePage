import React, { useState, useEffect } from 'react';
//import boostrap from node modules 

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css'; 

//import the Task class from the models folder 
import { Task } from './models/task.js';

import TaskService from './services/task.service.js'; 

//import components from components folder
import TaskTable from './components/employees/TaskTable';

import TaskInput from './components/employees/TaskInput'; 

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!tasks.length){
      onInitialLoad(); 
    }
  }, []); 

  async function onInitialLoad(){
    const tasks = await TaskService.fetchTasks(); 
    setTasks(tasks);
  }

  async function onTaskCreate(photo, name, country, role, email, phone, status) {
    // add the task to the tasks state 
    //create the task 
    const task = await TaskService.createTask(
      new Task(
        null,
        photo, 
        name,
        country,
        role,
        email,
        phone,
        status
    ));
    setTasks([...tasks, task]); 
  }

  return (
    <div className="container my-5">
      <div className="card card-body text-center">
        <h1>Employee List</h1>
        <hr></hr>
        <p>Add an Employee</p>
        <TaskInput onTaskCreate={onTaskCreate} />
        <TaskTable 
          tasks={tasks} />
      </div>
    </div>
  )

}

