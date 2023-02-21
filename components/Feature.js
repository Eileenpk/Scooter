import styles from "@/styles/feature.module.css";
import Image from "next/image";
import GetWindowWidth from "@/components/functions/GetWindowWidth";
export default function Feature(featureInfo) {
  const { width } = GetWindowWidth();
  const openModal = () => {
    console.log('modal opened!')
  }
  const featuresmap = featureInfo.featureInfo.map((card) => {
    return (
      <section className={styles.feature} key={card.heading}>
        <div
          className={
            card.reverse ? styles.reverse : styles.featureImageContainer
          }
        >
          <Image
            src={card.image}
            alt={card.heading}
            width={width > 768 ? 445 : 311}
            height={width > 768 ? 445 : 311}
            className={styles.featureMainImage}
          />
        </div>
        <div className={styles.featureInfoWrapper}>
          <h2>{card.heading}</h2>
          <p className={styles.featureText}>{card.text}</p>
          {card.buttonText ? <button onClick={card.openModal ? () => openModal() : ''}>{card.href? <a href={card.href} className={styles.featureAnchorText}>{card.buttonText}</a> :card.buttonText}</button> : ''}
        </div>
      </section>
    );
  });

  return <section className={styles.features}>{featuresmap}</section>;
}
