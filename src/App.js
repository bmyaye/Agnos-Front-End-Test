import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FingerSelector from './pages/FingerSelector';
import AbsSelector from './pages/AbsSelector';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/finger" element={<FingerSelector />} />
          <Route path="/abs" element={<AbsSelector />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
