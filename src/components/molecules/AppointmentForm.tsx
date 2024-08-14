import React, { useState } from 'react';

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    time: '',
    comments: '',
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, department, time, comments } = formData;

    if (name && email && department && time && comments) {
      setSuccessMessage('🎉 Your appointment has been successfully booked!');
      
      setFormData({
        name: '',
        email: '',
        department: '',
        time: '',
        comments: '',
      });
      setTimeout(() => setSuccessMessage(null), 5000);
    } else {
      setSuccessMessage('Please fill in all required fields.');
    }
  };

  const handleClose = () => {
    setSuccessMessage(null);
  };

  return (
    <div className="max-w-2xl pt-6">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row mb-5">
          <div className="md:w-1/2 md:pr-2 mb-4 md:mb-0">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="md:w-1/2 md:pl-2">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6"
              placeholder="example@gmail.com"
              required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-5">
          <div className="md:w-1/2 md:pr-2 mb-4 md:mb-0">
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6"
              required
            >
              <option value="" disabled>Select a department</option>
              <option value="1">Department 1</option>
              <option value="2">Department 2</option>
              <option value="3">Department 3</option>
            </select>
          </div>
          <div className="md:w-1/2 md:pl-2">
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6"
              required
            >
              <option value="" disabled>Select Time</option>
              <option value="4:00">4:00 Available</option>
              <option value="6:00">6:00 Available</option>
              <option value="8:00">8:00 Available</option>
            </select>
          </div>
        </div>

        <div className="mb-5">
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6"
            placeholder="Message"
            rows={4}
            required
          />
        </div>
        <div className='pt-6'>
          <button
            type="submit"
            className="text-white bg-[#784F33] hover:bg-[#5C3A26] focus:outline-none focus:ring-4 focus:ring-[#AC8268] rounded-md px-12 py-4 text-center mb-2"
          >
            Book Appointment
          </button>
        </div>
      </form>

      {successMessage && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg shadow-md relative">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 11-8 8 8 8 0 018-8zm0-2a10 10 0 100 20 10 10 0 000-20zm-1 13.414l4.707-4.707-1.414-1.414L9 11.586l-2.293-2.293-1.414 1.414L9 14.414z" />
              </svg>
            </div>
            <div className="ml-3">{successMessage}</div>
          </div>
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 mt-2 mr-2 text-green-500 hover:text-green-700 font-bold rounded-full text-lg"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
