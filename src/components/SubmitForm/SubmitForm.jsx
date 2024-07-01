import styles from "./SubmitForm.module.css";

export default function SubmitForm() {
  return (
    <div className={styles.dialog}>
      <form action="" className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="customerName"
            name="customerName"
            className={styles.input}
            placeholder="Enter your full name"
          />
          <label htmlFor="customerName" className={styles.label}>
            Enter your full name:
          </label>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="number"
            id="mobileNumber"
            name="mobileNumber"
            inputMode="numeric"
            className={styles.input}
            placeholder="Enter your mobile number"
          />
          <label htmlFor="mobileNumber" className={styles.label}>
            Enter your mobile Number:
          </label>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="email"
            id="email"
            name="email"
            inputMode="email"
            className={styles.input}
            placeholder="Enter your mail id"
          />
          <label htmlFor="email" className={styles.label}>
            Enter your Email Id:
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="date">Enter your desired date of travel:</label>
          <input type="date" name="date" id="date" />
        </div>
        <div className={styles.inputContainer}>
          <p>Yours selected trip:</p>
          <label htmlFor="event">Goa</label>
          <input type="radio" name="" id="" />
        </div>
        <div className={styles.inputContainer}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
