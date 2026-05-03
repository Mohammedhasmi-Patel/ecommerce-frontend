import { HeroGirl } from "@images";


const Home = () => {
  return (
    <section className="relative px-8 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 z-10">
          <span className="inline-block px-4 py-1 mb-6 text-xs font-bold uppercase tracking-widest text-secondary bg-secondary-container rounded-full">
            Summer Series 2024
          </span>
          <h1 className="text-6xl lg:text-8xl font-headline font-black tracking-tighter text-on-background mb-8 leading-[0.9]">
            Curation <br />
            <span className="text-primary italic font-light">As An Art.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md mb-10 leading-relaxed">
            Moving beyond retail into a curated dialogue between modern
            silhouettes and archival craftsmanship. Experience the new editorial
            collection.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-bold tracking-tight shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Shop The Collection
            </button>
            <button className="px-8 py-4 bg-surface-container-highest text-primary rounded-xl font-bold tracking-tight hover:bg-surface-container-high transition-colors">
              View Editorial
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
            <img
              alt="Editorial Fashion"
              className="w-full h-full object-cover"
              src={HeroGirl}
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-xl overflow-hidden border-8 border-background shadow-xl hidden lg:block">
            <img
              alt="Detail view"
              className="w-full h-full object-cover"
              data-alt="Macro close-up of high-quality sustainable fabric texture with intricate indigo weaving pattern and soft shadows"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx_dLB73RX-tBkwutsGxyqel8ybEq5Z7C8pZCn28NiBa0qhTeX21DfJ0aB3vJWavmz7x9W8M1fxF1x04nV19QHMM3wGyhjoueFQA6Z4OKpFTati3qVUIc73ZBWBLgtL5Qy7033g6tSNI74hbKw3A3FdoAj6A1PN9Hc8YwD1FcBhvH-830PmwS4d5ge3Of6Y6MwPg4NLmVm2rhGX1BWhn0JFPzD8gF_QQrLBqxhUg90mRPHODliwQfEFB-tjxQ1I_sHC3gMsHE8asg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
