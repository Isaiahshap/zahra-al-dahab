import { ReactNode } from "react";
import React from "react";

type HeadingProps = {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

export function Heading({ 
  children, 
  level = 2, 
  className = "" 
}: HeadingProps) {
  const baseClasses = "font-heading";
  
  const sizes = {
    1: "text-4xl md:text-5xl lg:text-6xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl",
    5: "text-lg md:text-xl",
    6: "text-base md:text-lg",
  };
  
  const Component = level === 1 ? 'h1' : 
                   level === 2 ? 'h2' : 
                   level === 3 ? 'h3' : 
                   level === 4 ? 'h4' : 
                   level === 5 ? 'h5' : 'h6';
  
  return (
    <Component className={`${baseClasses} ${sizes[level]} ${className}`}>
      {children}
    </Component>
  );
}

type TextProps = {
  children: ReactNode;
  variant?: "body" | "lead" | "small" | "muted";
  className?: string;
};

export function Text({ 
  children, 
  variant = "body", 
  className = "" 
}: TextProps) {
  const variants = {
    body: "text-base text-gray-800 dark:text-gray-200",
    lead: "text-lg md:text-xl text-gray-800 dark:text-gray-200",
    small: "text-sm text-gray-800 dark:text-gray-200",
    muted: "text-sm text-gray-600 dark:text-gray-400",
  };
  
  return (
    <p className={`${variants[variant]} ${className}`}>
      {children}
    </p>
  );
} 