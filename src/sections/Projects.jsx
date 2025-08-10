import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';

import { myProjects } from '../constants/index.js';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const handleNavigation = (direction) => {
    setIsImageLoading(true);
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });

    // Reset loading state after animation
    setTimeout(() => setIsImageLoading(false), 300);
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
    gsap.fromTo(`.project-images`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20">
      <p className="head-text">My Selected Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-8 w-full">
        {/* Project Info Section */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 rounded-2xl bg-gradient-to-br from-black-300/50 to-black-200/30 backdrop-blur-sm border border-black-300/20">
          {/* Spotlight Background */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-2xl">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-full object-cover opacity-10 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black-300/20 to-black-300/60"></div>
          </div>

          {/* Logo */}
          <div
            className="relative z-10 p-4 backdrop-filter backdrop-blur-xl w-fit rounded-xl border border-white/10"
            style={currentProject.logoStyle}>
            <img className="w-12 h-12 drop-shadow-lg" src={currentProject.logo} alt="logo" />
          </div>

          {/* Project Content */}
          <div className="relative z-10 flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-bold animatedText bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {currentProject.title}
            </p>
            <p className="animatedText text-lg leading-relaxed">{currentProject.desc}</p>
            <p className="animatedText text-white-500 leading-relaxed">{currentProject.subdesc}</p>
          </div>

          {/* Tags and Live Site */}
          <div className="relative z-10 flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3 flex-wrap">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo group relative">
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors duration-300 group"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p className="font-medium">Check Live Site</p>
              <img
                src="/assets/arrow-up.png"
                alt="arrow"
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* Navigation */}
          <div className="relative z-10 flex justify-between items-center mt-7">
            <button className="arrow-btn group relative overflow-hidden" onClick={() => handleNavigation('previous')}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </button>

            <div className="flex gap-2">
              {myProjects.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === selectedProjectIndex
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8'
                      : 'bg-white-600/30 hover:bg-white-600/60'
                  }`}
                  onClick={() => setSelectedProjectIndex(index)}
                />
              ))}
            </div>

            <button className="arrow-btn group relative overflow-hidden" onClick={() => handleNavigation('next')}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </button>
          </div>
        </div>

        {/* Large Thumbnails Section */}
        <div className="project-images relative">
          <div className="relative border border-white/10 bg-black-300/30 backdrop-blur-sm rounded-2xl p-6 h-96 md:h-full">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-500 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-500 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 h-full relative z-10">
              {/* Thumbnail 1 - Large */}
              <div
                className={`rounded-xl overflow-hidden group relative cursor-pointer ${isImageLoading ? 'animate-pulse' : ''}`}
                style={{ minHeight: '200px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>

                <img
                  src={currentProject.texture}
                  alt={`${currentProject.title} - Main View`}
                  className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                  onLoad={() => setIsImageLoading(false)}
                />

                {/* Thumbnail Label */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <p className="text-white font-semibold text-sm">Main Interface</p>
                  </div>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium z-20">
                  Primary
                </div>
              </div>

              {/* Thumbnail 2 - Large */}
              <div
                className={`rounded-xl overflow-hidden group relative cursor-pointer ${isImageLoading ? 'animate-pulse' : ''}`}
                style={{ minHeight: '200px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>

                <img
                  src={currentProject.texture2}
                  alt={`${currentProject.title} - Secondary View`}
                  className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                />

                {/* Thumbnail Label */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <p className="text-white font-semibold text-sm">Features View</p>
                  </div>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium z-20">
                  Features
                </div>
              </div>

              {/* Additional Thumbnail 3 - Can be texture or another image */}
              <div
                className={`col-span-2 rounded-xl overflow-hidden group relative cursor-pointer ${isImageLoading ? 'animate-pulse' : ''}`}
                style={{ minHeight: '120px' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>

                <img
                  src={currentProject.texture}
                  alt={`${currentProject.title} - Overview`}
                  className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-105"
                />

                {/* Wide Thumbnail Label */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                    <p className="text-white font-semibold">Full Overview</p>
                  </div>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium z-20">
                  Overview
                </div>
              </div>
            </div>

            {/* Floating Elements for Extra Appeal */}
            <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
