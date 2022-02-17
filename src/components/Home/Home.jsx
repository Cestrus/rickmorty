import SearchInput from '../SearchInput/SearchInput';
import CharactersList from '../CharactersList/CharactersList';
import Pagination from '../Pagination/Pagination';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import PropTypes from 'prop-types';
import { CharacterPropTypes } from '../../assets/propTypes';
import { useEffect } from 'react';
import {
  loadCharactersPage,
  loading,
  setCurrPage,
  setPages,
} from '../../store/actionCreators';
import Button from '../Button/Button';

const Home = (props) => {
  useEffect(() => {
    if (!props.characterList) {
      props.loading();

      if (props.currPage) {
        props.setCurrPage(props.currPage);
      } else {
        props.setCurrPage(1);
      }
      props.api
        .getPage(props.currPage)
        .then((res) => res.json())
        .then((obj) => {
          props.loadCharactersPage(obj.results);

          props.setPages(obj.info.pages);
        });

      props.loading();
    }
  }, []);

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/favorites');
  };

  return (
    <div className={styles.container}>
      <SearchInput />
      <CharactersList />
      <Pagination />
      <Button name="Favorites" clickHandler={clickHandler} />
    </div>
  );
};

const mapStateToProps = ({ charactersList, currPage, api }) => {
  return {
    charactersList,
    currPage,
    api,
  };
};

const mapDispathToProps = {
  loading,
  loadCharactersPage,
  setCurrPage,
  setPages,
};

export default connect(mapStateToProps, mapDispathToProps)(Home);

Home.propTypes = {
  charactersList: PropTypes.arrayOf(CharacterPropTypes),
  currPage: PropTypes.number,
  api: PropTypes.object.isRequired,
  loading: PropTypes.func.isRequired,
  loadCharactersPage: PropTypes.func.isRequired,
  setCurrPage: PropTypes.func.isRequired,
  setPages: PropTypes.func.isRequired,
};
