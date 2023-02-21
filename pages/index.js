import Head from "next/head";
import Image from "next/image";
import phoneIcon from "@/public/icons/locate.svg";
import scooterIcon from "@/public/icons/scooter.svg";
import rideIcon from "@/public/icons/ride.svg";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import GetImageBasedOnWidth from "@/components/functions/GetImageBasedOnWidth";
import GetWindowWidth from "@/components/functions/GetWindowWidth";
export default function Home() {
  const { width } = GetWindowWidth();
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
          height="650px"
          arrow={true}
        />

        <section className={styles.processOuterWrapper}>
          <div className={styles.proccessCard}>
            <Image
              src={phoneIcon}
              alt="hand holding a phone icon"
              width={width > 768 ? 96 : 56}
              height={width > 768 ? 96 : 56}
              className={styles.proccessIcon}
            />
            <h3 className={styles.proccessHeading}>Locate with app</h3>
            <p className={styles.proccessText}>
              Use the app to find the nearest scooter to you. We are
              continuously placing scooters in the areas with most demand, so
              one should never be too far away.{" "}
            </p>
          </div>
          <div className={styles.proccessCard}>
            <Image
              src={scooterIcon}
              alt="scooter icon"
              width={width > 768 ? 96 : 56}
              height={width > 768 ? 96 : 56}
              className={styles.proccessIcon}
            />
            <h3 className={styles.proccessHeading}>Pick your scooter</h3>
            <p className={styles.proccessText}>
              We show the most important info for the scooters closest to you.
              So you know how much charge they have left and can see roughly how
              much it will cost.
            </p>
          </div>
          <div className={styles.proccessCard}>
            <Image
              src={rideIcon}
              alt="scooter driving icon"
              width={width > 768 ? 96 : 56}
              height={width > 768 ? 96 : 56}
              className={styles.proccessIcon}
            />
            <h3 className={styles.proccessHeading}>Enjoy the ride</h3>
            <p className={styles.proccessText}>
              Scan the QR code and the bike will unlock. Retract the cable lock,
              put on a helmet, and you’re off! Always lock bikes away from
              walkways and accessibility ramps.
            </p>
          </div>
        </section>

        <Feature
          featureInfo={[
            {
              heading: "Easy to use riding telemetry",
              text: `The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.`,
              image: "/images/telemetry.jpg",
              href:"/About",
              buttonText:"Learn More",
            },
            {
              heading: "Coming to a city near you",
              text: `Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.`,
              image: "/images/near-you.jpg",
              href:"/Locations",
              buttonText:"Learn More",
            },
            {
              heading: "Zero hassle payments",
              text: `Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.`,
              image: "/images/payments.jpg",
              href:"/About",
              buttonText:"Learn More",
            },
          ]}
        />
      </main>
    </>
  );
}
