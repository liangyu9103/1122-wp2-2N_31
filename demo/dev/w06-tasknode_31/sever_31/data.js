//"npm nanoid"套件用法 " {}"
import { nanoid } from 'nanoid';

//考試可能考 嗎
export let tasks = [
  { id: nanoid(), title: 'Do W1 XXX', isDone: false },
  { id: nanoid(), title: 'Do W2 XXX', isDone: false },
  { id: nanoid(), title: 'DO W3 XXX', isDone: true },
  { id: nanoid(), title: 'DO W4 XXX', isDone: false },
];
