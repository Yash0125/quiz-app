import React, { useState,useEffect } from "react";
import './quiz.css';
import { QuizData } from "../../utils/QuizData";

const Quiz = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60);

  useEffect(() => {
    const timer =
      remainingTime > 0 &&
      setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    if (remainingTime === 0) {
      clearInterval(timer);
      handleSubmit();
    }
    return () => clearInterval(timer);
  }, [remainingTime]);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const isLastQuestion = currentQuestion === QuizData.length - 1;

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
      
          <>
            <div className="timer">
              {remainingTime > 0 ? (
                <p>Time Remaining: {remainingTime} seconds</p>
              ) : (
                <p>Time's up!</p>
              )}
            </div>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <span id="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${
                      clickedOption === i + 1 ? "checked" : ""
                    } `}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {!isLastQuestion ? (
              <input
                type="button"
                value="Next"
                id="next-button"
                onClick={changeQuestion}
              />
            ) : (
              <input
                type="button"
                value="Submit"
                id="next-button"
                onClick={handleSubmit}
              />
            )}
          </>
        
      </div>
    </div>
  )
}

export default Quiz
