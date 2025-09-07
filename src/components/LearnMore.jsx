import React from "react";
import img from "../assets/images/image 97.png";
import Button from "./Button";

export default function LearnMore() {
  return (
    <section className="py-16 md:py-20 bg-[var(--accent)] overflow-visible">
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 md:gap-12">

        {/* Left side - Text and Button */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary)]">
            Discover More About Our Products
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg max-w-md md:max-w-lg mx-auto md:mx-0">
            Learn about the quality, design, and craftsmanship behind our furniture. Enhance your living space with our modern and comfortable collections.
          </p>
          <div className="mt-4">
            <Button variant="primary" size="md" width="w-auto lg:w-48">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right side - Image with full green circle */}
        <div className="flex-1 flex justify-center md:justify-center items-center relative mt-8 md:mt-0 md:mr-20">

          {/* Image */}
          <img
            src={img}
            alt="Learn More"
            className="rounded-2xl shadow-lg w-64 sm:w-80 md:w-[400px] lg:w-[450px] object-cover z-10"
          />

          {/* Full Green Circle */}
          <div
            className="absolute top-1/2 lg:right-36 -right-0 transform -translate-y-1/2 translate-x-1/4 sm:translate-x-1/3 md:translate-x-1/2 w-24 sm:w-32 md:w-40 lg:w-48 h-24 sm:h-32 md:h-40 lg:h-48 rounded-full bg-[#09513B] z-0"
          ></div>
        </div>

      </div>
    </section>
  );
}
