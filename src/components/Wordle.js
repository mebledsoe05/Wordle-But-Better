import React, {useEffect, useState} from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./modal"
export default function Wordle({solution}) {
    const { currentGuess, handleKeyUp, guesses, turn, isCorrect, usedKeys} = useWordle(solution)
    const  [showModal, setShowModal] = useState(false)

    useEffect(() => {
        window.addEventListener('keyup' , handleKeyUp)

        if(isCorrect) {
            setTimeout(() => setShowModal(true),2000)
            window.removeEventListener('keyup' , handleKeyUp)
        }

        if (turn > 5) {
            setTimeout(() => setShowModal(true),2000)
            window.removeEventListener('keyup' , handleKeyUp)
        }
        return () => window.removeEventListener('keyup' , handleKeyUp)
    }, [handleKeyUp, isCorrect, turn])

    useEffect(() => {
        console.log(guesses,turn,isCorrect)
    }, [guesses, turn, isCorrect])
    return (
        <div>
            <Grid currentGuess = {currentGuess} guesses ={ guesses} turn = {turn} solutionLength = {solution.length} />
            <Keypad usedKeys = {usedKeys} />
            {showModal && <Modal isCorrect = {isCorrect} turn = {turn} solution = {solution} />}
        </div>
    )
}