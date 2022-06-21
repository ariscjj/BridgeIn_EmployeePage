import React from 'react'

export default function TaskTable(props){
  function readURL(result)
  {
    var reader = new FileReader(); 
    reader.onload = document.getElementById("pfp").src = result;
    reader.readAsDataURL(input.files[0])

  }

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

                <td>
                  <img
                    src=readURL{({task.photo})}
                    alt="profile pic"
                    width="24" 
                    height="24" 
                    className="bi rounded-circle"  
                    viewBox="0 0 16 16" 
                  />
                </td>
                <td>{task.name}</td>
                <td>
                  <img src="
                  https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

                    alt="countryflag"
                    width="24" 
                    height="24" 
                    className="bi"  
                    viewBox="0 0 16 16" />
                    <p>{task.country}</p></td>
                <td>{task.role}</td>
                <td><p>{task.email}</p>
                    <p>{task.phone}</p>
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
