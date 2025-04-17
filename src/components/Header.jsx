import React from 'react';

const Header = () => {
  return (
    <header className="py-4 px-8 fixed w-full z-50 bg-primary bg-opacity-90 backdrop-blur">
      <nav className="flex justify-between items-center">
        <div className="font-bold text-xl">Lexogrine</div>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">Features</li>
          <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
