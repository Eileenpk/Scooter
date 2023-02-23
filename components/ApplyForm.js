import styles from "@/styles/form.module.css";
import Image from "next/image";
import close from "@/public/icons/close.svg";
import { useForm, ValidationError } from "@formspree/react";

export default function ApplyForm({ heading, setIsFormShown }) {
  const [state, handleSubmit] = useForm("mzbqrwre");
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
            Thanks for applying to the {heading} position, we'll be looking over
            your resume and get back to you soon!
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
        <h2 className={styles.formHeading}>{heading} </h2>
        <div className={styles.formInputWrapper}>
          <label htmlFor="full name">
            Full Name
            <input
              id="full name"
              type="full name"
              name="full name"
              className={styles.formInput}
              placeholder="Full Name"
              required
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
              required
            ></input>
            <ValidationError
              prefix="phone"
              field="phone"
              errors={state.errors}
            />
          </label>
          <label htmlFor="email">
            Email address
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
          </label>
          <label htmlFor="resume">
            Resume
            <textarea
              id="resume"
              type="resume"
              name="resume"
              className={styles.formInput}
              placeholder="resume"
              required
            ></textarea>
            <ValidationError
              prefix="resume"
              field="resume"
              errors={state.errors}
            />
          </label>

          <label htmlFor="time">
            Best time to reach you
            <input
              type="datetime-local"
              name="time"
              id="time"
              required
              className={styles.formInput}
            ></input>
            <ValidationError prefix="time" field="time" errors={state.errors} />
          </label>
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
          <button
            type="submit"
            disabled={state.submitting}
            className={styles.formSubmitBtn}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
