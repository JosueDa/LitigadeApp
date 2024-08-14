import React from 'react';

type AdviceCardProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
  items: string[];
};

const AdviceCard: React.FC<AdviceCardProps> = ({ title, href, icon,items }) => {
  return (
    <div className="border mt-14 transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
      <div className="h-44 flex items-center justify-center rounded-t-lg bg-skin-tone">
        
        <div className="flex items-center">
          {icon && <span className="mr-2 text-gray-900">{icon}</span>}
          <h5 className="text-xl font-bold text-gray-900">{title}</h5>
        </div>
      </div>
      <div className="p-5  border-gray-200">
          <ul className="list-disc list-inside space-y-2 text-gray-700 pb-4">
            
              {items.map((item, index) => (
                <li key={index} className="font-semibold">{item}</li>
              ))}
          </ul>
          <a  href={href} className="text-custom-gold font-semibold"> Learn More </a>
      </div>
    </div>
  );
};

export default AdviceCard;
