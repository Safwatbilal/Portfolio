import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';

const allSkills = [
  { name: 'React.js', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Redux Toolkit', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'React Query', path: 'https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png' },
  { name: 'Tailwind CSS', path: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'Material UI', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  { name: 'shadcn/ui', path: 'https://avatars.githubusercontent.com/u/139895814?s=280&v=4' },
  { name: 'Firebase', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Appwrite', path: 'https://appwrite.io/assets/logomark/logo.png' },
  { name: 'Git', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'GitLab', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
  { name: 'Jest', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  { name: 'C++', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'CSS3', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'HTML5', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Zustand', path: 'https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560' },
  { name: 'Framer Motion', path: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
];

const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.skill-icon',
      { 
        opacity: 0, 
        scale: 0,
        rotation: -180
      },
      { 
        opacity: 1, 
        scale: 1,
        rotation: 0,
        duration: 0.8, 
        stagger: 0.05, 
        ease: 'back.out(1.7)' 
      }
    );

    // Floating animation for each icon
    const icons = document.querySelectorAll('.skill-icon');
    icons.forEach((icon, index) => {
      const randomDelay = Math.random() * 2;
      const randomDuration = 3 + Math.random() * 2;
      const randomY = -10 + Math.random() * 20;
      const randomX = -5 + Math.random() * 10;

      gsap.to(icon, {
        y: randomY,
        x: randomX,
        duration: randomDuration,
        delay: randomDelay,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <section className="c-space my-20">
 

      <div 
        ref={containerRef}
        className="mt-12 p-10  overflow-hidden min-h-[400px]">
        
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent opacity-50"></div>

        {/* Skills Grid */}
        <div className="relative z-10 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-8 place-items-center">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className="skill-icon group flex flex-col items-center gap-2 cursor-pointer">
              
              {/* Skill Icon with glow effect */}
              <div className="relative w-14 h-14 flex items-center justify-center">
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                
                {/* Icon */}
                <img
                  src={skill.path}
                  alt={skill.name}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-125 drop-shadow-2xl relative z-10 filter group-hover:brightness-110"
                />
              </div>

              {/* Skill Name - appears on hover */}
              <span className="text-xs text-white-600 group-hover:text-white transition-all duration-300 text-center leading-tight opacity-0 group-hover:opacity-100 absolute -bottom-6 whitespace-nowrap font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;