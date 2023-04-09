import react from "react"

export default function IntroModal() {
    function clickText() {
        document.getElementById("btn").innerHTML = "You have clicked on JavaScript button";
    }
    return (
        <div className="introModal">
            <div className="introModalHeader">
                <h1>Welcome to Wordle but Better!</h1>
                <p> Please slecet the number of letters you want in the solution. The more there are the harder it is.</p>
                <button onClick={clickText}>Click to show text</button>
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