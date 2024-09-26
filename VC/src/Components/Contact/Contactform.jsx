import React, { useState } from 'react';
import axios from 'axios';
import contactbg from './contactbg.svg';

function Contactform() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userdetails = {
      name: name,
      email: email,
      message: message,
    };

    console.log('Submitting form...', userdetails);

    try {
      // Send a POST request to the backend API
      const response = await axios.post('http://localhost:5000/submit', userdetails);
      console.log('Server response:', response.data);
      alert('Your message has been sent successfully!');
    } catch (error) {
      console.error('Error sending data to server:', error);
      alert('An error occurred while sending your message. Please try again.');
    }
  };

  return (
    <div className="h-screen w-full bg-black flex justify-center items-center"
      style={{
        backgroundImage: `url(${contactbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="container px-4 mx-auto">
        <div className="mx-auto">
          <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  rows="4"
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>
              </div>
              <button
                className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactform;
