import React, { useState } from "react";
import Button from "./Button";
import { GiSofa } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-sm " style={{ backgroundColor: "var(--accent) " }}>
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest flex items-center gap-2">
            <span style={{ color: "var(--primary)" }}>Furni</span>
            <span style={{ color: "#FFA500" }}>ture</span>
            <GiSofa className="text-[var(--primary)] w-6 h-6" />
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-[var(--primary)] transition" style={{ color: "var(--text-secondary)" }}>Home</a>
          <a href="#" className="hover:text-[var(--primary)] transition" style={{ color: "var(--text-secondary)" }}>Products</a>
          <a href="#" className="hover:text-[var(--primary)] transition" style={{ color: "var(--text-secondary)" }}>Collections</a>
          <a href="#" className="hover:text-[var(--primary)] transition" style={{ color: "var(--text-secondary)" }}>About Us</a>
          <a href="#" className="hover:text-[var(--primary)] transition" style={{ color: "var(--text-secondary)" }}>Contact</a>
        </nav>

        {/* Buttons Desktop */}
        <div className="hidden md:flex gap-4">
          <Button variant="outline" size="md">Login</Button>
          <Button variant="primary" size="md">Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--primary)] focus:outline-none"
          >
            {isOpen ? (
              <span className="text-3xl">&times;</span>
            ) : (
              <span className="text-3xl">&#9776;</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--accent)] shadow-md">
          <nav className="flex flex-col gap-4 py-4 text-center font-medium">
            <a href="#" className="hover:text-[var(--primary)]" style={{ color: "var(--text-secondary)" }}>Home</a>
            <a href="#" className="hover:text-[var(--primary)]" style={{ color: "var(--text-secondary)" }}>Products</a>
            <a href="#" className="hover:text-[var(--primary)]" style={{ color: "var(--text-secondary)" }}>Collections</a>
            <a href="#" className="hover:text-[var(--primary)]" style={{ color: "var(--text-secondary)" }}>About Us</a>
            <a href="#" className="hover:text-[var(--primary)]" style={{ color: "var(--text-secondary)" }}>Contact</a>
          </nav>
          <div className="flex flex-col gap-2 py-4 px-6">
            <Button variant="outline" size="md">Login</Button>
            <Button variant="primary" size="md">Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
}
