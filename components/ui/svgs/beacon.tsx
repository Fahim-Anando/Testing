import * as React from "react";

export function Beacon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      aria-label="Beacon"
      viewBox="0 0 120 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <text
        x="0"
        y="17"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="16"
        fontWeight="600"
        fill="currentColor">
        Beacon
      </text>
    </svg>
  );
}
