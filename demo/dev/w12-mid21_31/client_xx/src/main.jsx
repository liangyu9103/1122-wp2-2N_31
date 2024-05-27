import React from 'react';
import ReactDOM from 'react-dom/client';
import App_31 from './App_31.jsx';
import './index.css';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position="top-center" autoClose={1500} />
    <App_31 />
  </React.StrictMode>
);
