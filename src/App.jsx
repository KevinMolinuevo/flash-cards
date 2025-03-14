import { useState } from "react";
import "./App.css";
import FlashCard from "./components/card";
import FlashCardNum from "./components/count";
import dictionary from "./components/dictionary";
import Answer from "./components/guess";
import Validation from "./components/validation"; // Import Validation Component

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(""); // Store user's answer

  const handleNext = () => {
    setUserAnswer(""); // Reset answer when moving to the next question
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dictionary.length);
  };

  const handleBack = () => {
    setUserAnswer(""); // Reset answer when moving to the previous question
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + dictionary.length) % dictionary.length
    );
  };

  return (
    <>
      <div className="title">
        <h2>Game Knowledge Mastery</h2>
      </div>
      <div className="Flashcard">
        <FlashCard
          question={dictionary[currentIndex].question}
          answer={dictionary[currentIndex].answer}
        />
      </div>

      {/* Pass setUserAnswer to Answer component */}
      <Answer onSubmit={setUserAnswer} />

      {/* Pass userAnswer and currentIndex to Validation */}
      <Validation userAnswer={userAnswer} currentIndex={currentIndex} />

      <FlashCardNum
        className="Number"
        count={currentIndex + 1}
        total={dictionary.length}
      />
      <button onClick={handleNext}>Next</button>
      <button onClick={handleBack}>Back</button>
    </>
  );
}

export default App;
