import css from '../Section/Sections.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div className={css.FeedBackForm__section}>
      <h2 className={css.form__title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
