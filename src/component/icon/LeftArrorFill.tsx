import { SVGProps } from "react";

const LeftArrorFill = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 174 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <polygon points="0,50 0,70 50,70 50,50" fill="currentColor" />
    <polygon points="70,0 70,120 174,60" fill="currentColor" />
  </svg>
);

export default LeftArrorFill;
