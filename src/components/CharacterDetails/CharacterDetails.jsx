import SimpleDiscr from '../SimpleDiscription/SimpleDiscription';
import styles from './CharacterDetails.module.css';

const CharacterDetails = ({ character }) => {
  const { name, type, gender, location, image, status, episode, created } =
    character;
  const editEpisodes = () => {
    // console.log('==> ', character);
    const episodesList = episode.map((epHttp) => {
      return epHttp.match(/\d+/);
    });
    return episodesList.join(', ');
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>DETAILS</p>
      <div className={styles['img-wrapper']}>
        <img src={image} alt="" />
      </div>
      <div className={styles.upper}>
        <SimpleDiscr className={styles.name} title="Name" text={name} />
        <SimpleDiscr className={styles.gender} title="Gender" text={gender} />
        <SimpleDiscr className={styles.status} title="Status" text={status} />
      </div>
      <div className={styles.medium}>
        <SimpleDiscr
          className={styles.location}
          title="Location"
          text={location.name}
        />
        <SimpleDiscr className={styles.type} title="Type" text={type} />
        <SimpleDiscr
          className={styles.created}
          title="Created"
          text={new Date(created).toLocaleDateString()}
        />
      </div>
      <div className={styles.bottom}>
        <SimpleDiscr
          className={styles.episodes}
          title="Episodes"
          text={editEpisodes()}
        />
      </div>
    </div>
  );
};

export default CharacterDetails;
