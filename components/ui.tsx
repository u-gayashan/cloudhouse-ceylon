"use client";

import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ size = "md" }: LogoProps) => (
  <div className="logo" data-size={size}>
    <div className="logo-mark" />
    <div className="logo-name">
      Cloudhouse<em>Ceylon</em>
    </div>
  </div>
);

interface EyebrowProps {
  children: React.ReactNode;
  dot?: boolean;
}

export const Eyebrow = ({ children, dot = true }: EyebrowProps) => (
  <div className="eyebrow">
    {dot && <span className="dot" />}
    {children}
  </div>
);

interface TagProps {
  children: React.ReactNode;
  variant?: string;
}

export const Tag = ({ children, variant }: TagProps) => (
  <span className={`tag ${variant || ""}`}>{children}</span>
);

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: string;
  small?: boolean;
  icon?: boolean;
}

export const Btn = ({ children, onClick, variant = "", small, icon, ...rest }: BtnProps) => (
  <button
    className={`btn ${variant} ${small ? "small" : ""} ${icon ? "icon" : ""}`}
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>
);

interface PHProps {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const PH = ({ label, className = "", style }: PHProps) => (
  <div className={`ph ${className}`} style={style}>
    {label && <div className="ph-label">{label}</div>}
  </div>
);
