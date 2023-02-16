import { useState } from "react";
import styles from "@/styles/header.module.css";
import Link from "next/link";
import Image from "next/image";
import hamburger from "@/public/icons/hamburger.svg";
import close from "@/public/icons/close.svg";
import logo from "@/public/images/logo.svg";
export default function Header() {
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
      {!isNavOpen ? (
        <>
          <Image
            src={hamburger}
            width={19}
            height={16}
            alt="hamburger icon to open navigation"
            onClick={openNavBar}
            className={styles.headerNavIcon}
          />

          <Image
            src={logo}
            width={75}
            height={20}
            alt="hamburger icon to open navigation"
            onClick={openNavBar}
            className={styles.headerLogo}
          />
        </>
      ) : (
        <>
        <div className={styles.headerNavScreenOverLay}></div>
          <Image
            src={close}
            width={19}
            height={16}
            alt="x icon to close navigation"
            onClick={closeNavBar}
            className={styles.headerNavIcon}
          />
          <Image
            src={logo}
            width={75}
            height={20}
            alt="hamburger icon to open navigation"
            onClick={openNavBar}
            className={styles.headerLogo}
          />

          <nav className={styles.headerNav}>
            <Link href="/About" className={styles.headerNavLink}>
              About
            </Link>
            <Link href="/Locations" className={styles.headerNavLink}>
              Location
            </Link>
            <Link href="/Careers" className={styles.headerNavLink}>
              Careers
            </Link>

            <button className={styles.headerNavBtn}>Get Scooting</button>
          </nav>
        </>
      )}
    </header>
  );
}
