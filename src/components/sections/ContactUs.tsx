import React from 'react';

const ContactUs = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-32 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-3xl font-medium pb-2 font-serif">
              Request A Free Consultation
            </h3>
            <p className="text-gray-600 text-lg mx-auto max-w-prose">
              The quick fox jumps over the lazy dog
            </p>
          </div>
          <div>
            <button
              type="button"
              className="text-white bg-[#784F33] hover:bg-[#5C3A26] focus:outline-none focus:ring-4 focus:ring-[#AC8268] rounded-md px-12 py-4 text-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
