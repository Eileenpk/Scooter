import styles from "@/styles/feature.module.css";
import Image from "next/image";
export default function Feature(featureInfo) {

  const featuresmap = featureInfo.featureInfo.map((card) => {
    return (
      <section className={styles.feature} key={card.heading}>
        <div className={card.reverse ? styles.reverse : styles.featureImageContainer}>
          <Image
            src={card.image}
            alt={card.heading}
            width={311}
            height={311}
            className={styles.featureMainImage}
          />
        </div>
        <h2>{card.heading}</h2>
        <p>{card.text}</p>
        <button>Learn More</button>
      </section>
    );
  });
  console.log(featuresmap);

  return <section className={styles.features}>{featuresmap}</section>;
}
