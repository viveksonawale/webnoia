"use client";

import type { ReactNode } from "react";

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
}

export function ScrollStackItem({
  children,
  itemClassName = "",
}: ScrollStackItemProps) {
  return (
    <div
      className={`scroll-stack-item ${itemClassName}`.trim()}
    >
      {children}
    </div>
  );
}

export default function ScrollStack({
  children,
  className = "",
}: ScrollStackProps) {
  return (
    <div
      className={`scroll-stack ${className}`.trim()}
    >
      {children}
    </div>
  );
}