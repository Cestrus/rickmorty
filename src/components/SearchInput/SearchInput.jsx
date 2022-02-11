import styles from './SearchInput.module.css';

const SearchInput = () => {
  return (
    <div className={styles.wrapper}>
      <input
        type="search"
        placeholder="Search character"
        className={styles.input}
      />
    </div>
  );
};

export default SearchInput;
