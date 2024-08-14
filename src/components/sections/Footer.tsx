import React from 'react';
import FB from '../../assets/FB';
import Insta from '../../assets/Insta';
import Twit from '../../assets/Twit';
import Youtube from '../../assets/Youtube';

const Footer = () => {
  return (
    <footer className="bg-custom-dark-blue text-white">
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between px-4 py-10 lg:py-8">
            <div className='pb-12 lg:py-6'>
            <span className="self-center text-3xl font-serif">Litigade</span>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0 space-x-4">
              <li className="p-2 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                <FB color='#335BF5'/>
              </li>
              <li className="p-2 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                <Insta color='#E61F5A'/>
              </li>
              <li className="p-2 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                <Twit color='#21A6DF'/>
              </li>
              <li className="p-2 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                <Youtube/> 
              </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-4 py-6 lg:py-8">
          <div>
            <h2 className="mb-6 text-xl font-semibold font-serif">Company Info</h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">About Us</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Careers</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">We are hiring</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold font-serif">Legal</h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Licensing</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold font-serif">Features</h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Business Marketing</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">User Analytic</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Live Chat</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Unlimited Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold font-serif">Resources</h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">iOS & Android</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Watch a Demo</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Customers</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">API</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold font-serif">Get in Touch</h2>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 bg-white text-gray-800 rounded-l-md border placeholder-gray-400"
              />
              <button 
                className="w-2/4 p-3 bg-custom-gold text-white rounded-r-md hover:bg-yellow-600"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor amet</p>
          </div>
        </div>
      </div>
      <div className="bg-custom-gradient text-white py-4">
        <div className='w-full max-w-screen-xl mx-auto p-2 md:py-8'>
        <p className="font-semibold ">Made With Love By Figmaland All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
