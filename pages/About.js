import Hero from "@/components/Hero";
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
      <h1>About page</h1>
    </>
  );
}
