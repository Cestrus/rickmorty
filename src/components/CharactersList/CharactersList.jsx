import Character from '../Character/Character';
import NoDataMessage from '../NoDataMessage/NoDataMessage';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import styles from './CharactersList.module.css';

const CharactersList = (props) => {
  return (
    <div className={styles.container}>
      {props.isLoading ? (
        <Loader />
      ) : props.charactersList ? (
        props.charactersList.map((character) => {
          return (
            <Character
              key={character.name + character.id}
              character={character}
            />
          );
        })
      ) : (
        <NoDataMessage text="No data. Pleace try again later." />
      )}
    </div>
  );
};

const mapStateToProps = ({ isLoading, charactersList }) => {
  return {
    charactersList,
    isLoading,
  };
};

export default connect(mapStateToProps)(CharactersList);
