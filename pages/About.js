import Hero from "@/components/Hero";
import Feature from "@/components/Feature";

import GetImageBasedOnWidth from "@/components/functions/GetImageBasedOnWidth";
export default function About() {
  return (
    <>
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
    </>
  );
}
