import React from "react";
import Row from "./row";

export default function Grid({currentGuess, guesses, turn, solutionLength}) {
    return (
        <div>
            {guesses.map((g,i) => {
                if (turn === i) {
                    return <Row key ={i} currentGuess = {currentGuess} solutionLength = {solutionLength}/>
                }
                return <Row key = {i} guess ={g} solutionLength = {solutionLength} />
            })}
        </div>
    )
}