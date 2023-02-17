import styles from "@/styles/footer.module.css";
import Image from "next/image";
import appStore from "@/public/icons/app-store.svg";
import googleStore from "@/public/icons/google-play.svg";
import background from '@/public/patterns/semi-circles.svg'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerDownloadSectionWrapper}>
        <h2 className={styles.footerHeader}>Sign up and Scoot off today</h2>

        <div className={styles.footerSignupIconWrapper}>

        <Image
            src={background}
            width={113}
            height={40}
            alt="App store link"
            href="https://www.apple.com/app-store/"
            className={styles.footerSignupIcons}
          />
          <Image
            src={appStore}
            width={113}
            height={40}
            alt="App store link"
            href="https://www.apple.com/app-store/"
            className={styles.footerSignupIcons}
          />
          <Image
            src={googleStore}
            width={113}
            height={40}
            alt="Google play store link"
            href="https://play.google.com/store/games"
            className={styles.footerSignupIcons}
          />
        </div>
      </section>
    </footer>
  );
}
