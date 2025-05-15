import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 50"
    width="120"
    height="30"
    aria-label="SoftSell Logo"
    {...props}
  >
    <text
      x="10"
      y="35"
      fontFamily="var(--font-clash-display), Arial, sans-serif"
      fontSize="30"
      fontWeight="600"
      fill="hsl(var(--primary))"
      className="transition-colors duration-300"
    >
      SoftSell
    </text>
    <circle cx="155" cy="25" r="7" fill="hsl(var(--accent))" className="transition-colors duration-300" />
  </svg>
);

export default Logo;
