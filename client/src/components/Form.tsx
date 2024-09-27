import { useState, useEffect } from 'react';

// Define the shape of the data you expect from the API
type Person = {
  name: string;
  age: number;
};

const requestAPI = async (): Promise<Person[]> => {
  const response = await fetch('/api/submit');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  return data;
};

const Form = () => {
  const [data, setData] = useState<Person[]>([]);
  const [error, setError] = useState<string | null>(null); // State for handling errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await requestAPI(); // Call the API and get the result
        setData(result); // Store the result in the state
      } catch (err: any) {
        setError(err.message); // Handle error case
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to run only on mount

  if (error) {
    return <div>Error: {error}</div>; // Render error message if API call fails
  }

  return (
    <div>
      {data.length === 0 ? (
        <div>Loading...</div> // Loading state if data hasn't been fetched yet
      ) : (
        data.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
            <h2>{item.age}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default Form;
