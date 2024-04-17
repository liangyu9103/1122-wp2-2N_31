import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_xx from './pages/HomePage_xx';

import SupaGetBlog_xx from './pages/demo_xx/SupaGetBlog_xx';
import Mid1SupaBlog_xx from './pages/mid1_xx/Mid1SupaBlog_xx';

const App_xx = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_xx />} />
        <Route path='/mid1Blog_xx' element={<Mid1SupaBlog_xx />} />
        <Route path='/demoGetBlog_xx' element={<SupaGetBlog_xx />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App_xx;
