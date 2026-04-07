import React from "react";
export const Separator = ({ className = "", orientation = "horizontal", ...props }) => (
  <div className={`${orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full'} bg-slate-200 ${className}`.trim()} {...props} />
);
