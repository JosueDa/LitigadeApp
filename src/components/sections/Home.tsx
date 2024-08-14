import React from 'react';
import BookAppointmentForm from '../molecules/BookAppointmentForm';

const Home = () => {
  return (
    <div className='container mx-auto px-4 min-h-screen'>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex-1 flex flex-col items-start justify-center max-w-lg">
        <h1 className="text-[48px] leading-[65px] font-serif font-bold mb-4 md:text-left text-center">
        Help to reclaim your life and freedom
        </h1>

          <h4 className="text-[20px] leading-[30px] text-[#737373] mb-6 md:text-left text-center">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-col md:flex-row items-center gap-4 m-auto">
            <button type="button" className="text-white bg-[#784F33] hover:bg-[#5C3A26] focus:outline-none focus:ring-4 focus:ring-[#AC8268] font-medium rounded-full px-5 py-3 text-center mb-2">
              Get Quote Now
            </button>
            <button type="button" className="text-[#784F33] bg-transparent border border-[#784F33] hover:bg-[#784F33] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#AC8268] font-medium rounded-full px-5 py-3 text-center mb-2">
              Custom Button
            </button>
          </div>
        </div>

        <div className="flex-1 max-w-xl">
        <BookAppointmentForm />
        </div>

      </div>
    </div>
  );
};

export default Home;
