
import React, { useState } from 'react';
import useTitle from '../../Hooks/useTitle';

const ContactForm = () => {
  useTitle('Contact Form - Car Doctor')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here, like sending the data to a server.
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg bg-white mb-10">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="johndoe@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg resize-none"
            rows="4"
            placeholder="How can we assist you?"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#FF3811] text-white px-4 py-2 rounded-lg hover:bg-[#ff2111] transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
