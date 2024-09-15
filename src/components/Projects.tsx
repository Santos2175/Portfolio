import React, { useState, useEffect } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { projects } from './utilities/projectInfo.ts';

const Projects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Disable scrolling when an image is expanded
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id='projects'
      className='py-16 bg-gray-700 text-gray-300 min-h-screen relative'>
      <h2 className='text-3xl text-center font-bold mb-6'>Projects</h2>
      <div className='max-w-6xl grid mx-auto px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='bg-gray-800 rounded-lg overflow-hidden shadow-2xl transition-transform transform hover:scale-105 cursor-pointer'>
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-48 object-cover'
              onClick={() => handleImageClick(project.image)}
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

      {selectedImage && (
        <div
          className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'
          onClick={handleClose}>
          <img
            src={selectedImage}
            alt='Expanded view'
            className='w-3/4 max-w-screen-lg h-auto cursor-pointer'
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }} // Prevent closing on image click
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
