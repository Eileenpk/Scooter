import { useState, useEffect } from "react";
import styles from "@/styles/header.module.css";
import Link from "next/link";
import Image from "next/image";
import hamburger from "@/public/icons/hamburger.svg";
import close from "@/public/icons/close.svg";
import logo from "@/public/images/logo.svg";
import GetWindowWidth from "@/components/functions/GetWindowWidth";

export default function Header() {
  // nav state shown based on window size
  const { width } = GetWindowWidth();
  useEffect(() => {
    setIsNavOpen(true);
  }, [width > 768]);

  // close nav bar on window resize

  useEffect(() => {
    const windowSizeChanged = (action) => {
      setIsNavOpen(action);
    };

    if (width < 768) {
      window.addEventListener("resize", windowSizeChanged);
      windowSizeChanged(false);
    } else {
      window.addEventListener("resize", windowSizeChanged);
      windowSizeChanged(true);
    }

    return () => {
      window.removeEventListener("resize", windowSizeChanged);
    };
  }, [width]);

  // open and close mobile navbar
  const [isNavOpen, setIsNavOpen] = useState("");
  const openNavBar = () => {
    setIsNavOpen(true);
  };

  const closeNavBar = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={styles.header}>
      <div
        className={
          isNavOpen ? styles.headerNavIsHidden : styles.headerNavIsOpen
        }
        aria-hidden={isNavOpen ? "true" : "false"}
      >
        <Image
          src={hamburger}
          width={19}
          height={16}
          alt="open navigation"
          onClick={openNavBar}
          className={styles.headerNavIcon}
        />

        <Link href="/">
          <Image
            src={logo}
            width={75}
            height={20}
            alt="Scoot logo"
            onClick={openNavBar}
            className={styles.headerLogo}
          />
        </Link>
      </div>

      <div
        className={isNavOpen ? styles.headerNavOpen : styles.headerNavHidden}
        aria-hidden={isNavOpen ? "false" : "true"}
      >
        <div className={styles.headerNavScreenOverLay}></div>
        <Image
          src={close}
          width={19}
          height={16}
          alt="close navigation"
          onClick={closeNavBar}
          className={styles.headerNavIcon}
        />

        <Link href="/">
          <Image
            src={logo}
            width={75}
            height={20}
            alt="Scoot logo"
            onClick={openNavBar}
            className={styles.headerLogo}
          />
        </Link>

        <nav className={styles.headerNav}>
          <Link
            href="/About"
            className={styles.headerNavLink}
            onClick={() => setIsNavOpen(width > 767 ? true : false)}
          >
            About
          </Link>
          <Link
            href="/Locations"
            className={styles.headerNavLink}
            onClick={() => setIsNavOpen(width > 767 ? true : false)}
          >
            Locations
          </Link>
          <Link
            href="/Careers"
            className={styles.headerNavLink}
            onClick={() => setIsNavOpen(width > 767 ? true : false)}
          >
            Careers
          </Link>

          <a className={`${styles.headerNavBtn} button`} href="#download">
            Get Scooting
          </a>
        </nav>
      </div>
    </header>
  );
}
