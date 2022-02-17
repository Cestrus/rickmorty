import styles from './Details.module.css';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import { CharacterPropTypes } from '../../assets/propTypes';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Details = ({ detailsCharacter }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <CharacterDetails character={detailsCharacter} />
      <Button name="Back" clickHandler={clickHandler} />
    </div>
  );
};

const mapStateToProps = ({ detailsCharacter }) => {
  return { detailsCharacter };
};

export default connect(mapStateToProps)(Details);

Details.propTypes = {
  detailsCharacter: CharacterPropTypes.isRequired,
};
