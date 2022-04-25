import React from "react";
import memeData from "../memeData"



export default function Form() {
    
    const [memeState, setMemeState] = React.useState("")

    function getRandomMemeData() {
        let arrLen = memeData.data.memes.length;
        let rand = Math.floor(Math.random() * arrLen);
    
        setMemeState(memeData.data.memes[rand].url);
    }

    return (
        <div className="form">
            <div className="form-inputs">
                <input
                    placeholder="top input"
                ></input>
                <input
                    placeholder="bottom input"
                ></input>
            </div>
            
            <button
                onClick={getRandomMemeData}
            >Get a new meme image 🖼</button>

            <section className="meme">
                <img src={memeState}></img>
            </section>
        </div>
    )
}