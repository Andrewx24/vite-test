import express from 'express';
import Users from './users';
import cors from 'cors';

const app = express();
const port = 8800;

// Enable CORS for all routes
app.use(cors());

// Root route
app.get('/', (req, res) => {
  // Use res.json() to send Users as a JSON response
  res.json(Users);
});

// API root route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, TypeScript with Express!' });
});

// API users route
app.get('/api/users', (req, res) => {
  // Combine Users and a message in the same object
  res.json({ users: Users, message: 'Hello, TypeScript with Express!' });
});

console.log(Users);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
