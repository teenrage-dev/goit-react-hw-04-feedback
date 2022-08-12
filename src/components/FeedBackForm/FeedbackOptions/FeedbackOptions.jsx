import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <>
      <div className={css.wrapper__feedback}>
        <button
          type="button"
          className={css.mark__btn}
          name="good"
          onClick={onClickGood}
        >
          Good
        </button>
        <button
          type="button"
          className={css.mark__btn}
          name="neutral"
          onClick={onClickNeutral}
        >
          Neutral
        </button>
        <button
          type="button"
          className={css.mark__btn}
          name="bad"
          onClick={onClickBad}
        >
          Bad
        </button>
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  onClickGood: PropTypes.func.isRequired,
  onClickNeutral: PropTypes.func.isRequired,
  onClickBad: PropTypes.func.isRequired,
};
