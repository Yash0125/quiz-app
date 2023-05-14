import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./components/quiz/Quiz";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/quiz" exact element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
