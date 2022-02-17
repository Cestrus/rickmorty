import { connect } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setDetailsCharacter } from '../../store/actionCreators';
import PropTypes from 'prop-types';
import { CharacterPropTypes } from '../../assets/propTypes';
import styles from './NameList.module.css';

const NameList = ({ list, loadNext, nextUrl, setDetailsCharacter }) => {
  const [isLoadingNext, setLoadingNext] = useState(false);
  const navigate = useNavigate();

  const clickHandler = (ev) => {
    const character = list.find((el) => el.id === +ev.target.id);
    setDetailsCharacter(character);
    navigate('/details/');
  };

  const scrollHandler = async ({ target }) => {
    if (
      target.scrollHeight - target.clientHeight - parseInt(target.scrollTop) <
        10 &&
      !isLoadingNext
    ) {
      setLoadingNext(true);
      await loadNext(nextUrl);
      setLoadingNext(false);
    }
  };

  const fullStyles = list.length
    ? styles.container
    : `${styles.container} ${styles.empty}`;

  return (
    <div className={fullStyles} onScroll={scrollHandler}>
      {typeof list === 'string' && <div className={styles.message}>{list}</div>}
      {Array.isArray(list) && (
        <>
          {list.map((obj, idx) => {
            return (
              <div
                className={styles.name}
                key={obj.name + idx}
                id={obj.id}
                onClick={clickHandler}
              >
                {obj.name}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  setDetailsCharacter,
};

export default connect(null, mapDispatchToProps)(NameList);

NameList.propTypes = {
  loadNext: PropTypes.func.isRequired,
  nextUrl: PropTypes.string,
  setDetailsCharacter: PropTypes.func.isRequired,
};
