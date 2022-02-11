import styles from './Header.module.css';

const Header = (props) => {
  const { className: layoutClasses, userName } = props;
  const newClasses = `${layoutClasses} ${styles.header}`;
  return (
    <header className={newClasses}>
      <div className={styles.signUser}>
        <div className={styles.userName}>{userName || 'Unknown user'}</div>
        <div className={styles.signIn}>Sing in</div>
      </div>
    </header>
  );
};

export default Header;
