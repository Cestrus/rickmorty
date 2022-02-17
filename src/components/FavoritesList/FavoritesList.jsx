import { connect } from 'react-redux';
import NoDataMessage from '../NoDataMessage/NoDataMessage';
import Character from '../Character/Character';
import styles from './FavoritesList.module.css';

const FavoritesList = ({ favorites }) => {
  return (
    <div className={styles.container}>
      {favorites.length ? (
        favorites.map((id) => {
          const character = JSON.parse(localStorage.getItem(id));
          return (
            <Character
              key={character.name + character.id}
              character={character}
            />
          );
        })
      ) : (
        <NoDataMessage text="Not favorite characters yet" />
      )}
    </div>
  );
};

const mapStateToProps = ({ favorites }) => {
  return {
    favorites,
  };
};

export default connect(mapStateToProps)(FavoritesList);
