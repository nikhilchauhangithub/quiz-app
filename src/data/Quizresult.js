import React from 'react';
import questions from './Quizdata';

const Quizresult = (props) => {
  return (
    <div className="score-section">
      <h2>Completed!</h2>
      <h4>Total Score: {props.score}</h4>
      <h4>
        Your correct answers: {props.CorrectAns} out of {questions.length}{' '}
      </h4>
      <button onClick={props.HandlePlayAgain}>Play again</button>
    </div>
  );
};

export default Quizresult;
