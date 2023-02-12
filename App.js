import React, {useState, useEffect, useRef} from "react"
import useGameLogic from "./hooks/useWordGame"

function App() {
    const {
        textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        wordCount
    } = useGameLogic(30)
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {(isTimeRunning===false && timeRemaining === 0) ?wordCount
                                                                    : `???`}</h1>
        </div>
    )
}

export default App
