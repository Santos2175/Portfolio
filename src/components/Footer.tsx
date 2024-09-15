import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-6 text-center'>
      <div id='connect' className='flex justify-center space-x-6 mb-4'>
        <a
          href='https://github.com/Santos2175'
          className='text-gray-300'
          target='_blank'
          rel='noopener noreferrer'>
          <FaGithub className='h-7 w-7 hover:scale-110 hover:text-white' />
        </a>
        <a
          href='https://www.linkedin.com/in/santosh-gurung2175/'
          className='text-gray-300'
          target='_blank'
          rel='noopener noreferrer'>
          <FaLinkedin className='h-7 w-7 hover:text-blue-500 hover:scale-110' />
        </a>
        <a
          href='https://www.facebook.com/santos.grg.507/'
          className='text-gray-300'
          target='_blank'
          rel='noopener noreferrer'>
          <FaFacebook className='h-7 w-7 hover:text-blue-500 hover:scale-110' />
        </a>
        <a
          href='https://www.instagram.com/santos__gurung/'
          className='text-gray-300'
          target='_blank'
          rel='noopener noreferrer'>
          <FaInstagram className='h-7 w-7 hover:text-red-500 hover:scale-110 hover:shadow-md' />
        </a>
      </div>
      <p className='text-sm md:text-lg'>
        © 2024 Santosh Gurung. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
