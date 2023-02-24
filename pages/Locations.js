import Hero from "@/components/Hero";
import LocationsCard from "@/components/LocationsCard";
import GetImageBasedOnWidth from "@/components/functions/GetImageBasedOnWidth";
import Image from "next/image";
import styles from '@/styles/locations.module.css'
export default function Locations() {
  return (
    <article>
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
        <Image
          src={GetImageBasedOnWidth(
            "/images/world-map-mobile.png",
            "/images/world-map-tablet.png",
            "/images/world-map-desktop.png"
          )}
          width={311}
          height={152}
          className={styles.locationsMapImage}
        />
        <LocationsCard location="New York"/>
        <LocationsCard location="London"/>
        <LocationsCard location="Jakarta"/>
        <LocationsCard location="Yokohama"/>
      </section>
      <section className={styles.locationsNotListedSection}>
        <h2 className={styles.locationsNotListedSectionHeading}>Your City Not Listed?</h2>
        <p className={styles.locationsNotListedSectionText}>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>

        <button className={styles.locationsNotListedSectionBtn}>Message Us</button>
      </section>
    </article>
  );
}
