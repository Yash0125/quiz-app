import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./components/quiz/Quiz";
import QuizResult from "./components/quizResult/QuizResult";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/quiz" exact element={<Quiz />} />
          <Route path="/quizResult" exact element={<QuizResult />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
