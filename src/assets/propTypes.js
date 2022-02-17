import PropTypes from 'prop-types';

export const CharacterPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  gender: PropTypes.string,
  location: PropTypes.shape({
    name: PropTypes.string,
  }),
  image: PropTypes.string.isRequired,
  status: PropTypes.string,
  episode: PropTypes.arrayOf(PropTypes.string).isRequired,
  created: PropTypes.string.isRequired,
});
