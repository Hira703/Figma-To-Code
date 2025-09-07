import React from "react";
import purchase from "../assets/images/purchaseSecure.png";
import warehouse from "../assets/images/warehouse.png";
import homeDecor from "../assets/images/c1.png";

const HowItWorks = () => {
  const steps = [
    {
      img: purchase,
      title: "Purchase Securely",
      desc: "Choose your favorite furniture and complete your order through our safe and secure checkout process.",
    },
    {
      img: warehouse,
      title: "Ships From Warehouse",
      desc: "Once your order is confirmed, our team carefully packs and ships it directly from our warehouse.",
    },
    {
      img: homeDecor,
      title: "Style Your Room",
      desc: "Receive your furniture and transform your space with stylish, comfortable, and durable pieces.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
            How It Works
          </h2>
          <p className="text-[var(--text-secondary)] mt-2">
            From purchase to delivery, here’s how we make your furniture
            shopping seamless.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Image wrapper */}
              <div className="relative w-64 h-64">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover rounded-2xl shadow-md"
                />

                {/* Big white circle to "cut out" bottom */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full "></div>

                {/* Small black circle with step number */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {index + 1}.
                </div>
              </div>

              {/* Text */}
              <h3 className="mt-10 text-xl font-semibold text-[var(--primary)]">
                {step.title}
              </h3>
              <p className="mt-2 text-[var(--text-secondary)] text-sm max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
