import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Values from "@/components/Values";
import JobCard from "@/components/JobCard";
// import { useState } from "react";
import styles from "@/styles/careers.module.css";

import GetImageBasedOnWidth from "@/components/functions/GetImageBasedOnWidth";
export default function Careers() {

  return (
    <article>
      <Hero
        title="Careers"
        src={GetImageBasedOnWidth(
          "/images/careers-location-hero-mobile.jpg",
          "/images/careers-locations-hero-tablet.jpg",
          "/images/careers-locations-hero-desktop.jpg"
        )}
        plain={true}
      />
      <Feature
        featureInfo={[
          {
            heading: "Care to join our mission?",
            text: `We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!`,
            image: "/images/join-us.jpg",
            openModal: true,
            buttonText: "Say Hello",
          },
        ]}
      />

      <section className={styles.careersValueSection}>
        <Values heading="Why join us?" />
      </section>

      <section className={styles.careersJobsSection}>
        <JobCard heading='General Manager' location='Jakarta, Indonesia' />
        <JobCard heading='UI/UX Designer' location='Yokohama, Japan' />
        <JobCard heading='Blog Content Copywriter' location='New York, United States' />
        <JobCard heading='Graphic Designer' location='New York, United States' />
        <JobCard heading='Fleet Supervisor' location='Jakarta, Indonesia' />
        <JobCard heading='UX Analyst' location='London, United Kingdom' />
      </section>
    </article>
  );
}
