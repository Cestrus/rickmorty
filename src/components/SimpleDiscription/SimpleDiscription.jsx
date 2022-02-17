import styles from './SimpleDiscription.module.css';

const SimpleDiscr = (props) => {
  const { title, text } = props;
  return (
    <div className={styles.discription}>
      <p>
        <span className={styles.title}>{title}: </span>
        <span className={styles.text}>{text}</span>
      </p>
    </div>
  );
};

export default SimpleDiscr;
