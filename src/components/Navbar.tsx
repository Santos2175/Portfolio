import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // State for menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className='bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-200 p-4 sticky z-20 w-full top-0 left-0 h-18 py-auto'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold hover:text-gray-400 pl-4'>
          <a href='#'>My Portfolio</a>
        </h1>

        {/* Mobile Hamburger Menu */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-gray-300 hover:text-white focus:outline-none'>
            {isOpen ? (
              <svg
                className='w-9 h-9'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='w-9 h-9'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? 'translate-x-0 top-0 pt-10' : '-translate-x-full'
          } md:flex md:space-x-8 items-center md:static fixed left-0 pr-4  h-full w-1/2 bg-gray-900 md:bg-transparent md:w-auto text-center md:translate-x-0 transform transition-transform duration-300 ease-in-out`}>
          <li className='w-full'>
            <a
              href='#home'
              onClick={handleLinkClick}
              className={`block text-lg py-6 hover:text-gray-400 md:py-0 md:px-2 ${
                isOpen ? 'border-b-[1px] border-gray-600' : ''
              }`}>
              About
            </a>
          </li>
          <li className='w-full'>
            <a
              href='#skills'
              onClick={handleLinkClick}
              className={`block text-lg py-6 hover:text-gray-400 md:py-0 md:px-2 ${
                isOpen ? 'border-b-[1px] border-gray-600' : ''
              }`}>
              Skills
            </a>
          </li>
          <li className='w-full'>
            <a
              href='#projects'
              onClick={handleLinkClick}
              className={`block text-lg py-6 hover:text-gray-400 md:py-0 md:px-2 ${
                isOpen ? 'border-b-[1px] border-gray-600' : ''
              }`}>
              Projects
            </a>
          </li>
          <li className='w-full'>
            <a
              href='#contact'
              onClick={handleLinkClick}
              className='block text-lg py-6 hover:text-gray-400 md:py-0'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
