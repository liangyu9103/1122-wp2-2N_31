import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form_31 from './Form_31';
import Items_31 from './Items_31';
import { useState } from 'react';
const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];
const App_31 = () => {
  const [items, setItems] = useState([]);
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form_31 />
      <Items_31 />
    </section>
  );
};
export default App_31;
