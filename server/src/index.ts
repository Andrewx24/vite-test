import express from 'express';
import Users from './users';
import cors from 'cors';

const app = express();
const port = 8800;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.post('/api/submit', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: 'Name and age are required' });
  }

  console.log(`Received name: ${name}, age: ${age}`);
  
  res.json({ message: 'Data received successfully', data: { name, age } });
});


// Root route
app.get('/', (req, res) => {
  // Use res.json() to send Users as a JSON response
  res.json(Users);
});

// API root route
app.get('/api', (req, res) => {
  res.json(Users);
});

// API users route
app.get('/api/users', (req, res) => {
  // Combine Users and a message in the same object
  res.json(Users);
});

console.log(Users);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
