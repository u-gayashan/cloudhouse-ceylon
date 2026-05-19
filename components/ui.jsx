"use client";

export const Logo = ({ size = "md" }) => (
  <div className="logo" data-size={size}>
    <div className="logo-mark" />
    <div className="logo-name">
      Cloudhouse<em>Ceylon</em>
    </div>
  </div>
);

export const Eyebrow = ({ children, dot = true }) => (
  <div className="eyebrow">
    {dot && <span className="dot" />}
    {children}
  </div>
);

export const Tag = ({ children, variant }) => (
  <span className={`tag ${variant || ""}`}>{children}</span>
);

export const Btn = ({ children, onClick, variant = "", small, icon, ...rest }) => (
  <button
    className={`btn ${variant} ${small ? "small" : ""} ${icon ? "icon" : ""}`}
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>
);

export const PH = ({ label, className = "", style }) => (
  <div className={`ph ${className}`} style={style}>
    {label && <div className="ph-label">{label}</div>}
  </div>
);
