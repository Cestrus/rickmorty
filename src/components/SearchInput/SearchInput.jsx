import { useState } from 'react';
import { connect } from 'react-redux';
import styles from './SearchInput.module.css';
import NameList from '../NameList/NameList';
import PropTypes from 'prop-types';

const SearchInput = ({ api }) => {
  const [list, setList] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  const inputHandler = ({ target }) => {
    if (target.value) {
      api
        .searchByName(target.value)
        .then((res) => {
          return res.json();
        })
        .then((obj) => {
          const url = obj.info.next ? obj.info.next : null;
          setList([...obj.results]);
          setNextUrl(url);
        })
        .catch((err) => {
          setList('Something went wrong or i can`t found this name!');
          setNextUrl(null);
          console.log('Error! ', err);
        });
    } else {
      setList([]);
    }
  };

  const loadNext = (nextUrl) => {
    if (nextUrl) {
      api
        .apiRequest(nextUrl)
        .then((res) => {
          return res.json();
        })
        .then((obj) => {
          const url = obj.info.next ? obj.info.next : null;
          setList((prev) => [...prev, ...obj.results]);
          setNextUrl(url);
        })
        .catch((err) => {
          setList('Something went wrong or i can`t found this name!');
          setNextUrl(null);
          console.log('Error! ', err);
        });
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="search"
        placeholder="Search character"
        className={styles.input}
        onInput={inputHandler}
      />
      <NameList list={list} loadNext={loadNext} nextUrl={nextUrl} />
    </div>
  );
};

const mapStateToProps = ({ api }) => {
  return { api };
};

export default connect(mapStateToProps)(SearchInput);

SearchInput.propTypes = {
  api: PropTypes.object.isRequired,
};
