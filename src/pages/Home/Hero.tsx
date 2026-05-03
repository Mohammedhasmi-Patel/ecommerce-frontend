import { HeroGirl } from '@images'

const Hero = () => {
  return (
    <section className="relative px-8 py-16 lg:py-24 overflow-hidden pb-8">
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
          
        </div>
      </div>
    </section>
  )
}

export default Hero