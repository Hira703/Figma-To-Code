import React from "react";
import heroImg from "../assets/images/Mask Group.jpg";
import Button from "./Button";

export default function Hero({
  containerPadding = "p-6 sm:p-8 md:p-10 lg:p-12",
  containerMaxWidth = "max-w-sm sm:max-w-md lg:max-w-lg",
  textAlignSmall = "text-center",
  textAlignMedium = "md:text-left"
}) {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 md:bg-black/10"></div>

      {/* Card */}
      <div className="container relative z-10 flex justify-center md:justify-end px-4 sm:px-6 lg:px-8">
        <div
          className={`bg-white ${containerPadding} rounded-2xl shadow-xl ${containerMaxWidth} ${textAlignSmall} ${textAlignMedium}`}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[var(--primary)] leading-snug lg:leading-tight">
            Discover the <span className="text-[#FFA500]">Perfect</span> Furniture
          </h1>
          <p className="mt-3 sm:mt-4 text-[var(--text-secondary)] text-sm sm:text-base lg:text-lg">
            Upgrade your home with stylish, modern, and comfortable furniture
            designed to fit your lifestyle.
          </p>
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
            <Button
              variant="primary"
              size={{ base: "md", md: "lg" }}
              width={{ base: "full", md: "auto" }}
            >
              Shop Now
            </Button>
            <Button
              variant="outline"
              size={{ base: "md", md: "lg" }}
              width={{ base: "full", md: "auto" }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
