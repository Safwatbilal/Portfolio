const Hero = () => {
  return (
    <section className="w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Safwat <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Frontend Developer (Rreact & Next ) js </p>
      </div>
    </section>
  );
};

export default Hero;
