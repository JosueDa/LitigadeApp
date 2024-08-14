import React, { useState, useEffect } from 'react';

const BookAppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    time: '',
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, department, time } = formData;

    if (name.trim() && email.trim() && department.trim() && time.trim()) {
      setSuccessMessage('🎉 Your appointment has been booked successfully!');
      setIsAlertVisible(true);
      setFormData({
        name: '',
        email: '',
        department: '',
        time: '',
      });
    } else {
      setSuccessMessage('Please fill in all required fields.');
      setIsAlertVisible(true);
    }
  };

  useEffect(() => {
    if (isAlertVisible) {
      const timer = setTimeout(() => {
        setIsAlertVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isAlertVisible]);

  const handleCloseAlert = () => {
    setIsAlertVisible(false);
  };

  return (
    <form className="p-10 m-10 rounded-lg flex flex-col bg-white" onSubmit={handleSubmit}>
      <div className="mb-10">
        <h2 className="text-2xl text-center font-semibold font-serif text-gray-900">Book Appointment</h2>
      </div>

      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900">Name *</label>
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

      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900">Email *</label>
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

      <div className="mb-5">
        <label htmlFor="department" className="block mb-2 text-sm font-bold text-gray-900">Department *</label>
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

      <div className="mb-5">
        <label htmlFor="time" className="block mb-2 text-sm font-bold text-gray-900">Time *</label>
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

      <button
        type="submit"
        className="mt-6 bg-custom-blue text-white font-medium rounded-lg px-6 py-6 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Book Appointment
      </button>

      {isAlertVisible && successMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded-lg shadow-md text-center relative">
          <p className="text-lg font-semibold">{successMessage}</p>
          <button
            onClick={handleCloseAlert}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </form>
  );
};

export default BookAppointmentForm;
