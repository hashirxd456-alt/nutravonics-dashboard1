import React from "react";

export const Textarea = React.forwardRef(function Textarea({ className = "", ...props }, ref) {
  return <textarea ref={ref} className={`w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 ${className}`.trim()} {...props} />;
});
