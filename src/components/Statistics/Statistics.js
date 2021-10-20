import s from './Statistics.module.css';
import NotificationMessage from '../NotificationMessage';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedbacks,
  countPositiveFeedbackPercentage,
}) {
  return (
    <>
      {countTotalFeedbacks() > 0 ? (
        <>
          <p className={s.text}>Good: {good}</p>
          <p className={s.text}>Neutral: {neutral}</p>
          <p className={s.text}>Bad: {bad}</p>
          <p className={s.text}>Total: {countTotalFeedbacks()}</p>
          <p className={s.text}>
            Positive feedbacks: {countPositiveFeedbackPercentage(countTotalFeedbacks())} %
          </p>
        </>
      ) : (
        <NotificationMessage />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  countTotalFeedbacks: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};
