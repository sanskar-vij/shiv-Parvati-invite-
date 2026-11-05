import React from 'react';

// Ornate Lotus Motif for card headers and footers
export const LotusMotif: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}> = ({ className = '', size = 28, color = '#8A5D28', style }) => (
  <svg
    width={size}
    height={size * 0.75}
    viewBox="0 0 100 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    style={style}
  >
    {/* Center petal */}
    <path
      d="M50 5 C45 25, 42 45, 50 68 C58 45, 55 25, 50 5 Z"
      fill="url(#goldGradientLotus)"
      stroke={color}
      strokeWidth="1.5"
    />
    {/* Inner Left Petal */}
    <path
      d="M50 20 C32 25, 25 45, 46 68 C35 50, 42 32, 50 20 Z"
      fill="url(#goldGradientLotusLight)"
      stroke={color}
      strokeWidth="1.2"
    />
    {/* Inner Right Petal */}
    <path
      d="M50 20 C68 25, 75 45, 54 68 C65 50, 58 32, 50 20 Z"
      fill="url(#goldGradientLotusLight)"
      stroke={color}
      strokeWidth="1.2"
    />
    {/* Outer Left Petal */}
    <path
      d="M45 35 C20 40, 10 55, 38 70 C22 60, 30 46, 45 35 Z"
      fill="url(#goldGradientLotus)"
      stroke={color}
      strokeWidth="1"
    />
    {/* Outer Right Petal */}
    <path
      d="M55 35 C80 40, 90 55, 62 70 C78 60, 70 46, 55 35 Z"
      fill="url(#goldGradientLotus)"
      stroke={color}
      strokeWidth="1"
    />
    {/* Base Calyx */}
    <path
      d="M32 68 C42 74, 58 74, 68 68 C60 72, 40 72, 32 68 Z"
      fill={color}
    />
    {/* Side Tendrils */}
    <path
      d="M30 69 C18 69, 12 64, 6 67 C14 62, 22 66, 30 69 Z"
      fill={color}
    />
    <path
      d="M70 69 C82 69, 88 64, 94 67 C86 62, 78 66, 70 69 Z"
      fill={color}
    />
    {/* Gradients */}
    <defs>
      <linearGradient id="goldGradientLotus" x1="0" y1="0" x2="100" y2="75" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5DF9E" />
        <stop offset="0.5" stopColor="#D4AF37" />
        <stop offset="1" stopColor="#996D28" />
      </linearGradient>
      <linearGradient id="goldGradientLotusLight" x1="0" y1="0" x2="100" y2="75" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF2CE" />
        <stop offset="0.6" stopColor="#E2BD5A" />
        <stop offset="1" stopColor="#B8862D" />
      </linearGradient>
    </defs>
  </svg>
);

// Ornamental Divider with central lotus and swirling flourishes
export const OrnamentalDivider: React.FC<{
  className?: string;
  width?: number | string;
  color?: string;
  style?: React.CSSProperties;
}> = ({ className = '', width = '100%', color = '#9C6F32', style }) => (
  <div className={`flex items-center justify-center gap-2 ${className}`} style={{ width, ...style }}>
    <svg width="60" height="12" viewBox="0 0 60 12" fill="none">
      <path
        d="M0 6 H35 C42 6, 46 2, 52 2 C56 2, 59 5, 59 6 C59 7, 56 10, 52 10 C46 10, 42 6, 35 6"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <circle cx="58" cy="6" r="1.5" fill={color} />
      <circle cx="48" cy="6" r="1" fill={color} />
    </svg>
    <LotusMotif size={20} color={color} />
    <svg width="60" height="12" viewBox="0 0 60 12" fill="none" className="rotate-180">
      <path
        d="M0 6 H35 C42 6, 46 2, 52 2 C56 2, 59 5, 59 6 C59 7, 56 10, 52 10 C46 10, 42 6, 35 6"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <circle cx="58" cy="6" r="1.5" fill={color} />
      <circle cx="48" cy="6" r="1" fill={color} />
    </svg>
  </div>
);

// Vintage Floral Card Wreath / Crown (used on Card 2 Our Families)
export const FloralWreathCrown: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className = '',
  style,
}) => (
  <div className={`relative flex items-center justify-center ${className}`} style={style}>
    <svg width="180" height="42" viewBox="0 0 180 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central Lotus */}
      <g transform="translate(72, 4) scale(0.36)">
        <path
          d="M50 5 C45 25, 42 45, 50 68 C58 45, 55 25, 50 5 Z"
          fill="#E7C978"
          stroke="#8A5D28"
          strokeWidth="1.5"
        />
        <path
          d="M50 20 C32 25, 25 45, 46 68 C35 50, 42 32, 50 20 Z"
          fill="#FFF0C4"
          stroke="#8A5D28"
          strokeWidth="1.2"
        />
        <path
          d="M50 20 C68 25, 75 45, 54 68 C65 50, 58 32, 50 20 Z"
          fill="#FFF0C4"
          stroke="#8A5D28"
          strokeWidth="1.2"
        />
      </g>
      {/* Left Floral Arch */}
      <path
        d="M68 22 C48 10, 25 14, 8 28"
        stroke="#8A5D28"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left leaves */}
      <path d="M52 16 C48 12, 42 12, 40 16 C42 18, 48 18, 52 16 Z" fill="#9C7235" />
      <path d="M36 17 C32 12, 26 13, 24 18 C27 20, 32 19, 36 17 Z" fill="#9C7235" />
      <circle cx="20" cy="22" r="2.5" fill="#D4AF37" />
      <circle cx="10" cy="27" r="2" fill="#D4AF37" />

      {/* Right Floral Arch */}
      <path
        d="M112 22 C132 10, 155 14, 172 28"
        stroke="#8A5D28"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right leaves */}
      <path d="M128 16 C132 12, 138 12, 140 16 C138 18, 132 18, 128 16 Z" fill="#9C7235" />
      <path d="M144 17 C148 12, 154 13, 156 18 C153 20, 148 19, 144 17 Z" fill="#9C7235" />
      <circle cx="160" cy="22" r="2.5" fill="#D4AF37" />
      <circle cx="170" cy="27" r="2" fill="#D4AF37" />
    </svg>
  </div>
);

// Diya Lamp SVG Icon
export const DiyaIcon: React.FC<{
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}> = ({ className = '', size = 24, style }) => (
  <div className={`relative inline-block ${className}`} style={{ width: size, height: size, ...style }}>
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      {/* Flame Glow */}
      <circle cx="20" cy="14" r="8" fill="#FFB703" opacity="0.4" className="animate-pulse" />
      {/* Flame */}
      <path
        d="M20 6 C22 11, 24 14, 20 18 C16 14, 18 11, 20 6 Z"
        fill="url(#flameGrad)"
        className="animate-diya"
      />
      {/* Diya Bowl */}
      <path
        d="M8 22 C10 30, 30 30, 32 22 C32 20, 8 20, 8 22 Z"
        fill="url(#diyaGrad)"
        stroke="#8B572A"
        strokeWidth="1"
      />
      {/* Diya Base */}
      <path
        d="M15 28 L14 34 L26 34 L25 28 Z"
        fill="#9C6B30"
        stroke="#6E4218"
        strokeWidth="1"
      />
      <ellipse cx="20" cy="34" rx="8" ry="2" fill="#6E4218" />
      <defs>
        <linearGradient id="flameGrad" x1="20" y1="6" x2="20" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF275" />
          <stop offset="0.5" stopColor="#FF8C00" />
          <stop offset="1" stopColor="#D90429" />
        </linearGradient>
        <linearGradient id="diyaGrad" x1="8" y1="20" x2="32" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4AF37" />
          <stop offset="0.6" stopColor="#B37D28" />
          <stop offset="1" stopColor="#693F12" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Temple Bell SVG Icon
export const TempleBellIcon: React.FC<{
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}> = ({ className = '', size = 24, style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    {/* Hanging Chain */}
    <line x1="16" y1="0" x2="16" y2="6" stroke="#D4AF37" strokeWidth="1.5" />
    <circle cx="16" cy="6" r="2" fill="#B8860B" stroke="#D4AF37" strokeWidth="0.8" />
    {/* Bell Body */}
    <path
      d="M16 8 C11 8, 8 16, 7 24 L25 24 C24 16, 21 8, 16 8 Z"
      fill="url(#bellGold)"
      stroke="#7A4B11"
      strokeWidth="1"
    />
    {/* Bell Rim */}
    <path
      d="M5 24 C5 22.5, 27 22.5, 27 24 C27 26, 5 26, 5 24 Z"
      fill="#D4AF37"
      stroke="#7A4B11"
      strokeWidth="1"
    />
    {/* Bell Clapper */}
    <circle cx="16" cy="28" r="2.5" fill="#8B5A2B" stroke="#D4AF37" strokeWidth="0.8" />
    <defs>
      <linearGradient id="bellGold" x1="7" y1="8" x2="25" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9E29C" />
        <stop offset="0.4" stopColor="#D4AF37" />
        <stop offset="1" stopColor="#8A5A18" />
      </linearGradient>
    </defs>
  </svg>
);

// Trishul (Trident) SVG Motif
export const TrishulMotif: React.FC<{
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}> = ({ className = '', size = 28, style }) => (
  <svg
    width={size}
    height={size * 1.4}
    viewBox="0 0 40 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    {/* Central Prong */}
    <path d="M20 2 L22 18 L18 18 Z" fill="#D4AF37" stroke="#7A4B11" strokeWidth="0.8" />
    {/* Left Prong */}
    <path d="M20 22 C12 20, 8 12, 10 4 C9 14, 15 22, 20 22 Z" fill="#D4AF37" stroke="#7A4B11" strokeWidth="0.8" />
    {/* Right Prong */}
    <path d="M20 22 C28 20, 32 12, 30 4 C31 14, 25 22, 20 22 Z" fill="#D4AF37" stroke="#7A4B11" strokeWidth="0.8" />
    {/* Base bar */}
    <ellipse cx="20" cy="24" rx="10" ry="2.5" fill="#D4AF37" stroke="#7A4B11" strokeWidth="0.8" />
    {/* Damru */}
    <path d="M16 28 L24 28 L18 34 L22 34 L16 40 L24 40" fill="#9C6B30" stroke="#7A4B11" strokeWidth="0.8" />
    {/* Staff */}
    <rect x="19" y="40" width="2" height="15" fill="#7A4B11" />
  </svg>
);
