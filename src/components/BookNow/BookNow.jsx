// local style imports
import { useEffect, useState } from "react";
import styles from "./BookNow.module.css";

// redux imports
import { useSelector } from "react-redux";
import Input from "./Input";

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
        {/* name input */}
        <Input
          type="text"
          id="customerName"
          placeholder="Enter your full name"
          labelText="Enter your full name:"
        />

        {/* input number container */}
        <Input
          type="number"
          id="mobileNumber"
          placeholder="Enter your mobile number"
          labelText="Mobile Number:"
        />

        {/* input email id container */}
        <Input
          type="email"
          id="email"
          placeholder="Enter your email id"
          labelText="Enter your Email Id:"
        />

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
