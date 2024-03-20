import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

//import { taskList } from './data.js';

let taskList = [
  { id: nanoid(), title: 'Do W1 XXX', isDone: false },
  { id: nanoid(), title: 'Do W2 XXX', isDone: false },
  { id: nanoid(), title: 'DO W3 XXX', isDone: true },
  { id: nanoid(), title: 'DO W4 XXX', isDone: false },
];

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

/*req前端,res後端*/

//get是http的方法
app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/api/tasks', (req, res) => {
  res.json({ taskList });
});

app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ msg: 'Please provide title' });
  }
  const newTask = { id: nanoid(), title, isDone: false };
  taskList = [...taskList, newTask];
  res.json({ task: newTask });
});

app.patch('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body;
  taskList = taskList.map((item) => {
    if (item.id === id) {
      return { ...item, isDone };
    }
    return item;
  });
  res.json({ msg: 'task updated' });
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  taskList = taskList.filter((item) => item.id !== id);
  res.json({ msg: 'task removed' });
});

const port = process.env.PORT || 5000;

const startAPP = () => {
  try {
    app.listen(port, () => {
      console.log(`Sever is running on port ${port}`);
    });
  } catch (error) {}
};

startAPP();
