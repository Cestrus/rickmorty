import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CharacterPropTypes } from '../../assets/propTypes';
import PropTypes from 'prop-types';
import SimpleDiscription from '../SimpleDiscription/SimpleDiscription';
import Like from '../Like/Like';
import styles from './Character.module.css';
import { setDetailsCharacter } from '../../store/actionCreators';

const Character = ({ character, setDetailsCharacter }) => {
  const { name, status } = character;
  const navigate = useNavigate();

  const handleClick = () => {
    setDetailsCharacter(character);
    navigate('/details/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} onClick={handleClick}>
        <div className={styles['img-wrapper']}>
          <img src={character.image} alt="img" />
        </div>
        <div className={styles['description-wrapper']}>
          <SimpleDiscription className={styles.name} title="Name" text={name} />
          <SimpleDiscription
            className={styles.status}
            title="Status"
            text={status}
          />
        </div>
      </div>
      <Like character={character} />
    </div>
  );
};

const mapDispatchToProps = {
  setDetailsCharacter,
};

export default connect(null, mapDispatchToProps)(Character);

Character.propTypes = {
  character: CharacterPropTypes.isRequired,
  setDetailsCharacter: PropTypes.func.isRequired,
};
