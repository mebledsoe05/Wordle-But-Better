import './App.css'
import react from "react";
import {useState} from "react";
import Wordle from "./components/Wordle";

function App() {
    const [solution, setSolution] = useState(null)
    function handleClick(event) {
        console.log('button pressed', event.target.value)
        if (event.target.value === '5') {

                    const randomSolution = json[Math.floor(Math.random() * json.length)]
                    setSolution("hello")
                    console.log(solution)
                })
        }

        if (event.target.value === '6'){
            fetch('http://localhost:3001/sixLetters')
                .then(res => res.json())
                .then(json => {
                    console.log("sol ", json)
                    const randomSolution = json[Math.floor(Math.random() * json.length)]
                    setSolution(randomSolution.word)
                    console.log(solution)
                })
        }

        if (event.target.value === '7') {
            fetch('http://localhost:3001/sevenLetters')
                .then(res => res.json())
                .then(json => {
                    console.log("sol ", json)
                    const randomSolution = json[Math.floor(Math.random() * json.length)]
                    setSolution( randomSolution.word)
                    console.log(solution)
                })
        }
        if (event.target.value === '15') {
            fetch('http://localhost:3001/secret')
                .then(res => res.json())
                .then(json => {
                    console.log("sol ", json)
                    const randomSolution = json[Math.floor(Math.random() * json.length)]
                    setSolution( randomSolution.word)
                    console.log(solution)
                })
        }

    }
  return (
      <div className="App">
          {!solution && <div className="introModal">
            <div className="introModalHeader">
                <h1>Welcome to Wordle but Better!</h1>
                <p> Please slecet the number of letters you want in the solution. The more there are the harder it is.</p>
                <button value = '5' onClick={handleClick}>5 Letter Solutions</button>
                <button value = '6' onClick={handleClick}>6 Letter Solutions</button>
                <button value = '7' onClick={handleClick}>7 Letter Solutions</button>
                <button value = '15' onClick={handleClick}>secret DO NOT PRESS!</button>
                <p id="btn"></p>
            </div>
            </div>}
        {solution && <h1>Wordle </h1>}
        {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App

/* 

data we need to track:
  -- solution
    -- 5 letter string, e.g. 'drain'
  -- past guesses
    -- an array of past guesses
    -- each past guess is an array of letter objects [{}, {}, {}, {}, {}]
    -- each object represents a letter in the guess word {letter: 'a', color: 'yellow'}
  -- current guess
    -- string 'hello'
  -- keypad letters
    -- array of letter objects [{key: 'a', color: 'green'}, {}, {} ...]
  -- number of turns
    -- an integer 0 - 6

game process:
  -- entering words:
    -- user enters a letter & a square is filled with that letter
    -- when a user hits delete it deletes the previous letter
    -- when a user hits enter it submits the word
      -- if all squares are not filled with letters then the word is not submitted
      -- if that word has already been used in a prev guess then the word is not submitted
  -- checking submitted words:
    -- each letter is checked to see if it matches to the solution
    -- each letter is assigned a color based on it's inclusion in the solution
      -- exact matches (correct position in the solution) are green
      -- partial matches (in the solution but not the correct position) are yellow
      -- none-matches (not in the solution at all) are grey
    -- the guess is added the grid with the correct colors
    -- the current guess moves to the next row
    -- the keypad letters are updated (colors)
  -- ending the game:
    -- when the guessed word fully matches the solution
      -- modal to say 'well done'
    -- when the user runs out of guesses
      -- modal to say 'unlucky'

*/