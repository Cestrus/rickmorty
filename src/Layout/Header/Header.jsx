import styles from './Header.module.css';

const Header = (props) => {
  const { className: layoutClasses } = props;
  const newClasses = `${layoutClasses} ${styles.header}`;
  return (
    <header className={newClasses}>
      <div className={styles.signUser}></div>
    </header>
  );
};

export default Header;
