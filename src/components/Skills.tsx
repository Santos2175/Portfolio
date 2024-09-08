import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaDatabase,
  FaReact,
  FaJs,
  FaPython,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';

const Skills = () => {
  return (
    <section
      id='skills'
      className='bg-gray-900 py-16 text-gray-300 min-h-screen'>
      <h2 className='text-3xl font-bold mb-6 text-center'>My Tech Stacks</h2>
      <div className='max-w-5xl mx-auto bg-gray-800'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-4'>
          {/* Skill Item */}
          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center '>
              <div className='w-full flex flex-col items-center transition-transform duration-300 hover:scale-110'>
                <FaHtml5 className='h-16 w-16 text-orange-700' />
                <p className='mt-2 text-sm font-semibold'>HTML</p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center '>
              <div className='w-full flex flex-col items-center transition-transform duration-300 hover:scale-110'>
                <FaCss3Alt className='h-16 w-16 text-blue-500' />
                <p className='mt-2 text-sm font-semibold'>CSS</p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center '>
              <div className='w-full flex flex-col items-center transition-transform duration-300 hover:scale-110'>
                <FaJs className='h-16 w-16 text-yellow-500' />
                <p className='mt-2 text-sm font-semibold'>JavaScript</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center'>
              <div className='w-full flex flex-col items-center  transition-transform duration-300 hover:scale-110'>
                <SiTypescript className='h-16 w-16 text-blue-500' />
                <p className='mt-2 text-sm font-semibold'>TypeScript</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center'>
              <div className='w-full flex flex-col items-center  transition-transform duration-300 hover:scale-110'>
                <FaReact className='h-16 w-16 text-blue-400' />
                <p className='mt-2 text-sm font-semibold'>React</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center '>
              <div className='w-full flex flex-col items-center transition-transform duration-300 hover:scale-110'>
                <SiExpress className='h-16 w-16 text-green-700' />
                <p className='mt-2 text-sm font-semibold'>Express</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center'>
              <div className='w-full flex flex-col items-center  transition-transform duration-300 hover:scale-110'>
                <FaNodeJs className='h-16 w-16 text-green-500' />
                <p className='mt-2 text-sm font-semibold'>Node.js</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center '>
              <div className='w-full flex flex-col items-center transition-transform duration-300 hover:scale-110'>
                <SiRedux className='h-16 w-16 text-purple-500' />
                <p className='mt-2 text-sm font-semibold'>Redux</p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center'>
              <div className='w-full flex flex-col items-center  transition-transform duration-300 hover:scale-110'>
                <FaPython className='h-16 w-16 text-blue-500' />
                <p className='mt-2 text-sm font-semibold'>Python</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center'>
              <div className='w-full flex flex-col items-center  transition-transform duration-300 hover:scale-110'>
                <FaDatabase className='h-16 w-16 text-yellow-500' />
                <p className='mt-2 text-sm font-semibold'>SQL</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center'>
              <div className='w-full flex flex-col items-center  transition-transform duration-300 hover:scale-110'>
                <SiMongodb className='h-16 w-16 text-green-500' />
                <p className='mt-2 text-sm font-semibold'>MongoDB</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center'>
              <div className='w-full flex flex-col items-center  transition-transform duration-300 hover:scale-110'>
                <SiTailwindcss className='h-16 w-16 text-blue-300' />
                <p className='mt-2 text-sm font-semibold'>Tailwind CSS</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center '>
              <div className='w-full flex flex-col items-center transition-transform duration-300 hover:scale-110'>
                <FaGit className='h-16 w-16 text-orange-700' />
                <p className='mt-2 text-sm font-semibold'>Git</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-36 h-36 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center '>
              <div className='w-full flex flex-col items-center transition-transform duration-300 hover:scale-110'>
                <FaGithub className='h-16 w-16 ' />
                <p className='mt-2 text-sm font-semibold'>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
