import styles from "@/styles/feature.module.css";
import Image from "next/image";
import GetWindowWidth from "@/components/functions/GetWindowWidth";
import Form from "./Form";
import { useState } from "react";

export default function Feature(featureInfo) {
  const { width } = GetWindowWidth();
  const [isFormShown, setIsFormShown] = useState(false);
  const openModal = () => {
    if (!isFormShown) {
      setIsFormShown(true);
    } else {
      setIsFormShown(false);
    }
  };

  const featuresMap = featureInfo.featureInfo.map((card, index) => {
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
            preload='true'
          />
        </div>
        <div className={styles.featureInfoWrapper}>
          <h2>{card.heading}</h2>
          <p className={styles.featureText}>{card.text}</p>
          {card.buttonText ? (
            <button onClick={card.openModal ? openModal : () => {}}>
              {card.href ? (
                <a href={card.href} className={styles.featureAnchorText}>
                  {card.buttonText}
                </a>
              ) : (
                card.buttonText
              )}
            </button>
          ) : (
            ""
          )}
        </div>
        {isFormShown ? (
          <div>
            <Form heading={card.buttonText} setIsFormShown={setIsFormShown}/>
          </div>
        ) : (
          ""
        )}
      </section>
    );
  });

  return <section className={styles.features}>{featuresMap}</section>;
}
