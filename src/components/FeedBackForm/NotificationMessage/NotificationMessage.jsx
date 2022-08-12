import css from '../NotificationMessage/NotificationMessage.module.css';
import PropTypes from 'prop-types';

export const NotificationMessage = ({ message }) => {
  return (
    <div className={css.NotificationMessage}>
      <p>{message}</p>
    </div>
  );
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
