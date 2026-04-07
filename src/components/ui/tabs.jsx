import React from "react";

const TabsContext = React.createContext(null);

export function Tabs({ defaultValue, value, onValueChange, children, className = "" }) {
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value ?? internal;
  const setValue = onValueChange ?? setInternal;
  return <TabsContext.Provider value={{ current, setValue }}><div className={className}>{children}</div></TabsContext.Provider>;
}

export function TabsList({ className = "", ...props }) {
  return <div className={className} {...props} />;
}

export function TabsTrigger({ value, className = "", children, ...props }) {
  const ctx = React.useContext(TabsContext);
  const active = ctx?.current === value;
  return (
    <button
      type="button"
      onClick={() => ctx?.setValue(value)}
      data-state={active ? "active" : "inactive"}
      className={`${active ? "bg-slate-100 text-slate-900" : "text-slate-600"} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, ...props }) {
  const ctx = React.useContext(TabsContext);
  if (ctx?.current !== value) return null;
  return <div {...props}>{children}</div>;
}
