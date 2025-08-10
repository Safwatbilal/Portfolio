import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import { socialLinks } from '../constants/index.js';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' Safwat@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  // Social media links data

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I&rsquo;m Safwat Bilal</p>
              <p className="grid-subtext">
                I am a fifth-year Informatics Engineering student at the University of Aleppo, specializing in frontend
                development and building dynamic, responsive, and visually appealing web applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in modern frontend technologies, frameworks, and tools, enabling me to create robust,
                scalable, and engaging web applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I&rsquo;m very flexible with time zone communications &amp; locations</p>
              <p className="grid-subtext">I&rsquo;m based in Rjieka, Croatia and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div>
              <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

              <p className="grid-headtext">Connect With Me</p>
              <p className="grid-subtext mb-8">
                Feel free to reach out through any of these platforms. I&rsquo;m always open to discussing new
                opportunities and collaborating on exciting projects.
              </p>

              <div className="relative z-10 flex items-center justify-between flex-wrap gap-5">
                <div className="flex items-center gap-3 flex-wrap">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tech-logo group relative p-3 rounded-lg transition-all duration-300 hover:scale-110"
                      style={{
                        backgroundColor: `${link.color}15`,
                        border: `2px solid ${link.color}30`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${link.color}25`;
                        e.currentTarget.style.borderColor = `${link.color}60`;
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${link.color}15`;
                        e.currentTarget.style.borderColor = `${link.color}30`;
                        e.currentTarget.style.transform = 'scale(1)';
                      }}>
                      <div
                        className="w-12 h-12 transition-all duration-300"
                        style={{
                          backgroundColor: link.color,
                          maskImage: `url(${link.icon})`,
                          maskRepeat: 'no-repeat',
                          maskSize: 'contain',
                          maskPosition: 'center',
                          WebkitMaskImage: `url(${link.icon})`,
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskSize: 'contain',
                          WebkitMaskPosition: 'center',
                        }}
                      />
                      <span
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                        style={{ color: link.color }}>
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  safwetbilal65@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
