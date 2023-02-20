import Hero from "@/components/Hero";
import GetImageBasedOnWidth from "@/components/functions/GetImageBasedOnWidth";
export default function Locations() {
  return (
    <>
      <Hero
        title="Locations"
        src={GetImageBasedOnWidth(
          "/images/careers-location-hero-mobile.jpg",
          "/images/careers-location-hero-tablet.jpg",
          "/images/careers-location-hero-desktop.jpg"
        )}
        plain={true}
      />
      <h1>Locations page</h1>
    </>
  );
}
