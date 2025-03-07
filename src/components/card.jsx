
import { useState } from "react";

function FlashCard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flashcard"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <h2 className="">{isFlipped ? answer : question}</h2>
      <p className="">
        {isFlipped ? "Tap to see question" : "Tap to see answer"}
      </p>
    </div>
  );
}

export default FlashCard;