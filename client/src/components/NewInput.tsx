
import { useEffect, useState } from 'react';
import React from 'react'

const Newinput = () => {
    const [users, setUsers] = useState([]);

  const getUsers = () => 
    fetch('/api/users') // Use relative path; Vite proxy handles the rest
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setUsers(data)) // Set the fetched data in state
      .catch(error => console.error('Fetch error:', error));

  useEffect(() => { 
    getUsers(); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold text-blue-600 mb-6">User List</h1>
    <ul className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      {users.length > 0 ? (
        users.map(user => (
          <li
            key={user.id}
            className="py-2 px-4 bg-blue-50 hover:bg-blue-100 rounded-md mb-2 transition duration-300"
          >
            {user.name}
         
          </li>
        ))
      ) : (
        <li className="text-gray-500">No users found</li>
      )}
    </ul>
  </div>
  )
}

export default Newinput;