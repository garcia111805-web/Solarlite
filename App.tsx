
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// 1. We need to bring this back!
import Layout from './components/Layout'; 
import Home from './pages/Home'; 
import Qualified from './pages/Qualified';

function App() {
  return (
    <Router>
      {/* 2. Wrap everything in the Layout so the Navbar and Footer return */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qualified" element={<Qualified />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
