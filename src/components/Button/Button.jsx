import styles from './Button.module.css';

const Button = (props) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={props.clickHandler}>
        {props.name || 'button'}
      </button>
    </div>
  );
};

export default Button;
