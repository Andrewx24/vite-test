import React, { useEffect, useState } from 'react';

// Define the type of submission data expected from the API
type Submission = {
  name: string;
  age: number;
};

const Form: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]); // Use state to store the submissions array

  const getSubmissions = async () => {
    try {
      const response = await fetch('/api/submit'); // Use the correct API route
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Parse the JSON response
      setSubmissions(data.submissions); // Access the 'submissions' array in the response and set it in state
    } catch (error) {
      console.error('Fetch error:', error); // Handle fetch errors
    }
  };

  useEffect(() => {
    getSubmissions(); // Fetch the data when the component mounts
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Submissions List</h1>
      <ul className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        {submissions.length > 0 ? (
          submissions.map((submission, index) => (
            <li
              key={index}
              className="py-2 px-4 bg-blue-50 hover:bg-blue-100 rounded-md mb-2 transition duration-300"
            >
              <h2 className="font-semibold">{submission.name}</h2>
              <p className="text-gray-600">Age: {submission.age}</p>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No submissions found</li>
        )}
      </ul>
    </div>
  );
};

export default Form;

