import styles from "./BookNow.module.css";

export default function Input({ type, id, placeholder, labelText }) {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className={styles.input}
        required
      />
      <label htmlFor={id} className={styles.label}>
        {labelText}
      </label>
    </div>
  );
}
