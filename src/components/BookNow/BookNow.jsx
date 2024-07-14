// local style imports
import { useEffect, useState } from "react";
import styles from "./BookNow.module.css";

// redux imports
import { useSelector } from "react-redux";

export default function BookNow() {
  const eventName = useSelector((state) => state.eventName);
  const price = useSelector((state) => state.price);

  const [amount, setAmount] = useState(price);

  function handleOnChange(event) {
    console.log(event.target.value);
    setAmount(event.target.value * price);
  }

  return (
    <section className={styles.container}>
      <p className={styles.heading}>Book Now</p>
      <form action="" className={styles.form}>
        {/* input name container */}
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="customerName"
            name="customerName"
            className={styles.input}
            placeholder="Enter your full name"
            required
          />
          <label htmlFor="customerName" className={styles.label}>
            Enter your full name:
          </label>
        </div>

        {/* input number container */}
        <div className={styles.inputContainer}>
          <input
            type="number"
            id="mobileNumber"
            name="mobileNumber"
            inputMode="numeric"
            className={styles.input}
            placeholder="Enter your mobile number"
            required
          />
          <label htmlFor="mobileNumber" className={styles.label}>
            Mobile Number:
          </label>
        </div>
        {/* input email id container */}
        <div className={styles.inputContainer}>
          <input
            type="email"
            id="email"
            name="email"
            inputMode="email"
            className={styles.input}
            required
            placeholder="Enter your mail id"
          />
          <label htmlFor="email" className={styles.label}>
            Enter your Email Id:
          </label>
        </div>

        {/* total number of persons container */}
        <div className={styles.inputContainer}>
          <input
            type="number"
            id="persons"
            name="persons"
            inputMode="numeric"
            className={styles.input}
            placeholder="Total No. of persons"
            defaultValue={1}
            onChange={() => {
              handleOnChange(event);
            }}
          />
          <label htmlFor="persons" className={styles.label}>
            Total No. of persons:
          </label>
        </div>

        {/* date selector input */}
        <div className={styles.inputContainer}>
          <label htmlFor="date">Date of travel:</label>
          <input
            type="date"
            name="date"
            id="date"
            required
            className={styles.dateInput}
          />
        </div>

        {/* trip/ trek details */}
        <div className={styles.inputContainer}>
          <label htmlFor="tripName">Selected Trip/ Trek Name:</label>
          <input
            type="text"
            name="tripName"
            id="tripName"
            disabled
            value={eventName}
            className={styles.tripName}
            readOnly
          />
        </div>

        {/* amount container */}
        <div className={styles.amountContainer}>
          <label htmlFor="amount" className={styles.amountLabel}>
            Amount: Rs:
          </label>
          <input
            type="text"
            name="amount"
            id="amount"
            value={amount}
            readOnly
            className={styles.amountInput}
          />
        </div>
        <div className={styles.buttonContainer}>
          <input type="submit" className={styles.button} />
        </div>
      </form>
    </section>
  );
}
