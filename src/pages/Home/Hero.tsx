import { HeroGirl } from '@images'

const Hero = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 overflow-hidden pb-4 sm:pb-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        <div className="flex-1 z-10">
          <span className="inline-block px-3 sm:px-4 py-1 mb-4 sm:mb-6 text-xs font-bold uppercase tracking-widest text-secondary bg-secondary-container rounded-full">
            Summer Series 2024
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-headline font-black tracking-tighter text-on-background mb-4 sm:mb-8 leading-[0.9]">
            Curation <br />
            <span className="text-primary italic font-light">As An Art.</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant max-w-md mb-6 sm:mb-10 leading-relaxed">
            Moving beyond retail into a curated dialogue between modern
            silhouettes and archival craftsmanship. Experience the new editorial
            collection.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-bold tracking-tight shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Shop The Collection
            </button>
            <button className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base bg-surface-container-highest text-primary rounded-xl font-bold tracking-tight hover:bg-surface-container-high transition-colors">
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
          
        </div>
      </div>
    </section>
  )
}

export default Hero