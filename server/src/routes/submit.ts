import { Router } from "express";

const ApiSubmitRouter = Router();


ApiSubmitRouter.post('/api/submit', (req, res) => {
    const { name, age } = req.body;
  
    if (!name || !age) {
      return res.status(400).json({ message: 'Name and age are required' });
    }
  
    console.log(`Received name: ${name}, age: ${age}`);
    
    res.json({ message: 'Data received successfully', data: { name, age } });
    res.send({name,age})
  });

  
export default ApiSubmitRouter;