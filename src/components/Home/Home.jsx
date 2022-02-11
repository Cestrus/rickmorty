import SearchInput from '../SearchInput/SearchInput';
import CharactersList from '../CharactersList/CharactersList';
import Button from '../Button/Button';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <SearchInput />
      <CharactersList />
      <Button />
    </div>
  );
};

export default Home;
