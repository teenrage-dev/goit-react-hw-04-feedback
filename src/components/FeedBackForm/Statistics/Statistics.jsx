import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2 className={css.form__title}>Statistics</h2>
      <div className={css.form__item}>
        <p className={css.form__text}>
          Good: <span className={css.form__text_wrap}>{good}</span>
        </p>
        <p className={css.form__text}>
          Neutral: <span className={css.form__text_wrap}>{neutral}</span>
        </p>
        <p className={css.form__text}>
          Bad: <span className={css.form__text_wrap}> {bad}</span>
        </p>
        <p className={css.form__text}>
          Total: <span className={css.form__text_wrap}>{total}</span>
        </p>
        <p className={css.form__text}>
          Positive feedback:{' '}
          <span className={css.form__text_wrap}>{positivePercentage}%</span>
        </p>
      </div>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
