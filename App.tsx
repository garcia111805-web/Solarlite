
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Changed 'Index' to 'Home' to match your actual file in the pages folder
import Home from './pages/Home'; 
import Qualified from './pages/Qualified';

function App() {
  return (
    <Router>
      <Routes>
        {/* This now correctly points to your Home.tsx file */}
        <Route path="/" element={<Home />} />

        {/* This points to your Qualified.tsx file */}
        <Route path="/qualified" element={<Qualified />} />
        
        {/* Fallback: If they go anywhere else, send them back to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
