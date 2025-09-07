import React from 'react';
import dining from "../assets/images/Dining.png";
import living from "../assets/images/living.jpg";
import bedroom from "../assets/images/bedroom.png";

const Browse = () => {
  const categories = [
    { img: living, title: "Living Room" },
    { img: dining, title: "Dining Room" },
    { img: bedroom, title: "Bedroom" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            Browse Our Categories
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg">
            Explore our wide range of furniture collections designed for every space in your home. Find the perfect match for your style and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
  {categories.map((item, index) => (
    <div key={index} className="flex flex-col items-center justify-center">
      <img
        src={item.img}
        alt={item.title}
        className=" shadow-md w-full md:w-80 h-64 object-cover"
      />
      <h3 className="mt-3 text-lg md:text-xl font-semibold text-[var(--primary)]">
        {item.title}
      </h3>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Browse;
