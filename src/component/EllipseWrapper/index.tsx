import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";
import EllipseSVG from "../EllipseSVG";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
  href: string;
  className?: string;
}

const EllipseWrapper = ({ children, href, className }: Props) => {
  return (
    <Link href={href} className={clsx(styles["ellipse-link"], className)}>
      <EllipseSVG className={styles["ellipse"]} />
      {children}
    </Link>
  );
};

export default EllipseWrapper;
