import React from "react";
import { useNavigate } from "react-router-dom";
import "./quizResult.css";

const QuizResult = ({ score, totalScore, timeTaken }) => {
  const navigate = useNavigate();
  const tryAgain = () => {
    navigate("/");
  };

  return (
    <>
      <div className="result-container">
        <div className="score-container">
          <h2>Score:</h2>
          <p>
            {score}/{totalScore}
          </p>
        </div>
        <div className="time-container">
          <h2>Time Taken:</h2>
          <p>{timeTaken} Sec(s)</p>
        </div>
      </div>

      <button className="tryAgain-button" onClick={tryAgain}>
        Try Again
      </button>
    </>
  );
};

export default QuizResult;
