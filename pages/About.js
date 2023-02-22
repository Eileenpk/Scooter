import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Values from "@/components/Values";
import styles from "@/styles/about.module.css";
import Image from "next/image";
import arrow from "@/public/icons/dropDownArrow.png";
import GetImageBasedOnWidth from "@/components/functions/GetImageBasedOnWidth";
import ToggleClass from "@/components/functions/ToggleClass";

import { useState } from "react";
export default function About() {
  const [isActive, setIsActive] = useState([]);

  return (
    <article>
      <Hero
        title="About"
        src={GetImageBasedOnWidth(
          "/images/about-hero-mobile.jpg",
          "/images/about-hero-tablet.jpg",
          "/images/about-hero-desktop.jpg"
        )}
        plain={true}
      />
      <Feature
        featureInfo={[
          {
            heading: "Mobility for the digital era",
            text: `Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.`,
            image: "/images/digital-era.jpg",
            reverse: true,
          },
          {
            heading: "Better urban living",
            text: `We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.`,
            image: "/images/better-living.jpg",
          },
        ]}
      />
      <section className={styles.aboutSection}>
        <Values heading="Our values" />
      </section>
      <section className={styles.dropDownSection}>
        <h2>FAQ</h2>
        <label>How it works</label>
        <details className={styles.aboutFaqDetails}>
          <summary className={styles.aboutFaqSummary}>
            How do I download the app?
            <span
              role="button"
              aria-label="open or close dropdown menu"
              className={styles.aboutFaqArrow}
            >
              <Image
                src={arrow}
                width={18}
                height={12}
                alt="drop down arrow"
                id="element1"
                className={`rotate`}
                onClick={() => ToggleClass("element1", "active")}
              />
            </span>
          </summary>
          <p>
            To download the Scoot app, you can search “Scoot” in both the App
            and Google Play stores. An even simpler way to do it would be to
            click the relevant link at the bottom of this page and you’ll be
            re-directed to the correct page.
          </p>
        </details>
        <details className={styles.aboutFaqDetails}>
          <summary className={styles.aboutFaqSummary}>
            Can I find a nearby Scoots?
            <span
              role="button"
              aria-label="open or close dropdown menu"
              className={styles.aboutFaqArrow}
            >
              <Image
                src={arrow}
                width={18}
                height={12}
                alt="drop down arrow"
                id="element2"
                className={`rotate`}
                onClick={() => ToggleClass("element2", "active")}
              />
            </span>
          </summary>
          <p>
            Definitely! Simply open up the app and allow us to find your
            location while using it. We'll show you all of the closest Scoots
            and some extra useful information.
          </p>
        </details>
        <details className={styles.aboutFaqDetails}>
          <summary className={styles.aboutFaqSummary}>
            Do I need a license to ride?
            <span
              role="button"
              aria-label="open or close dropdown menu"
              className={styles.aboutFaqArrow}
            >
              <Image
                src={arrow}
                width={18}
                height={12}
                alt="drop down arrow"
                id="element3"
                className={`rotate`}
                onClick={() => ToggleClass("element3", "active")}
              />
            </span>
          </summary>
          <p>
            Yup! We provide information inside the app regarding local laws and
            the license you need to be able to ride our Scoots.
          </p>
        </details>

        <label>Safe driving</label>

        <details className={styles.aboutFaqDetails}>
          <summary className={styles.aboutFaqSummary}>
            Should I wear a helmet?
            <span
              role="button"
              aria-label="open or close dropdown menu"
              className={styles.aboutFaqArrow}
            >
              <Image
                src={arrow}
                width={18}
                height={12}
                alt="drop down arrow"
                id="element4"
                className={`rotate`}
                onClick={() => ToggleClass("element4", "active")}
              />
            </span>
          </summary>
          <p>
            Yes, please do! All cities have different laws. But we strongly
            strongly strongly recommend always wearing a helmet regardless of
            the local laws. We like you and we want you to be as safe as
            possible while Scooting.
          </p>
        </details>

        <details className={styles.aboutFaqDetails}>
          <summary className={styles.aboutFaqSummary}>
            How about the rules & regulations?
            <span
              role="button"
              aria-label="open or close dropdown menu"
              className={styles.aboutFaqArrow}
            >
              <Image
                src={arrow}
                width={18}
                height={12}
                alt="drop down arrow"
                id="element5"
                className={`rotate`}
                onClick={() => ToggleClass("element5", "active")}
              />
            </span>
          </summary>
          <p>
            Now is not the time to be a rule breaker. Be sure you're complying
            with all local laws and regulations. Also, just be a good human
            being. Be sure not to park your Scoot where it can block access to
            buildings or get in people's way.
          </p>
        </details>

        <details className={styles.aboutFaqDetails}>
          <summary className={styles.aboutFaqSummary}>
            What if I damage my Scoot?
            <span
              role="button"
              aria-label="open or close dropdown menu"
              className={styles.aboutFaqArrow}
            >
              <Image
                src={arrow}
                width={18}
                height={12}
                alt="drop down arrow"
                id="element6"
                className={`rotate`}
                onClick={() => ToggleClass("element6", "active")}
              />
            </span>
          </summary>
          <p>
            Be sure to read our terms and conditions carefully. Not the most fun
            job we know but we make it as clear as possible. There's an option
            to add insurance for each trip, or you can sign up for annual
            insurance if you're a regular Scooter.
          </p>
        </details>
      </section>
    </article>
  );
}
