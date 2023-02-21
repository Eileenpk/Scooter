import styles from "@/styles/hero.module.css";
import Image from "next/image";
import GetWindowWidth from "@/components/functions/GetWindowWidth";
import arrowImg from "@/public/patterns/right-arrow.svg";
import arrowImgMobile from "@/public/patterns/right-arrow.png";
import circles from "@/public/patterns/white-circles.svg";


export default function Hero({ title, text, btn, src, height, arrow, plain }) {
  const { width } = GetWindowWidth();

  const heroStyles = {
    backgroundImage: `url(${src})`,
    height: height,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <section className={styles.hero} style={heroStyles}>
      <h1 className={plain ? styles.heroHeadingOnly : styles.heroHeading}>
        {title}
      </h1>
      <p className={styles.heroText}>{text}</p>
      <div className={styles.heroBtn}>{btn}</div>
      {arrow && width < 768 && (
        <Image
          src={arrowImgMobile}
          alt="arrow pointing right"
          className={styles.heroArrow}
        />
      )}

      {arrow && width > 768 && (
        <div className={styles.heroImageContainer}>
          <div className={styles.heroLineImage}></div>
          <Image
            src={arrowImg}
            alt="arrow pointing right"
            className={styles.heroArrow}
          />

          <Image 
          src={circles}
          alt='three white circles in a row'
          className={styles.heroCircles}
          width={234}
          />
        </div>
      )}
    </section>
  );
}
