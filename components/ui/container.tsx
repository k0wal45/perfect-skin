import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";
import { type ComponentPropsWithRef } from "react";

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  full: "max-w-full",
} as const;

type ContainerProps = ComponentPropsWithRef<"div"> & {
  size?: keyof typeof sizes;
  asChild?: boolean;
};

export function Container({
  size = "lg",
  asChild,
  className,
  ...props
}: ContainerProps) {
  const Comp = asChild ? Slot.Root : "div";
  return (
    <Comp
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)}
      {...props}
    />
  );
}
