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
import NotFound from './components/NotFound';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProductName from './components/app';
import ProductURL from './components/productUrl';
import Chatbot2 from './components/Chatbot2';


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/product-name" element={<ProductName/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/product-url" element={<Amazon/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/ch' element={<Chatbot2/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
