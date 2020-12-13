import PropTypes from 'prop-types';

export default function StatusError({ message }) {
  return (
    <div role="alert">
      <p>Sorry, something went wrong. Error: {message}</p>
    </div>
  );
}

StatusError.propTypes = {
  message: PropTypes.string.isRequired,
};
