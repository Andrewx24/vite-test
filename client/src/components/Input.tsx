import React, { useEffect, useState } from 'react';

const Input = () => {
  const [submit, setSubmit] = useState([])

  useEffect(() => {
    fetch('/api/submit')
      .then((res) => res.json())
      .then((data) => setSubmit(data));
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
    
    </div>
  );
};

export default Input;
