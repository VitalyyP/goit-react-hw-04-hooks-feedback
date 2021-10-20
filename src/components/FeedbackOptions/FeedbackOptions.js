import s from './FeedbackOptions.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.bottons}>
      {options.map(option => (
        <button
          onClick={() => onLeaveFeedback(option)}
          type="button"
          className={s.button}
          key={shortid.generate()}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
