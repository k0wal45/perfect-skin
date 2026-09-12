import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { type ComponentPropsWithRef, type ElementType } from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-serif text-4xl sm:text-5xl lg:text-6xl text-neutral-900 font-normal tracking-tight",
      h2: "font-serif text-3xl sm:text-4xl text-neutral-900 font-normal",
      h3: "font-serif text-2xl sm:text-3xl text-neutral-900",
      sectionSubtitle:
        "font-sans text-xs tracking-[0.2em] uppercase font-semibold text-neutral-500",
      body: "font-sans text-base text-neutral-700 leading-relaxed",
      bodyMuted: "font-sans text-sm text-neutral-500",
      label: "font-sans text-sm font-medium text-neutral-800",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

const defaultTags: Record<NonNullable<VariantProps<typeof typographyVariants>["variant"]>, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  sectionSubtitle: "p",
  body: "p",
  bodyMuted: "p",
  label: "span",
};

type TypographyProps = ComponentPropsWithRef<"p"> &
  VariantProps<typeof typographyVariants> & {
    asChild?: boolean;
  };

export function Typography({
  variant = "body",
  asChild,
  className,
  ...props
}: TypographyProps) {
  const Comp = asChild ? Slot.Root : defaultTags[variant!];
  return (
    <Comp
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
}
