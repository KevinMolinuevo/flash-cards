import dictionary from "./dictionary";

function Validation({ userAnswer, currentIndex }) {
  const correctAnswer = dictionary[currentIndex].answer; // Get correct answer

  if (!userAnswer) return null; // If empty input, don't show anything

  return (
    <p>
      {userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()
        ? `✅ Correct! The answer is: "${correctAnswer}"`
        : "❌ Incorrect! Try again."}
    </p>
  );
}

export default Validation;
