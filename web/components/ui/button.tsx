import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-condensed font-semibold uppercase tracking-[0.12em] transition-all duration-300 ease-smooth hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-or focus-visible:ring-offset-2 focus-visible:ring-offset-noir disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-rouge text-craie shadow-soft hover:bg-rouge-dark hover:shadow-glow-rouge",
        secondary:
          "bg-bleu text-craie shadow-soft hover:bg-bleu-deep hover:shadow-glow-bleu",
        outline:
          "border border-craie/30 bg-transparent text-craie hover:border-or hover:text-or",
        soft:
          "bg-rouge-tint text-rouge-light hover:bg-rouge/20 hover:text-craie",
        ghost: "text-craie hover:bg-craie/10",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[15px]",
        lg: "h-[3.25rem] px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
