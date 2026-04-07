import React from "react";

const variants = {
  default: "bg-slate-900 text-white",
  secondary: "bg-slate-100 text-slate-700",
  destructive: "bg-rose-100 text-rose-700",
};

export function Badge({ className = "", variant = "default", ...props }) {
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${variants[variant] || variants.default} ${className}`.trim()} {...props} />;
}
