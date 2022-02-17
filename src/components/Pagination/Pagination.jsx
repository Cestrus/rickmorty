import { connect } from 'react-redux';
import styles from './Pagination.module.css';
import PagButton from '../PagButton/PagButton';
import PropTypes from 'prop-types';

const Pagination = ({ pages, currPage }) => {
  return (
    <div>
      <div className={styles.container}>
        <PagButton direct="prev" />
        <p className={styles.page}>{currPage || -1}</p>
        <PagButton direct="next" />
      </div>
      <div>
        <p className={styles.message}>pages: {pages || 'Unknown'}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ pages, currPage }) => {
  return {
    currPage,
    pages,
  };
};

export default connect(mapStateToProps)(Pagination);

Pagination.propTypes = {
  currPage: PropTypes.number,
  pages: PropTypes.number,
};
