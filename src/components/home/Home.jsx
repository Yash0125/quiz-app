import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="header">

        <header className="App-header">

          <img
            src="https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg"
            alt="Quiz"
          />

          <h1>Frontend Quiz</h1>

          <p>
            This Quiz is about Frontend Development basic questions. This quiz
            contains 5 questions and has a time limit of 1 minute. For each
            correct answer you will get 1 score.
          </p>
          <h3>This quiz includes:</h3>

          <ul>
            <li> 5 Question</li>
            <li>1 Minute</li>
            <li>Multiple Attempts</li>
            <li>You can skip question</li>
          </ul>

          <button>Take Quiz</button>

        </header>

      </div>
    </div>
  );
};

export default Home;
