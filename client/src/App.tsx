import { useEffect } from 'react';
import './App.css';

function App() {
  const getUsers = () => 
    fetch('/api/users') // Use relative path; Vite proxy handles the rest
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error('Fetch error:', error));

  useEffect(() => { 
    getUsers(); 
  }, []);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
}

export default App;
