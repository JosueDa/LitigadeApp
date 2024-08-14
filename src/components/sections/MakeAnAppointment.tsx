import React from 'react';
import AppointmentForm from '../molecules/AppointmentForm';

const MakeAnAppointment = () => {
  return (
    <section className="bg-home4 bg-no-repeat bg-cover">
      <div className='container mx-auto'>
        <div className='p-32'>
          <h2 className='text-2xl font-medium font-serif'>
            Contact Us
          </h2>
    
          <h2 className='text-5xl mb-6 font-serif'>
          Make an Appointment
          </h2>
          <AppointmentForm/>
        </div>
      </div>
    </section>
  );
};

export default MakeAnAppointment;
