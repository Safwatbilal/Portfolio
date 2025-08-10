import { platformLinks, problemSolvingExperiences } from '../constants/index.js';

const ProblemSolving = () => {
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">Problem Solving Experience</p>

        <div className="work-container">
          <div className="work-canvas bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg mx-auto text-center">
            <p className="text-gray-300 mb-8 leading-relaxed text-lg font-medium">
              Over two years of experience in problem solving on platforms like Codeforces, LeetCode, and CSES, with
              more than 1500 problems solved. Specialized in competitive programming with strong performance in
              contests.
            </p>

            {/* Platform links */}
            <div className="flex items-center justify-center gap-8 mt-6">
              {platformLinks.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
                  title={platform.name}>
                  <img
                    src={platform.path}
                    alt={platform.name}
                    className="w-14 h-14 object-contain filter brightness-90 hover:brightness-110"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {problemSolvingExperiences.map((item, index) => (
                <div key={index} className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
