import styles from './PagButton.module.css';
import { connect } from 'react-redux';
import apiClient from '../../Api/api';
import {
  setCurrPage,
  loading,
  loadCharactersPage,
} from '../../store/actionCreators';
import PropTypes from 'prop-types';

const api = new apiClient();

const PagButton = (props) => {
  let sign = '';
  switch (props.direct) {
    case 'prev':
      sign = '<';
      break;
    case 'next':
      sign = '>';
      break;
    default:
      sign = props.direct.toString();
  }
  const checkPage = (sign) => {
    if (sign === '>' && props.currPage < props.pages) {
      return props.currPage + 1;
    } else if (sign === '<' && props.currPage > 1) {
      return props.currPage - 1;
    }
    return props.currPage;
  };
  const clickHendler = async (ev) => {
    let nextPage = checkPage(sign);
    props.loading();
    if (nextPage !== props.currPage) {
      await api
        .getPage(nextPage)
        .then((res) => res.json())
        .then((obj) => {
          props.loadCharactersPage(obj.results);
          props.setCurrPage(nextPage);
        });
    }
    props.loading();
  };

  return (
    <button
      className={styles.button}
      onClick={() => {
        clickHendler();
      }}
    >
      {sign}
    </button>
  );
};

const mapDispathToProps = {
  setCurrPage,
  loading,
  loadCharactersPage,
};

const mapStateToProps = ({ currPage, pages }) => {
  return {
    currPage,
    pages,
  };
};

export default connect(mapStateToProps, mapDispathToProps)(PagButton);

PagButton.propTypes = {
  direct: PropTypes.string.isRequired,
  setCurrPage: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
  loadCharactersPage: PropTypes.func.isRequired,
  currPage: PropTypes.number,
  pages: PropTypes.number,
};
