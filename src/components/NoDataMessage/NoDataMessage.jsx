import styles from './NoDataMessage.module.css';
import PropTypes from 'prop-types';

const NoDataMessage = ({ text }) => {
  return (
    <div className={styles.message}>
      <p>{text}</p>
    </div>
  );
};

export default NoDataMessage;

NoDataMessage.propTypes = {
  text: PropTypes.string,
};
