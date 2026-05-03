import { CategoryFootwear, CategoryLifeStyle, CategoryOne, HeroCategoryFemale } from "@images";

const Category = () => {
  return (
    <section className="bg-surface-container py-16 px-8 pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-headline font-extrabold tracking-tight">
              Browse by Category
            </h2>
            <p className="text-on-surface-variant">
              Defined by purpose, refined by design.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-surface-container-lowest">
            <img
              alt="Ready to Wear"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={HeroCategoryFemale}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-headline font-bold">
                Ready to Wear
              </h3>
              <p className="text-sm opacity-80">
                The foundation of the modern wardrobe
              </p>
            </div>
          </div>
          <div className="md:col-span-2 relative group overflow-hidden rounded-xl bg-surface-container-lowest">
            <img
              alt="Accessories"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={CategoryOne}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-headline font-bold">Accessories</h3>
              <p className="text-sm opacity-80">The final punctuation</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl bg-surface-container-lowest">
            <img
              alt="Footwear"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={CategoryFootwear}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-headline font-bold">Footwear</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl bg-surface-container-lowest">
            <img
              alt="Objects"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={CategoryLifeStyle}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-headline font-bold">Lifestyle</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
