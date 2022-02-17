import styles from './NoDataMessage.module.css';

const NoDataMessage = ({ text }) => {
  return (
    <div className={styles.message}>
      <p>{text}</p>
    </div>
  );
};

export default NoDataMessage;
