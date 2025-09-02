// FadeIn.tsx - Reusable Fade-In Animation Component
"use client";

import { motion } from "framer-motion";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  as?:
    | "div"
    | "section"
    | "article"
    | "main"
    | "header"
    | "footer"
    | "nav"
    | "aside"
    | "span"
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  id?: string;
  "data-testid"?: string;
  role?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean;
}

const FadeIn = ({ children, as = "div", ...props }: FadeInProps) => {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default FadeIn;