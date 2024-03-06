import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import './App.css'
//import Setup_31 from './tutorials/SupaGetBlog_31'
//import Setup_31 from './tutorials/SupaPostBlog_31';
//import Setup_31 from './tutorials/SupaPatchBlog_31';
import Setup_31 from './tutorials/SupaDeleteBlog_31';



function App_31() {
  return (
    <>
      {' '}
      <main>
        {' '}
        <div className="title">
          {' '}
          <h1>
            {' '}
            <span>CRUD</span> tutorial{' '}
          </h1>{' '}
        </div>{' '}
        <Setup_31 />{' '}
      </main>{' '}
    </>
  );
}

export default App_31;
