import React from "react";

export default function Button({ 
  children, 
  type = "button", 
  variant = "primary", 
  size = { base: "md" }, // responsive size
  width = "auto", // can be string or responsive object
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

  // Size mapping
  const sizeMap = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg"
  };

  // Handle responsive sizes
  let sizeClasses = "";
  if (typeof size === "string") {
    sizeClasses = sizeMap[size] || sizeMap["md"];
  } else {
    for (const bp in size) {
      sizeClasses += `${bp === "base" ? "" : bp + ":"}${sizeMap[size[bp]]} `;
    }
  }

  // Handle width
  let widthClasses = "";
  if (typeof width === "string") {
    widthClasses = width === "full" ? "w-full" : width;
  } else {
    for (const bp in width) {
      widthClasses += `${bp === "base" ? "" : bp + ":"}${width[bp] === "full" ? "w-full" : width[bp]} `;
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${widthClasses}`}
    >
      {children}
    </button>
  );
}
