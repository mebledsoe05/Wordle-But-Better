import React from "react";

export default function Row({guess, currentGuess, solutionLength}) {

    if (guess) {
        return(
            <div className ="row past">
                {guess.map((l, i)=>
                    <div key={i} className={l.color}>{l.key}</div>
                )}
            </div>
        )
    }

    if (currentGuess) {
        let letters = currentGuess.split('')

        return (
            <div className = "row current">
                {letters.map((letter, i) => (
                    <div key={i} className="filled" >{letter}</div>
                ))}
                {[...Array(solutionLength - letters.length)].map ((v,i)=>
                    <div key ={i} ></div>
                )}
            </div>
        )
    }
    if (solutionLength === 6)
        return (
            <div className ="row">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )

    else
        return (
            <div className ="row">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
}
//     let numOfBox = () => {
//         for (let i = 1; i <= solutionLength; i++) {
//             numOfBox += <div></div>
//         }
//     }
//
//     return (
//         <div className="row">
//             {numOfBox()}
//         </div>
//     )
// }