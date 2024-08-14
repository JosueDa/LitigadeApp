import React from 'react';

const NavItem = ({ children, href, className = '', isOpen}) => (
  <li className={`my-2 md:my-0 ${isOpen ? 'flex' : 'hidden'} ${className}`}>
    <a href={href} className="font-sans font-medium text-gray-600 hover:text-gray-900 block md:mr-6 text-2xl ">
      {children}
    </a>
  </li>
);

export default NavItem;