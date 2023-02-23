import styles from "@/styles/form.module.css";
import Image from "next/image";
import close from "@/public/icons/close.svg";
import { useForm, ValidationError } from "@formspree/react";

export default function Form({ heading, setIsFormShown }) {
  // - Full Name
  // - Phone number
  // - Email address
  // - Message
  // - Subscribe to our newsletter box

  const [state, handleSubmit] = useForm("xknaregq");
  if (state.succeeded) {
    setTimeout(() => {
        setIsFormShown(false);
      }, 3000);
    return (
      <div className={styles.formOverLay}>
        <div className={`${styles.form} ${styles.succeededModal}`}>
          <Image
            src={close}
            onClick={() => setIsFormShown(false)}
            className={`close ${styles.closeBtn}`}
            width={25}
            height={25}
          />
          <h2 className={styles.thanksHeading}>Thanks for reaching out, we'll get back to you soon!</h2>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.formOverLay}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.formHeading}>
          {heading}{" "}
          <Image
            src={close}
            onClick={() => setIsFormShown(false)}
            className="close"
          />
        </h2>
        <label htmlFor="full name">
          Full Name
          <input
            id="full name"
            type="full name"
            name="full name"
            className={styles.formInput}
            placeholder="Full Name"
          ></input>
          <ValidationError prefix="name" field="name" errors={state.errors} />
        </label>
        <label htmlFor="phone">
          Phone number
          <input
            id="phone"
            type="phone"
            name="phone"
            className={styles.formInput}
            placeholder="Phone number"
          ></input>
          <ValidationError prefix="phone" field="phone" errors={state.errors} />
        </label>
        <label htmlFor="email">
          Email address
          <input
            id="email"
            type="email"
            name="email"
            className={styles.formInput}
            placeholder="Email address"
          ></input>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            id="message"
            type="message"
            name="message"
            className={styles.formInput}
            placeholder="Message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </label>
        <label htmlFor="_optin">Subscribe to our newsletter box</label>
        <input
          id="_optin"
          name="_optin"
          className={styles.formInput}
          type="checkbox"
          checked="true"
        ></input>
        <ValidationError prefix="_optin" field="_optin" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </section>
  );
}
