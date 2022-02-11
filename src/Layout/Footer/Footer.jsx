import styles from './Footer.module.css';

const Footer = (props) => {
  const { className: layoutClasses } = props;
  const newClasses = `${layoutClasses} ${styles.footer}`;
  return (
    <footer className={newClasses}>
      <div className={styles.copyright}>Все права защищены © 2022</div>
    </footer>
  );
};

export default Footer;
