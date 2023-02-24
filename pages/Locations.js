import Hero from "@/components/Hero";
import Form from "@/components/Form";
import GetImageBasedOnWidth from "@/components/functions/GetImageBasedOnWidth";
import { useState } from "react";
import styles from "@/styles/locations.module.css";
import Head from "next/head";
export default function Locations() {

  const [isFormShown, setIsFormShown] = useState(false);
  const openModal = () => {
    if (!isFormShown) {
      setIsFormShown(true);
    } else {
      setIsFormShown(false);
    }
  };


  return (
    <article>
      <Head>
        <title>Scoot Locations</title>
        <meta name="description" content="Find a Scoot location near you and rent a scooter today" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="Locations"
        src={GetImageBasedOnWidth(
          "/images/careers-location-hero-mobile.jpg",
          "/images/careers-locations-hero-tablet.jpg",
          "/images/careers-locations-hero-desktop.jpg"
        )}
        plain={true}
      />
      <section className={styles.locationsSection}>
        <div className={styles.locationsSectionImageContainer}></div>
        <div className={`${styles.locationsCard} ${styles.locationsCard1}`}>
          <h4 className={styles.locationCardHeading}>New York</h4>
        </div>
        <div className={`${styles.locationsCard} ${styles.locationsCard2}`}>
          <h4 className={styles.locationCardHeading}>London</h4>
        </div>
        <div className={`${styles.locationsCard} ${styles.locationsCard3}`}>
          <h4 className={styles.locationCardHeading}>Jakarta</h4>
        </div>
        <div className={`${styles.locationsCard} ${styles.locationsCard4}`}>
          <h4 className={styles.locationCardHeading}>Yokohama</h4>
        </div>
      </section>
      <section className={styles.locationsNotListedSection}>
        <h2 className={styles.locationsNotListedSectionHeading}>
          Your City Not Listed?
        </h2>
        <p className={styles.locationsNotListedSectionText}>
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>

        <button onClick={openModal} className={styles.locationsNotListedSectionBtn}>
          Message Us
        </button>
      </section>
      {isFormShown ? (
          <div>
            <Form heading='Message Us' setIsFormShown={setIsFormShown}/>
          </div>
        ) : (
          ""
        )}
    </article>
  );
}
