import React from 'react';
import AppointmentForm from '../molecules/AppointmentForm';

const MakeAnAppointment = () => {
  return (
    <section className="bg-home4 bg-no-repeat bg-cover">
      <div className='container mx-auto p-2'>
        <div className='lg:p-32'>
          <h2 className='text-2xl font-medium font-serif text-center lg:text-left'>
            Contact Us
          </h2>
    
          <h2 className='text-5xl mb-6 font-serif text-center lg:text-left'>
          Make an Appointment
          </h2>
          <AppointmentForm/>
        </div>
      </div>
    </section>
  );
};

export default MakeAnAppointment;
