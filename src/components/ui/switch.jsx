import React from "react";

export function Switch({ checked = false, onCheckedChange, defaultChecked = false, ...props }) {
  const isControlled = typeof onCheckedChange === 'function';
  const [internal, setInternal] = React.useState(defaultChecked);
  const value = isControlled ? checked : internal;
  return (
    <button
      type="button"
      aria-pressed={value}
      onClick={() => {
        const next = !value;
        if (isControlled) onCheckedChange(next);
        else setInternal(next);
      }}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${value ? 'bg-slate-900' : 'bg-slate-300'}`}
      {...props}
    >
      <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${value ? 'translate-x-5' : 'translate-x-1'}`} />
    </button>
  );
}
