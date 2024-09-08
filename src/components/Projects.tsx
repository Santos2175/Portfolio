import { FaGithub, FaLink } from 'react-icons/fa';
import { projects } from './utilities/projectInfo.ts';

const Projects: React.FC = () => {
  return (
    <section
      id='projects'
      className='py-16  bg-gray-700 text-gray-300 min-h-screen'>
      <h2 className='text-3xl text-center font-bold mb-6'>Projects</h2>
      <div className='max-w-6xl grid mx-auto px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='bg-gray-800 rounded-lg overflow-hidden shadow-2xl transition-transform transform hover:scale-105'>
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2 text-center'>
                {project.title}
              </h3>
              <div className='flex justify-around mt-2'>
                <a
                  href={project.codeLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`View ${project.title} code`}>
                  <FaGithub className='text-2xl text-gray-400 hover:text-gray-100 transition-colors' />
                </a>
                <a
                  href={project.liveLink}
                  target={project.isLiveDisabled ? '_self' : '_blank'}
                  rel='noopener noreferrer'
                  className={`text-2xl transition-colors ${
                    project.isLiveDisabled
                      ? 'pointer-events-none text-gray-500 opacity-50 cursor-not-allowed'
                      : 'text-gray-400 hover:text-gray-100'
                  }`}
                  aria-label={`View ${project.title} live`}>
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
