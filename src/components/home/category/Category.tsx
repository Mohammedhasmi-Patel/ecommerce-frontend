import { CategoryFootwear, CategoryLifeStyle, CategoryOne, HeroCategoryFemale } from "@images";

const Category = () => {
  return (
    <section className="bg-surface-container py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8 sm:mb-10 lg:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-extrabold tracking-tight">
              Browse by Category
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1 sm:mt-2">
              Defined by purpose, refined by design.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 h-auto sm:h-[400px] lg:h-[600px]">
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-lg sm:rounded-xl bg-surface-container-lowest h-64 sm:h-80 lg:h-auto">
            <img
              alt="Ready to Wear"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={HeroCategoryFemale}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-3 sm:bottom-6 lg:bottom-8 left-3 sm:left-6 lg:left-8 text-white">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-headline font-bold">
                Ready to Wear
              </h3>
              <p className="text-xs sm:text-sm opacity-80">
                The foundation of the modern wardrobe
              </p>
            </div>
          </div>
          <div className="sm:col-span-2 relative group overflow-hidden rounded-lg sm:rounded-xl bg-surface-container-lowest h-64 sm:h-80 lg:h-auto">
            <img
              alt="Accessories"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={CategoryOne}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-3 sm:bottom-6 lg:bottom-8 left-3 sm:left-6 lg:left-8 text-white">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-headline font-bold">Accessories</h3>
              <p className="text-xs sm:text-sm opacity-80">The final punctuation</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg sm:rounded-xl bg-surface-container-lowest h-64 sm:h-80 lg:h-auto">
            <img
              alt="Footwear"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={CategoryFootwear}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white">
              <h3 className="text-base sm:text-lg lg:text-xl font-headline font-bold">Footwear</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg sm:rounded-xl bg-surface-container-lowest h-64 sm:h-80 lg:h-auto">
            <img
              alt="Objects"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={CategoryLifeStyle}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white">
              <h3 className="text-base sm:text-lg lg:text-xl font-headline font-bold">Lifestyle</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
