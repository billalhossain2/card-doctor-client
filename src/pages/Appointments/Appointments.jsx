// AppointmentPage.js

import React, { useState } from 'react';
import useTitle from '../../Hooks/useTitle';

const Appointments = () => {
    useTitle('Appointments - Car Doctor')
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: '2023-10-10',
      time: '10:00 AM',
      service: 'Oil Change',
      customerName: 'John Doe',
    },
    {
      id: 2,
      date: '2023-10-15',
      time: '2:30 PM',
      service: 'Brake Inspection',
      customerName: 'Jane Smith',
    },
    {
      id: 3,
      date: '2023-10-20',
      time: '9:15 AM',
      service: 'Tire Rotation',
      customerName: 'Mike Johnson',
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Appointments</h1>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id} className="mb-2">
              <strong>Date:</strong> {appointment.date}<br />
              <strong>Time:</strong> {appointment.time}<br />
              <strong>Service:</strong> {appointment.service}<br />
              <strong>Customer Name:</strong> {appointment.customerName}<br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;
