import { useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    const { textContent } = e.target;

    switch (textContent) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedbacks = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = totalFeedbacks =>
    Math.round((good / totalFeedbacks) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedbacks={countTotalFeedbacks}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
}
