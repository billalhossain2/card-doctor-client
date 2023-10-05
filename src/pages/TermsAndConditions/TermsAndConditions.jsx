// TermsAndConditions.js

import React from 'react';
import useTitle from '../../Hooks/useTitle';

const TermsAndConditions = () => {
  useTitle("Terms And Conditions - Car Doctor")
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="max-w-md p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Terms and Conditions</h1>
        <p className="text-gray-600">
          Please read these terms and conditions carefully before using our
          services.
        </p>

        <h2 className="text-lg font-semibold mt-6">1. Acceptance of Terms</h2>
        <p className="text-gray-600">
          By using our car repair services, you agree to abide by these terms
          and conditions.
        </p>

        <h2 className="text-lg font-semibold mt-6">2. Service Description</h2>
        <p className="text-gray-600">
          Our car repair website provides information about our services and
          allows users to request appointments.
        </p>

        <h2 className="text-lg font-semibold mt-6">3. User Responsibilities</h2>
        <p className="text-gray-600">
          Users are responsible for maintaining the accuracy of their personal
          information and complying with our website's policies.
        </p>

        <h2 className="text-lg font-semibold mt-6">4. Payment Terms</h2>
        <p className="text-gray-600">
          Payment for car repair services is subject to our pricing and payment
          policies, which can be found on our website.
        </p>

        <h2 className="text-lg font-semibold mt-6">5. Privacy Policy</h2>
        <p className="text-gray-600">
          Our privacy policy outlines how we collect, use, and protect your
          personal information. Please review it for more details.
        </p>

        <h2 className="text-lg font-semibold mt-6">6. Modifications</h2>
        <p className="text-gray-600">
          We reserve the right to modify these terms and conditions at any
          time. Please check this page periodically for updates.
        </p>

        <h2 className="text-lg font-semibold mt-6">7. Contact Information</h2>
        <p className="text-gray-600">
          If you have any questions or concerns about these terms and
          conditions, please contact us at contact@example.com.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
