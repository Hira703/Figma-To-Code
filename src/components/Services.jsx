import React from "react";
import { services } from "../data/servicesData";

export default function Services() {
  return (
    <section className="py-8 bg-[var(--accent)] w-full">
      {/* Full-width flex wrapper */}
      <div className="flex flex-col gap-12 px-6 md:px-12">
        {/* Services List */}
        <div className="flex flex-col md:flex-row gap-12 justify-evenly items-start">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start max-w-xs">
              <div className="flex items-center gap-4">
                <img src={service.img} alt={service.title} className="w-12 h-12" />
                <h3 className="text-xl font-semibold text-[var(--primary)]">{service.title}</h3>
              </div>
              <p className="text-[var(--text-secondary)] mt-2 text-sm md:text-base">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
