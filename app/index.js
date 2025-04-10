const express = require('express');
const app = express();
const PORT = 3000;

let todos = [];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>To-Do App</h1><p>Use /todos endpoint to interact</p>');
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (task) {
    todos.push(task);
    res.status(201).json({ added: task });
  } else {
    res.status(400).json({ error: 'Task is required' });
  }
});

app.listen(PORT, () => {
  console.log(`To-Do app listening on port ${PORT}`);
});

