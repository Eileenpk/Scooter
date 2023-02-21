import Image from "next/image";
import styles from "@/styles/values.module.css";

import tech from "@/public/images/our-tech.jpg";
import integrity from "@/public/images/our-integrity.jpg";
import community from "@/public/images/our-community.jpg";

export default function Values({heading}) {
  return (
    <section className={styles.values}>
      <h2 className={styles.valuesHeading}>{heading}</h2>
      <div className={styles.value}>
        <Image
          className={styles.valueImage}
          src={tech}
          width={240}
          height={240}
          alt="hand holding mobile phone"
        />
        <div className={styles.valueCircleWithNumber}>01</div>
        <h3 className={styles.valueHeading}>Our tech</h3>
        <p>
          We’re using cutting edge technology to drive accessible urban
          transportation forward. Our fully electric scooters are a joy to ride!
        </p>
      </div>
      <div className={styles.value}>
        <Image
          className={styles.valueImage}
          src={integrity}
          width={240}
          height={240}
          alt="person on motorcycle "
        />
        <div className={styles.valueCircleWithNumber}>02</div>
        <h3 className={styles.valueHeading}>Our integrity</h3>
        <p>
          We are fully committed to deliver a great yet safe, sustainable
          micro-mobility experience in every city we serve.
        </p>
      </div>
      <div className={styles.value}>
        <Image
          className={styles.valueImage}
          src={community}
          width={240}
          height={240}
          alt="crowd of people walking"
        />
        <div className={styles.valueCircleWithNumber}>03</div>
        <h3 className={styles.valueHeading}>Our community</h3>
        <p>
          We support every community we serve. All workers are paid a living
          wage based on their location and are Scoot employees.
        </p>
      </div>
    </section>
  );
}
