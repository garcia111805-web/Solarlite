
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// These paths assume your files are named Index.tsx and Qualified.tsx 
// inside a folder named 'pages'.
import Index from './pages/Index'; 
import Qualified from './pages/Qualified';

function App() {
  return (
    <Router>
      <Routes>
        {/* If the URL is just your site name, show the Home page */}
        <Route path="/" element={<Index />} />

        {/* If the URL has /qualified at the end, show the Qualified page */}
        <Route path="/qualified" element={<Qualified />} />
        
        {/* This is a fallback: if someone types a random URL, send them Home */}
        <Route path="*" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
