import React from "react";

export function Card({ className = "", ...props }) {
  return <div className={`bg-white ${className}`.trim()} {...props} />;
}

export function CardHeader({ className = "", ...props }) {
  return <div className={`p-6 ${className}`.trim()} {...props} />;
}

export function CardTitle({ className = "", ...props }) {
  return <h3 className={`text-xl font-semibold text-slate-900 ${className}`.trim()} {...props} />;
}

export function CardContent({ className = "", ...props }) {
  return <div className={`px-6 pb-6 ${className}`.trim()} {...props} />;
}
