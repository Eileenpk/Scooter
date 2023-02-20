import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import GetImageBasedOnWidth from "@/components/functions/GetImageBasedOnWidth";
export default function Home() {
  return (
    <>
      <Head>
        <title>Scoot</title>
        <meta name="description" content="Rent a scooter near you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero
          title="Scooter sharing made simple"
          text="Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!"
          btn={<button className={styles.headerNavBtn}>Get Scooting</button>}
          src={GetImageBasedOnWidth(
            "/images/home-hero-mobile.jpg",
            "/images/home-hero-tablet.jpg",
            "/images/home-hero-desktop.jpg"
          )}
          height='650px'
          arrow={true}
        />
      </main>
    </>
  );
}
