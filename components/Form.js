import styles from "@/styles/form.module.css";
import Image from "next/image";
import close from "@/public/icons/close.svg";
export default function Form({ heading, setIsFormShown }) {
  // - Full Name
  // - Phone number
  // - Email address
  // - Message
  // - Subscribe to our newsletter box
  return (
    <section className={styles.formOverLay}>
      <form className={styles.form}>
        <Image
          src={close}
          onClick={() => setIsFormShown(false)}
          className="close"
        />
        <h2 className={styles.formHeading}>{heading}</h2>
        <label>
          Full Name
          <input placeholder="Full Name"></input>
        </label>
        <label>
          Phone number
          <input placeholder="Phone number"></input>
        </label>
        <label>
          Email address
          <input placeholder="Email address"></input>
        </label>
        <label>
          Message
          <textarea placeholder="Message"></textarea>
        </label>
        <label>Subscribe to our newsletter box</label>
        <input type="checkbox"></input>

        <button>Submit</button>
      </form>
    </section>
  );
}
