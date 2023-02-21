import Hero from "@/components/Hero";
import Feature from "@/components/Feature";

import GetImageBasedOnWidth from "@/components/functions/GetImageBasedOnWidth";
export default function Careers() {
  return (
    <>
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
        },
      ]}
      />
    </>
  );
}
