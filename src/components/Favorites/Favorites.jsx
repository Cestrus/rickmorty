import Button from '../Button/Button';
import FavoritesList from '../FavoritesList/FavoritesList';
import { useNavigate } from 'react-router-dom';
import styles from './Favorites.module.css';

const Favorites = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>FAVORITES LIST</div>
      <FavoritesList />
      <Button name="Back" clickHandler={clickHandler} />
    </div>
  );
};

export default Favorites;
