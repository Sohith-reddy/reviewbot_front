import { useNavigate } from 'react-router-dom';
import './Features.css';
import Chatbot from './Chatbot';

function Features() {
  const navigate = useNavigate();

  return (
    <div className="features-container">
      <h1 className="features-heading">Search By</h1>
      <div className="button-group">
        <button className="features-button" onClick={() => navigate('/product-name')}>Product Name</button>
        <button className="features-button" onClick={() => navigate('/product-url')}>Product URL</button>
      </div>
      <Chatbot/>
    </div>
  );
}

export default Features;
