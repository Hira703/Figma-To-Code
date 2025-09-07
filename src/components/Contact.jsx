import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-[var(--accent)]">
      <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
          Join Our Mailing List
        </h2>
        <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-xl mx-auto">
          Sign up to receive inspiration, product updates, and special offers from our team.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center w-full max-w-lg mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] 
                       sm:rounded-l-md sm:rounded-r-none rounded-md sm:rounded-none mb-3 sm:mb-0"
           
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[var(--primary)] text-white font-medium 
                       border border-[var(--primary)] sm:rounded-r-md sm:rounded-l-none rounded-md sm:rounded-none
                       hover:bg-[#043a58] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
