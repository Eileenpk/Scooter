import styles from "@/styles/form.module.css";
import Image from "next/image";
import close from "@/public/icons/close.svg";
import { useForm, ValidationError } from "@formspree/react";

export default function Form({ heading, setIsFormShown }) {
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
          <h2 className={styles.thanksHeading}>
            Thanks for reaching out, we'll get back to you soon!
          </h2>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.formOverLay}>
      <form className={styles.form} onSubmit={handleSubmit}>
      <Image
          src={close}
          onClick={() => setIsFormShown(false)}
          className={`${styles.closeBtn} close`}
        />
        <h2 className={styles.formHeading}>
          {heading}{" "}
        </h2>

        <div className={styles.formInputWrapper}>
          <label htmlFor="full name">
            Full Name</label>
            <input
              id="full name"
              type="text"
              name="full name"
              className={styles.formInput}
              placeholder="Full Name"
              required
            ></input>
            <ValidationError prefix="name" field="name" errors={state.errors} />
          
          <label htmlFor="phone">
            Phone number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className={styles.formInput}
              placeholder="Phone number"
              required
            ></input>
            <ValidationError
              prefix="phone"
              field="phone"
              errors={state.errors}
            />
          
          <label htmlFor="email">
            Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              className={styles.formInput}
              placeholder="Email address"
              required
            ></input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          
          <label htmlFor="message">
            Message</label>
            <textarea
              id="message"
              type="text"
              name="message"
              className={styles.formInput}
              placeholder="Message"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          
          <label htmlFor="_optin">Subscribe to our newsletter box
          <input
            id="_optin"
            name="_optin"
            className={styles.formInput}
            type="checkbox"
            checked="true"
          ></input>
          <ValidationError
            prefix="_optin"
            field="_optin"
            errors={state.errors}
          />
          </label>
          <button className={styles.formSubmitBtn} type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
