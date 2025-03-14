import { useState } from "react";
import "./App.css";
import FlashCard from "./components/card";
import FlashCardNum from "./components/count";
import dictionary from "./components/dictionary";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dictionary.length);
  };
  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % dictionary.length);
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
