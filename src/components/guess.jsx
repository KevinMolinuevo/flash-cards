import { useState } from "react";

function Answer({ onSubmit }) {
    const [guess, setGuess] = useState("");

    return (
        <>
            <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
            />
            <button onClick={() => onSubmit(guess)}>Submit</button>
        </>
    );
}

export default Answer;
