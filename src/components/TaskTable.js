import React from 'react'

export default function TaskTable(props){

  const base = "countryflagsapi.com/"

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Employee Name</th>
            <th>Country</th>
            <th>Role</th>
            <th>Contact Info</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            props.tasks.map((task) => 
              <tr key={task.id}>
                <td>{task.photo}</td>
                <td>{task.name}</td>
                <td>
                  <img src={ base }+{task.country}  width="24" height="24" className="bi"  viewBox="0 0 16 16" role="img">

                {task.country}</td>
                <td>{task.role}</td>
                <td><p>{task.email}</p>
                    <p>{task.phone}</p>
                </td>
                <td>{task.jobStatus}</td>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>

  )

}
