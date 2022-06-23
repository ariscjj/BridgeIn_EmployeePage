import React, { useState } from 'react';
//import boostrap from node modules 

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css'; 


//import the Task class from the models folder 
import { Task } from './models/task.js';


//import components from components folder
import TaskTable from './components/TaskTable';

import TaskInput from './components/TaskInput'; 

export default function App() {
  const [tasks, setTasks] = useState([]);

  function onTaskCreate(photo, name, address, city, postalCode, country, email, phone, jobStatus) {
    // add the task to the tasks state 

    //create the task 
    const task = new Task(
      photo, 
      name,
      address, 
      city,
      postalCode,
      country,
      email,
      phone,
      jobStatus
    )

    setTasks([...tasks, task]); 
  }

  //function onTaskCompleteToggle(taskId){
  //  //toggle the task completed state
  //  // update the tasks state with the new updates state 
    

  //  const taskToToggle = tasks.find((task) => task.id === taskId); 
  //  taskToToggle.complete = !taskToToggle.complete; 

  //  setTasks(tasks.map((task) => {
  //    return task.id === taskId ?  taskToToggle : task; 
  //  })); 
  //}


//   function onTaskRemove(taskId) {
//     // filter the tasks to keep tasks which don't have the id passed in 
//     // update the task state with the filtered list 
//     setTasks(tasks.filter((task) => task.id !== taskId)); 
//   }

  return (
    <div className="container my-5">
      <div className="card card-body text-center">
        <h1>Task List</h1>
        <hr></hr>
        <p>Our simple task list</p>
        <TaskInput onTaskCreate={onTaskCreate} />
        <TaskTable 
          tasks={tasks} />
      </div>

    </div>
  )

}

