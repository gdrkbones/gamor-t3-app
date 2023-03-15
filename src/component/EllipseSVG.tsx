import { SVGProps } from "react";

const EllipseSVG = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 102 62"
    width={100}
    stroke="currentColor"
    // strokeWidth={2}
    fill="none"
    {...props}
  >
    <ellipse
      cx="50%"
      cy="50%"
      rx="50"
      ry="20"
      clipPath="polygon(51 31,5 -2,-2 -2,-2 62,102 62,102 0)"
    />
  </svg>
);

export default EllipseSVG;
