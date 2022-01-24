import { Routes, Route } from 'react-router-dom';
//
import { Home, About } from '@/pages';
//
import './App.css';

const App = () => {
  return (
    <Routes>
      {/* Root Route */}
      <Route path='/' element={<Home />} />

      {/* About Route */}
      <Route path='/about' element={<About />} />
    </Routes>
  );
};

export default App;
