import React from 'react'
export default function TaskTable(props){
  // const catURL = "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  const flagURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png";
  const gwURL = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJwDuMgkzmoaR8Vpzk0oiuxnb2Q9q5_S9Jqmbw%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1";


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
                <td className="col-1">
                  <img
                    src={gwURL}
                    alt="profile pic"
                    width="30" 
                    height="30" 
                    className="bi rounded-circle"  
                    viewBox="0 0 16 16" 
                  />
                    <p>{task.photo}</p>
                </td>

                <td>{task.name}</td>
                <td>
                  <img src={flagURL}
                    alt="countryflag"
                    width="40" 
                    height="30" 
                    className="bi"  
                    viewBox="0 0 16 24" />
                    <p>{task.country}</p></td>
                <td>{task.role}</td>
                <td><p><b>Email:</b> {task.email}
                  <br />
                       <b>Phone:</b> {task.phone}</p>
                </td>
                <td> 
                  <p>{task.status}</p>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>

  )

}
