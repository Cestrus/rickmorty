import styles from './Main.module.css';

const Main = (props) => {
  const { className: layoutClasses, children, ...restProps } = props;
  const newClasses = `${layoutClasses} ${styles.main}`;
  return (
    <main className={newClasses} {...restProps}>
      {children}
    </main>
  );
};

export default Main;
