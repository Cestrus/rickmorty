import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <Main className={styles.main}>{children}</Main>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;
