import { useState } from "react";
import ApplyForm from "./ApplyForm";
import styles from "@/styles/jobCard.module.css";
export default function JobCard({ heading, location }) {
  const [isFormShown, setIsFormShown] = useState(false);
  const openModal = () => {
    if (!isFormShown) {
      setIsFormShown(true);
    } else {
      setIsFormShown(false);
    }
  };

  return (
    <section className={styles.jobCard}>
      <div className={styles.jobCardInfoContainer}>
        <h4 className={styles.jobCardHeading}>{heading}</h4>
        <p className={styles.jobCardText}>{location}</p>
      </div>

      <button className={styles.jobCardBtn} onClick={openModal}>
        Apply
      </button>

      {isFormShown ? (
        <div className={styles.jobCardModalContainer}>
          <ApplyForm heading={heading} setIsFormShown={setIsFormShown} />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
