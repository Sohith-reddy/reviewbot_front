import './App.css'
import Example from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pricing from './components/pricing';
import Features from './components/Features';
import Amazon from './components/Amazon';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/amazon" element={<Amazon/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
