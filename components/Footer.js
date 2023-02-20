import styles from "@/styles/footer.module.css";
import Image from "next/image";
import appStore from "@/public/icons/app-store.svg";
import googleStore from "@/public/icons/google-play.svg";
import facebook from "@/public/icons/facebook.svg";
import twitter from "@/public/icons/twitter.svg";
import instagram from "@/public/icons/instagram.svg";
import Link from "next/link";
import getWindowWidth from "@/components/functions/GetWindowWidth"
export default function Footer() {
  const {width} = getWindowWidth()
  return (
    <footer className={styles.footer}>
      <section className={styles.footerDownloadSectionWrapper}>
        <h2 className={styles.footerHeader}>Sign up and Scoot off today</h2>

        <div className={styles.footerSignupIconWrapper}>
          <Image
            src={appStore}
            width={width > 1200? 182 : 113}
            height={width > 1200 ? 56 : 40}
            alt="App store link"
            href="https://www.apple.com/app-store/"
            className={styles.footerSignupIcons}
          />
          <Image
            src={googleStore}
            width={width > 1200? 182 : 113}
            height={width > 1200 ? 56 : 40}
            alt="Google play store link"
            href="https://play.google.com/store/games"
            className={styles.footerSignupIcons}
          />
        </div>
      </section>
      <section className={styles.footerLinkWrapper}>
        <h2 className={styles.footerSubheader}>Scoot</h2>
        <nav className={styles.footerNav}>
          <Link href="/About" className={styles.footerNavLink}>
            About
          </Link>
          <Link href="/Locations" className={styles.footerNavLink}>
            Location
          </Link>
          <Link href="/Careers" className={styles.footerNavLink}>
            Careers
          </Link>

          <div className={styles.footerSocialLinksWrapper}>
            <Link
              href="https://facebook.com/"
              className={styles.footerSocialLink}
            >
              <Image
                src={facebook}
                width={24}
                height={24}
                alt="facebook icon that links to facebook page"
              />
            </Link>
            <Link
              href="https://twitter.com/"
              className={styles.footerSocialLink}
            >
              <Image
                src={twitter}
                width={24}
                height={24}
                alt="twitter icon that links to twitter page"
              />
            </Link>
            <Link
              href="https://instagram.com/"
              className={styles.footerSocialLink}
            >
              <Image
                src={instagram}
                width={24}
                height={24}
                alt="instagram icon that links to instagram page"
              />
            </Link>
          </div>
        </nav>
      </section>
    </footer>
  );
}
