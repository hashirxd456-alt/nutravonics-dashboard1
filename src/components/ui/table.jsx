import React from "react";

export const Table = ({ className = "", ...props }) => <div className="w-full overflow-auto"><table className={`w-full text-left ${className}`.trim()} {...props} /></div>;
export const TableHeader = (props) => <thead {...props} />;
export const TableBody = (props) => <tbody {...props} />;
export const TableRow = ({ className = "", ...props }) => <tr className={`border-b border-slate-200 ${className}`.trim()} {...props} />;
export const TableHead = ({ className = "", ...props }) => <th className={`px-3 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 ${className}`.trim()} {...props} />;
export const TableCell = ({ className = "", ...props }) => <td className={`px-3 py-3 text-sm text-slate-700 align-top ${className}`.trim()} {...props} />;
