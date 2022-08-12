import './FeedBackForm.css';
import React, { useState, useEffect } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

export function FeedBackForm() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  let total = countTotalFeedback();

  const handleClickGood = () => {
    setGood(prevState => {
      return prevState + 1;
    });
  };

  const handleClickNeutral = () => {
    setNeutral(prevState => {
      return prevState + 1;
    });
  };

  const handleClickBad = () => {
    setBad(prevState => {
      return prevState + 1;
    });
  };

  useEffect(() => {
    countTotalFeedback(good, total);
  }, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = (good, total) => {
    const posFeedback = Math.round((good / total) * 100);
    return posFeedback;
  };

  console.log(total);
  return (
    <div className="FeedBackForm">
      <Section title="Please leave feedback">
        <FeedbackOptions
          onClickGood={handleClickGood}
          onClickNeutral={handleClickNeutral}
          onClickBad={handleClickBad}
        />

        {total === 0 ? (
          <NotificationMessage message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(good, total)}
          />
        )}
      </Section>
    </div>
  );
}

// export class FeedBackFormOld extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = e => {
//     this.setState(prevState => {
//       const prevStateName = e.target.name;
//       return {
//         [prevStateName]: this.state[prevStateName] + 1,
//       };
//       // if (prevStateName === 'good') {
//       //   return {
//       //     good: prevState.good + 1,
//       //   };
//       // } else if (prevStateName === 'neutral') {
//       //   return {
//       //     neutral: prevState.neutral + 1,
//       //   };
//       // } else if (prevStateName === 'bad') {
//       //   return {
//       //     bad: prevState.bad + 1,
//       //   };
//       // }
//     }, this.countTotalFeedback);
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   }

//   countPositiveFeedbackPercentage(good, total) {
//     const posFeedback = Math.round((good / total) * 100);
//     return posFeedback;
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions onClick={this.handleClick} />

//         {total === 0 ? (
//           <NotificationMessage message="There is no feedback" />
//         ) : (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={this.countPositiveFeedbackPercentage(
//               good,
//               total
//             )}
//           />
//         )}
//       </Section>
//     );
//   }
// }
