import React from "react";

const variants = {
  default: "bg-slate-900 text-white hover:bg-slate-800",
  outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  destructive: "bg-rose-600 text-white hover:bg-rose-700",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
};

export function Button({ className = "", variant = "default", type = "button", ...props }) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition ${variants[variant] || variants.default} ${className}`.trim()}
      {...props}
    />
  );
}
