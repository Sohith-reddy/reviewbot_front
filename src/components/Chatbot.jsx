import React, { useState } from 'react';
import { FaRobot, FaPaperPlane, FaTimes, FaUser } from 'react-icons/fa';

const Chatbot = ({ reviews }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = async (e) => {
        if ((e.key === 'Enter' || e.type === 'click') && input.trim()) {
            const userMessage = { sender: 'user', text: input };
            setMessages([...messages, userMessage]);
            setInput('');
            setLoading(true);

            try {
                const response = await fetch('https://461c-34-46-173-49.ngrok-free.app/process2', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        product_data: reviews, 
                        question: input,       
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    // console.log(data)
                    // console.log(data.response_text)
                    const botResponse = { sender: 'bot', text: data.response_text || 'Sorry, I didn\'t understand that.' };
                    setMessages((prevMessages) => [...prevMessages, botResponse]);
                } else {
                    const errorResponse = { sender: 'bot', text: 'Sorry, there was an error processing your request.' };
                    setMessages((prevMessages) => [...prevMessages, errorResponse]);
                }
            } catch (error) {
                console.error('Error:', error);
                const errorResponse = { sender: 'bot', text: 'An error occurred. Please try again.' };
                setMessages((prevMessages) => [...prevMessages, errorResponse]);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div>
            <button
                onClick={toggleChat}
                className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
            >
                <FaRobot className="h-8 w-8" />
            </button>

            {isOpen && (
                <div className="fixed bottom-0 right-0 bg-white shadow-lg rounded-lg w-full md:w-96 h-full md:h-3/4 p-4 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-bold">Chatbot</h2>
                        <button onClick={toggleChat} className="text-gray-500"><FaTimes /></button>
                    </div>
                    <div className="h-64 overflow-y-auto mb-2">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                                {msg.sender === 'bot' && <FaRobot className="mr-2 text-gray-500" />} {/* Bot icon */}
                                <p className={`p-2 rounded-lg ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200'} max-w-xs`}>{msg.text}</p>
                                {msg.sender === 'user' && <FaUser className="ml-2 text-gray-500" />} {/* User icon */}
                            </div>
                        ))}
                        {loading && <div className="text-center text-gray-500">...Typing...</div>} {/* Loading indicator */}
                    </div>
                    <div className="flex">
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
                </div>
            )}
        </div>
    );
};

export default Chatbot;
