import styles from "@/styles/hero.module.css";
import Image from "next/image";
import arrowImg from "@/public/patterns/right-arrow.svg";
import arrowImgMobile from "@/public/patterns/right-arrow.png"
export default function Hero({ title, text, btn, src, height, arrow, plain }) {
  const heroStyles = {
    backgroundImage: `url(${src})`,
    height: height,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <section className={styles.hero} style={heroStyles}>
      <h1 className={plain ? styles.heroHeadingOnly : styles.heroHeading }>{title}</h1>
      <p className={styles.heroText}>{text}</p>
      <div className={styles.heroBtn}>{btn}</div>
      {arrow && (
        <Image
          src={arrowImgMobile}
        //   width={447}
        //   height={138}
          className={styles.heroArrow}
        />
      )}
    </section>
  );
}
