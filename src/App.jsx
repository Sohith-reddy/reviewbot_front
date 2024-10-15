import './App.css'
import Example from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pricing from './components/pricing';
import Features from './components/Features';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/features" element={<Features/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
