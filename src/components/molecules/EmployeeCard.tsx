import React from 'react';
import FB from '../../assets/FB';
import Insta from '../../assets/Insta';
import Twit from '../../assets/Twit';

type EmployeeCardProps = {
  title: string;
  name: string;
  image: string;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({ title, name, image }) => {
  return (
    <div className="m-4 bg-white border border-gray-200 rounded-lg shadow text-center transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
      <div className="flex justify-center">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </div>

      <div className="mt-4">
        <p className="text-lg font-semibold mt-8">{name}</p>
        <p className="text-lg text-gray-600 font-semibold">{title}</p>
      </div>
      
      <div className="mt-4 mb-8 flex justify-center space-x-4">
        <a href="" >
          <FB/>
        </a>
        <a href="">
          <Insta/>
        </a>
        <a href="">
          <Twit/>
        </a>
      </div>
    </div>
  );
};

export default EmployeeCard;
