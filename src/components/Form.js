import React from "react";
import memeData from "../memeData"



export default function Form() {
    
    // https://i.imgflip.com/c2qn.jpg

    // All Memes
    const [allMemeImages, setAllMemeImages] = React.useState(memeData);


    // Current meme
    const [memeState, setMemeState] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/c2qn.jpg",
    })


    function getRandomMemeData() {
        let arrLen = allMemeImages.data.memes.length;
        let rand = Math.floor(Math.random() * arrLen);
    
        setMemeState(prevMeme => {
            return {
                ...prevMeme,
                randomImage: allMemeImages.data.memes[rand].url
            }
        });
    }

    return (
        <main>
            <form className="form">
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
            </form>
            <section className="meme">
                <img src={memeState.randomImage}></img>
                <h2 className="meme-text top">One does not simply</h2>
                <h2 className="meme-text bottom">Walk into Mordor</h2>
            </section>
        </main>
        

    )
}