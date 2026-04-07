import React from "react";
export const ScrollArea = ({ className = "", ...props }) => <div className={`overflow-auto ${className}`.trim()} {...props} />;
