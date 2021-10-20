import { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevStat => ({
      [option]: prevStat[option] + 1,
    }));
  };

  countTotalFeedbacks = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = totalFeedbacks =>
    Math.round((this.state.good / totalFeedbacks) * 100);
  render() {
    const { good, neutral, bad } = this.state;
    const { handleIncrement, countTotalFeedbacks, countPositiveFeedbackPercentage } = this;
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
}
export default App;
