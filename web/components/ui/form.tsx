import * as React from "react";
import { cn } from "@/lib/utils";

const baseField =
  "w-full rounded-xl border border-noir-line bg-noir-surface px-4 py-3 text-[15px] text-craie placeholder:text-craie-muted shadow-sm transition-colors focus:border-or focus:outline-none focus:ring-2 focus:ring-or/40";

export function Label({
  className,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("mb-1.5 block font-condensed text-sm font-semibold uppercase tracking-[0.08em] text-craie", className)}
      {...props}
    >
      {children}
    </label>
  );
}

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(baseField, className)} {...props} />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(baseField, "min-h-28 resize-y", className)} {...props} />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select ref={ref} className={cn(baseField, "appearance-none bg-[length:1.1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10", className)}
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' stroke='%23E4CE7E' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 8l5 5 5-5'/%3E%3C/svg%3E\")",
    }}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";

export function Field({
  label,
  htmlFor,
  hint,
  children,
  className,
}: {
  label: string;
  htmlFor?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-craie-muted">{hint}</p>}
    </div>
  );
}
