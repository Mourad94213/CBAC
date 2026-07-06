"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-noir-line", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between gap-4 py-5 text-left font-display text-lg uppercase tracking-tight text-craie transition-colors hover:text-or",
        className,
      )}
      {...props}
    >
      {children}
      <Plus className="h-5 w-5 shrink-0 text-or transition-transform duration-300 ease-smooth group-data-[state=open]:rotate-45" strokeWidth={1.75} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
    {...props}
  >
    <div className={cn("pb-5 pr-10 text-[15px] leading-relaxed text-craie-soft", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";
