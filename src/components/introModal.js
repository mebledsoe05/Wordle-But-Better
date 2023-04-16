import react, {useState} from "react"

export default function IntroModal() {
    const [numOfLetters, setNumOfLetters] = useState(null)
    function handleClick(event) {
        console.log('button pressed', event.target.value)
        setNumOfLetters(event.target.value)
        document.getElementById("btn").innerHTML = "You have chosen _____ letters";
    }
    return (
        <div className="introModal">
            <div className="introModalHeader">
                <h1>Welcome to Wordle but Better!</h1>
                <p> Please slecet the number of letters you want in the solution. The more there are the harder it is.</p>
                <button value = '5' onClick={handleClick}>5 Letter Solutions</button>
                <button value = '6' onClick={handleClick}>6 Letter Solutions</button>
                <button value = '7' onClick={handleClick}>7 Letter Solutions</button>
                <p id="btn"></p>
            </div>
        </div>
    )
}


// <div className = "modal">
//     {isCorrect && (
//         <div>
//             <h1>YOU WIN!!</h1>
//             <p className="solution"> {solution}</p>
//             <p> You found the solution in {turn} guesses :)</p>
//         </div>
//     )}