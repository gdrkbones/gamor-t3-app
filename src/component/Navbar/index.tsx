"use client";
import EllipseWrapper from "~/component/EllipseWrapper";
import ScrollContext from "~/context/HtmlScroll";
import clsx from "clsx";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import MenuIcon from "../icon/Menu";
import styles from "./navbar.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import generateDiceBearAvataaars from "~/utils/RandAvatar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { setScroll } = useContext(ScrollContext);
  const { data: session } = useSession();

  useEffect(() => {
    setScroll(!open);
  }, [open, setScroll]);

  return (
    <div className={styles.navbar}>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */}
      <div className={clsx(styles["menu"], open && styles["open"])}>
        <EllipseWrapper href="" className={styles["menu-item"]}>
          Home
        </EllipseWrapper>
        <EllipseWrapper href="" className={styles["menu-item"]}>
          Stream
        </EllipseWrapper>
        <EllipseWrapper href="" className={styles["menu-item"]}>
          Party
        </EllipseWrapper>
        <EllipseWrapper href="" className={styles["menu-item"]}>
          Premium
        </EllipseWrapper>
      </div>

      <div className={styles.title}>
        <p>Gamor</p>
        <MenuIcon
          open={open}
          onChangeOpen={(value) => setOpen(value)}
          className={styles["menu-icon"]}
        ></MenuIcon>
      </div>

      {!session ? (
        <div className={styles.auth}>
          <Link href="/api/auth/signin" className={styles["auth-button"]}>
            Signin
          </Link>
          <Link href="" className={styles["auth-button"]}>
            Create account
          </Link>
        </div>
      ) : (
        <div className={styles["auth"]}>
          <p className={styles["username"]}>{session.user.name}</p>
          <button className={styles["userlogo"]}>
            <Image
              src={
                session.user.image || generateDiceBearAvataaars(session.user.id)
              }
              alt="user avatar"
              width={48}
              height={48}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
