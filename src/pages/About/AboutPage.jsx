import React from 'react';
import useTitle from '../../Hooks/useTitle';

const AboutPage = () => {
  useTitle("About - Car Doctor")
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-gray-700 mb-6">
          At Car Repair Pros, we are passionate about cars and dedicated to providing the
          best automotive repair services in the industry. With over 20 years of experience,
          our team of skilled technicians is committed to keeping your vehicles running
          smoothly and safely.
        </p>
        <p className="text-gray-700 mb-6">
          We understand the inconvenience and stress that can come with car troubles, and
          that's why we strive to offer a hassle-free experience for our customers. Our
          state-of-the-art facilities are equipped with the latest diagnostic tools and
          equipment to ensure accurate and efficient repairs.
        </p>
        <p className="text-gray-700 mb-6">
          Our mission is to provide high-quality car repair and maintenance services at
          competitive prices. Whether you need routine maintenance, major repairs, or
          emergency services, you can trust us to deliver exceptional results.
        </p>
        <p className="text-gray-700 mb-6">
          We pride ourselves on our commitment to customer satisfaction. Our friendly and
          knowledgeable staff is always ready to assist you, answer your questions, and
          provide transparent information about the work needed for your vehicle.
        </p>
        <p className="text-gray-700 mb-6">
          Thank you for choosing Car Repair Pros as your trusted automotive service
          provider. We look forward to serving you and keeping your vehicles in top
          condition.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
