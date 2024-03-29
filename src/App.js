import './App.css'
import react from "react";
import {useState} from "react";
import Wordle from "./components/Wordle";

function App() {
    const [solution, setSolution] = useState(null)

    function handleClick(event) {
        console.log('button pressed', event.target.value)
        if (event.target.value === '5') {
            const solutions = [
                {
                    word: "ninja",
                    id: 1
                },


                {
                    word: "spade",
                    id: 2
                }  ,
                {
                    word: "pools",
                    id: 3
                },       
                {        
                    word: "drive",
                    id: 4
                },       
                {        
                    word: "relax",
                    id: 5
                },       
                {        
                    word: "times",
                    id: 6
                },       
                {        
                    word: "train",
                    id: 7
                },       
                {        
                    word: "cores",
                    id: 8
                },       
                {        
                    word: "pours",
                    id: 9
                },       
                {        
                    word: "blame",
                    id: 10
                },       
                {        
                    word: "banks",
                    id: 11
                },       
                {        
                    word: "phone",
                    id: 12
                },       
                {        
                    word: "bling",
                    id: 13
                },       
                {        
                    word: "coins",
                    id: 14
                },       
                {        
                    word: "hello",
                    id: 15
                }]
            const solutionJson = JSON.stringify(solutions)
            console.log("solutions      ", solutions)
            console.log('solutionJson    ', solutionJson)
            // .then(json => {
            //     console.log("sol ", json)
            const randomSolution = solutions[Math.floor(Math.random() * solutions.length)]
            console.log("randomSolution     ", randomSolution)
            setSolution(randomSolution.word)
            console.log('solution     ', solution)
            // })
        }

        if (event.target.value === '6') {
            const solutionsSixLet = [
                {
                    word: "ninjas",
                    id: 1
                },
                {
                    word: "orange",
                    id: 2
                },
                {
                    word: "abacus",
                    id: 3
                },
                {
                    word: "driven",
                    id: 4
                },
                {
                    word: "baboon",
                    id: 5
                },
                {
                    word: "dabbed",
                    id: 6
                },
                {
                    word: "dabble",
                    id: 7
                },
                {
                    word: "fabled",
                    id: 8
                },
                {
                    word: "habit",
                    id: 9
                },
                {
                    word: "kabuki",
                    id: 10
                },
                {
                    word: "nachos",
                    id: 11
                },
                {
                    word: "phoned",
                    id: 12
                },
                {
                    word: "oafish",
                    id: 13
                },
                {
                    word: "packed",
                    id: 14
                },
                {
                    word: "rabbit",
                    id: 15
                }]
            const solutionJson = JSON.stringify(solutionsSixLet)
            console.log("solutions      ", solutionsSixLet)
            console.log('solutionJson    ', solutionJson)
            // .then(json => {
            //     console.log("sol ", json)
            const randomSolution = solutionsSixLet[Math.floor(Math.random() * solutionsSixLet.length)]
            console.log("randomSolution     ", randomSolution)
            setSolution(randomSolution.word)
            console.log('solution     ', solution)
            // })
        }

        if (event.target.value === '7') {
            const solutionsSevenLett = [
                {
                    word: "jacuzzi",
                    id: 1
                },
                {
                    word: "abandon",
                    id: 2
                },
                {
                    word: "babbled",
                    id: 3
                },
                {
                    word: "fabrics",
                    id: 4
                },
                {
                    word: "relaxed",
                    id: 5
                },
                {
                    word: "deposit",
                    id: 6
                },
                {
                    word: "gallery",
                    id: 7
                },
                {
                    word: "harbour",
                    id: 8
                },
                {
                    word: "fantasy",
                    id: 9
                },
                {
                    word: "eastern",
                    id: 10
                },
                {
                    word: "lawsuit",
                    id: 11
                },
                {
                    word: "hopeful",
                    id: 12
                },
                {
                    word: "chapter",
                    id: 13
                },
                {
                    word: "endorse",
                    id: 14
                },
                {
                    word: "justice",
                    id: 15
                }]
            const solutionJson = JSON.stringify(solutionsSevenLett)
            console.log("solutions      ", solutionsSevenLett)
            console.log('solutionJson    ', solutionJson)
            // .then(json => {
            //     console.log("sol ", json)
            const randomSolution = solutionsSevenLett[Math.floor(Math.random() * solutionsSevenLett.length)]
            console.log("randomSolution     ", randomSolution)
            setSolution(randomSolution.word)
            console.log('solution     ', solution)
            // })
        }
        if (event.target.value === '15') {
            const solutionsSecret = [
                {
                    word: "acrocephalopolysyndactyly",
                    id: 1
                }]
            const solutionJson = JSON.stringify(solutionsSecret)
            console.log("solutions      ", solutionsSecret)
            console.log('solutionJson    ', solutionJson)
            // .then(json => {
            //     console.log("sol ", json)
            const randomSolution = solutionsSecret[Math.floor(Math.random() * solutionsSecret.length)]
            console.log("randomSolution     ", randomSolution)
            setSolution(randomSolution.word)
            console.log('solution     ', solution)
            // })
        }
    }


    return (
        <div className="App">
            {!solution && <div className="introModal">
                <div className="introModalHeader">
                    <h1>Welcome to Wordle but Better!</h1>
                    <p> Please slecet the number of letters you want in the solution. The more there are the harder it
                        is.</p>
                    <button value='5' onClick={handleClick}>5 Letter Solutions</button>
                    <button value='6' onClick={handleClick}>6 Letter Solutions</button>
                    <button value='7' onClick={handleClick}>7 Letter Solutions</button>
                    <button value='15' onClick={handleClick}>secret DO NOT PRESS!</button>
                    <p id="btn"></p>
                </div>
            </div>}
            {solution && <h1>Wordle </h1>}
            {solution && <Wordle solution={solution}/>}
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