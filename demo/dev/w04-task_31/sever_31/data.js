//"npm nanoid"�M��Ϊk " {}"
import { nanoid } from 'nanoid';

//�Ҹեi��� ��
export let taskList = [
  { id: nanoid(), title: 'Do W1 XXX', isDone: false },
  { id: nanoid(), title: 'Do W2 XXX', isDone: false },
  { id: nanoid(), title: 'DO W3 XXX', isDone: true },
  { id: nanoid(), title: 'DO W4 XXX', isDone: false },
];
