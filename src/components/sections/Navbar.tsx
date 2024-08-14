import React, { useState } from 'react';
import MagnifyingGlassIcon from '../../assets/MagnifyingGlass';
import ShoppingCartIcon from '../../assets/ShoppingCart';
import MenuIcon from '../../assets/MenuIcon';
import NavItem from '../Atoms/NavItem';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container mx-auto'>
      <nav className="flex flex-col md:flex-row md:justify-between items-center py-10 px-4 md:px-8">
        <div className="flex justify-between items-center w-full md:w-auto">
          <a href="#" className="text-4xl font-serif">Litigade</a>
        </div>
        <ul className={`flex-col md:flex-row md:flex w-full md:w-auto items-center ${isOpen ? 'flex' : 'md:block'} `}>
          <NavItem isOpen={isOpen} href="#">Home</NavItem>
          <NavItem isOpen={isOpen} href="#">Product</NavItem>
          <NavItem isOpen={isOpen} href="#">Pricing</NavItem>
          <NavItem isOpen={isOpen} href="#">Contact</NavItem>
          <NavItem isOpen={isOpen} href="#"><MagnifyingGlassIcon /></NavItem>
          <NavItem isOpen={isOpen} href="#"><ShoppingCartIcon /></NavItem>
        </ul>
        <div className="absolute top-10 right-10 md:static md:top-auto md:right-auto">
            <button className="" onClick={toggleMenu}>
              <MenuIcon />
            </button>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;