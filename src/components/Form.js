import React from "react";
import memeData from "../memeData"

function getRandomMemeData() {
    let arrLen = memeData.data.memes.length;
    let rand = Math.floor(Math.random() * arrLen);

    return memeData.data.memes[rand].url;
}

export default function Form() {
    
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
            
            <button>Get a new meme image 🖼</button>

            <section className="meme">
                <span className="meme-url">
                    
                </span>
            </section>
        </div>
    )
}