import { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import profile from '../assets/img/profile1.jpg';

const Hero = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <section
      id='home'
      className='h-screen w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center'>
      <div className='container md:max-w-6xl mx-auto flex flex-col-reverse flex-start md:flex-row md:justify-between md:items-center  px-4 gap-8'>
        {/* Text Section */}
        <div className='text-center md:text-left md:ml-5 text-gray-300 md:w-1/2'>
          <motion.h1
            className='text-5xl font-bold mb-4'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            Hi, I'm Santosh Gurung
          </motion.h1>
          <motion.p
            className='text-xl mb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}>
            A <span className='text-3xl font-semibold text-blue-500'>MERN</span>{' '}
            stack enthusiast with a strong interest over{' '}
            <strong className='text-slate-400 font-bold text-xl tracking-wider'>
              backend development
            </strong>
            , passionate about building dynamic web applications.
          </motion.p>
          {/* <motion.button
            className='bg-blue-600 hover:bg-blue-700 text-gray-300 font-semibold w-56 py-2 px-6 rounded-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}>
            <a href='#connect' className='hero-btn'>
              Connect with me
            </a>
          </motion.button> */}

          <motion.a
            className='connect_btn'
            href='#connect'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {isHovered ? (
              'Connect with me'
            ) : (
              <Typewriter
                words={['Connect with me']}
                loop={false}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={90}
                delaySpeed={1000}
              />
            )}
          </motion.a>
        </div>

        {/* Image Section */}
        <div className='flex justify-center md:justify-end md:mr-5'>
          <motion.img
            src={profile}
            alt='Your profile'
            className='rounded-full w-60 h-60 md:w-72 md:h-72 object-cover shadow-2xl border-gray-800 border-4'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
