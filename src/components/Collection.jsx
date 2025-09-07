import React from "react";
import collection1 from "../assets/images/c1.png";
import collection2 from "../assets/images/c2.png";
import collection3 from "../assets/images/c3.png";

export default function Collection() {
  const collections = [
    { img: collection1, alt: "Collection 1" },
    { img: collection2, alt: "Collection 2" },
    { img: collection3, alt: "Collection 3" },
  ];

  return (
    <section className="py-20 bg-[var(--accent)]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            Our Collections
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto">
            Explore our curated furniture collections designed to elevate your space.
          </p>
        </div>

        {/* Collections Images */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8">
  {collections.map((collection, index) => (
    <div
      key={index}
      className={`relative ${
        index === 1 ? "lg:-mt-14" : "" // offset only on large screens
      }`}
    >
      <img
        src={collection.img}
        alt={collection.alt}
        className={`shadow-lg w-full md:w-80 object-cover ${
          index === 0
            ? "rounded-tl-4xl" // first image top-left rounded
            : index === collections.length - 1
            ? "rounded-br-4xl" // last image bottom-right rounded
            : ""
        }`}
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
