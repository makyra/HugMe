import { Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Hug from './pages/Hug';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/hug" element={<Hug />} />
    </Routes>
  );
}

export default App;