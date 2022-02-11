import styles from './Button.module.css';

const Button = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>Button</button>
    </div>
  );
};

export default Button;
