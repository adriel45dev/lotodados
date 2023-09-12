import * as React from "react";
import { SVGProps } from "react";
const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="currentColor"
    transform="rotate(180)"
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="m16 8-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8-8-8z" />
    <path d="M16 30a14 14 0 1 1 14-14 14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z" />
    <path
      d="M0 0h32v32H0z"
      data-name="&lt;Transparent Rectangle&gt;"
      style={{
        fill: "none",
      }}
    />
  </svg>
);
export default BackIcon;
