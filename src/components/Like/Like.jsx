import styles from './Like.module.css';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addFavorite, delFavorite } from '../../store/actionCreators.js';
import * as utils from '../../utils/utils.js';
import { CharacterPropTypes } from '../../assets/propTypes';

const Like = (props) => {
  const { character, favorites, addFavorite, delFavorite } = props;
  const [status, setStatus] = useState(
    Boolean(favorites.find((el) => el === `${character.id}`))
  );
  const starStyle = status ? styles['star-full'] : styles['star-empty'];
  const finalStyle = `${styles.star} ${starStyle}`;

  const clickHandle = () => {
    setStatus((prevStatus) => !prevStatus);
    if (!status) {
      addFavorite(`${character.id}`);
      utils.addFavorToLocalStorage(character);
    } else {
      delFavorite(`${character.id}`);
      utils.delFavorFromLocalStorage(character);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={finalStyle} onClick={clickHandle}></div>
    </div>
  );
};

const mapStateToProps = ({ favorites }) => {
  return {
    favorites,
  };
};

const mapDispatchToProps = {
  addFavorite,
  delFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Like);

Like.porpTypes = {
  character: CharacterPropTypes.isRequired,
};
