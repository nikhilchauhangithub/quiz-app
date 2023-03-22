import React, { useState } from 'react';
import questions from './data/Quizdata';
import Quizresult from './data/Quizresult';
import './index.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleNextOption = () => {
    setClick(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowresult(true);
    }
  };

  const [showResult, setShowresult] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [click, setClick] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 5);
      setCorrectAns(correctAns + 1);
    }
    setClick(true);
  };

  const handlePlayAgain = () => {
    setScore(0);
    setCorrectAns(0);
    setShowresult(false);
  };

  const handleQuitButton = () => {
    setShowresult(true);
  };

  return (
    <div className="app">
      {showResult ? (
        <Quizresult
          score={score}
          CorrectAns={correctAns}
          HandlePlayAgain={handlePlayAgain}
        />
      ) : (
        <>
          <div className="question-section">
            <h5>Score:{score}</h5>
            <div className="question-count">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((ans, i) => {
              return (
                <button
                  className={`button ${
                    click && ans.isCorrect ? 'correct' : 'button'
                  }`}
                  disabled={click}
                  key={i}
                  onClick={() => handleAnswer(ans.isCorrect)}
                >
                  {ans.answerText}
                </button>
              );
            })}
          </div>

          <div className="actions">
            <button onClick={handleQuitButton}>Quit</button>
            <button disabled={!click} onClick={handleNextOption}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
