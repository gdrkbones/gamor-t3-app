"use client";

import clsx from "clsx";
import { ComponentPropsWithRef, forwardRef } from "react";
import styles from "./styles.module.css";

export type MenuIconProps = {
  open?: boolean;
  onChangeOpen?: (open: boolean) => void;
};

const MenuIcon = forwardRef<
  HTMLDivElement,
  ComponentPropsWithRef<"div"> & MenuIconProps
>(({ className, ...props }, ref) => {
  return (
    <div
      className={clsx(styles["item"], props.open && styles["open"], className)}
      ref={ref}
      {...props}
      onClick={() => props.onChangeOpen && props.onChangeOpen(!props.open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
});

MenuIcon.displayName = "MenuIcon";

export default MenuIcon;
