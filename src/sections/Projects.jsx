import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { myProjects } from '../constants/index.js';

const Projects = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="c-space my-20">
      <p className="head-text">My Selected Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-8 w-full">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className="project-card flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 rounded-2xl bg-gradient-to-br from-black-300/50 to-black-200/30 backdrop-blur-sm border border-black-300/20 hover:border-white/20 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
            {/* Spotlight Background */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-2xl">
              <img
                src={project.spotlight}
                alt="spotlight"
                className="w-full h-full object-cover opacity-10 blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black-300/20 to-black-300/60"></div>
            </div>

            {/* Logo */}
            <div
              className="relative z-10 p-4 backdrop-filter backdrop-blur-xl w-fit rounded-xl border border-white/10"
              style={project.logoStyle}>
              <img className="w-12 h-12 drop-shadow-lg" src={project.logo} alt="logo" />
            </div>

            {/* Project Content */}
            <div className="relative z-10 flex flex-col gap-5 text-white-600 my-5">
              <p className="text-white text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {project.title}
              </p>
              <p className="text-lg leading-relaxed">{project.desc}</p>
              <p className="text-white-500 leading-relaxed">{project.subdesc}</p>
            </div>

            {/* Tags and Live Site */}
            <div className="relative z-10 flex items-center justify-between flex-wrap gap-5 mt-auto">
              <div className="flex items-center gap-3 flex-wrap">
                {project.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="tech-logo group relative">
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
                href={project.href}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;