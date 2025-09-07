import React from "react";

export default function Button({ 
  children, 
  type = "button", 
  variant = "primary", 
  size = "md", 
  width = "auto", // new prop
  onClick 
}) {
  // Base classes
  const baseClasses = "rounded-full font-medium transition ";

  // Variant classes
  let variantClasses = "";
  switch(variant) {
    case "primary":
      variantClasses = "bg-[var(--primary)] text-white hover:bg-[#043a58]";
      break;
    case "secondary":
      variantClasses = "bg-[var(--accent)] text-[var(--primary)] hover:bg-[#c7d7e6]";
      break;
    case "outline":
      variantClasses = "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white";
      break;
    default:
      variantClasses = "bg-[var(--primary)] text-white hover:bg-[#043a58]";
  }

  // Size classes
  let sizeClasses = "";
  switch(size) {
    case "sm":
      sizeClasses = "px-4 py-1 text-sm";
      break;
    case "md":
      sizeClasses = "px-6 py-2 text-base";
      break;
    case "lg":
      sizeClasses = "px-8 py-3 text-lg";
      break;
    default:
      sizeClasses = "px-6 py-2 text-base";
  }

  // Width class
  const widthClass = width === "full" ? "w-full" : typeof width === "string" ? width : "auto";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass}`}
    >
      {children}
    </button>
  );
}
