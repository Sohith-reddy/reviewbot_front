import React, { useState } from 'react';
import { FaRobot, FaPaperPlane, FaTimes, FaUser } from 'react-icons/fa';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import Footer from './Footer'; // Assuming you have a Footer component

const Chatbot2 = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    if ((e.key === 'Enter' || e.type === 'click') && input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);
      setInput('');
      setLoading(true);

      // Simulate a delay for bot response
      setTimeout(() => {
        const botResponse = { sender: 'bot', text: 'This is a dummy response from the bot.' };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
        setLoading(false);
      }, 1000); // 1 second delay
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* <Navbar /> */}
      <div className="flex-grow p-4 overflow-y-auto">
        {/* Chatbot content goes here */}
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
            {msg.sender === 'bot' && <FaRobot className="mr-2 text-gray-500" />}
            <p className={`p-2 rounded-lg ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200'} max-w-xs`}>
              {msg.text}
            </p>
            {msg.sender === 'user' && <FaUser className="ml-2 text-gray-500" />}
          </div>
        ))}
        {loading && <div className="text-center text-gray-500">...Typing...</div>}
      </div>
      <div className="flex p-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleSend}
          className="border rounded-md p-2 flex-grow"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="bg-indigo-600 text-white rounded-md p-2 ml-2">
          <FaPaperPlane />
        </button>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Chatbot2;