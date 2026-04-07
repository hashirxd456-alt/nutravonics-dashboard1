import React from "react";

export const Input = React.forwardRef(function Input({ className = "", ...props }, ref) {
  return <input ref={ref} className={`h-12 w-full border border-slate-300 bg-white px-4 text-slate-900 outline-none transition focus:border-slate-400 ${className}`.trim()} {...props} />;
});
