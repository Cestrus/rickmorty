import SimpleDiscr from '../SimpleDiscription/SimpleDiscription';
import styles from './CharacterDetails.module.css';

const CharacterDetails = ({ character }) => {
  const { name, type, gender, location, image, status, episodes, created } =
    character;
  return (
    <div className={styles.container}>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="img-wrapper">
        <img src={image} alt="" />
      </div>
      <div className="left-side">
        <SimpleDiscr
          className={styles.location}
          title="Location"
          text={location.name}
        />
        <SimpleDiscr className={styles.status} title="Status" text={status} />
        <SimpleDiscr
          className={styles.created}
          title="Created"
          text={new Date(created).toLocaleDateString()}
        />
      </div>
      <div className="right-side">
        <SimpleDiscr className={styles.type} title="Type" text={type} />
        <SimpleDiscr className={styles.gender} title="Gender" text={gender} />
      </div>
    </div>
  );
};

export default CharacterDetails;
