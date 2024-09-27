import { Router } from "express";

const ApiSubmitRouter = Router();
let submissions: { name: string, age: number }[] = []; // Array to store submissions

ApiSubmitRouter.post('/api/submit', (req, res) => {
  const { name, age } = req.body;

  // Validate name and age
  if (!name || !age) {
    return res.status(400).json({ message: 'Name and age are required' });
  }

  // Add the new submission to the array
  submissions.push({ name, age: parseInt(age) });

  console.log(`Received POST request - Name: ${name}, Age: ${age}`);
  
  res.json({ message: 'Data received successfully', data: { name, age } });
});

ApiSubmitRouter.get('/api/submit', (req, res) => {
  // Return the stored submissions
  res.json({ submissions });
});

export default ApiSubmitRouter;
