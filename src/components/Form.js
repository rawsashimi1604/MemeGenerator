import React from "react";

export default function Form() {
    
    // All Memes
    const [allMemeImages, setAllMemeImages] = React.useState([]);

    // Current meme
    const [memeState, setMemeState] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/c2qn.jpg",
    })

    // Call this as soon as page loads, load memes data from API call
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                setAllMemeImages(data.data.memes)
            })
    }, [])

    function getRandomMemeData(e) {
        
        e.preventDefault();

        let arrLen = allMemeImages.length;
        let rand = Math.floor(Math.random() * arrLen);
    
        setMemeState(prevMeme => {
            return {
                ...prevMeme,
                randomImage: allMemeImages[rand].url
            }
        });
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMemeState(prevFormState => {
            return {
                ...prevFormState,
                [name]: value
            }
        })
    }

    return (
        <main>
            <form 
                className="form"
            >
                <div className="form-inputs">
                    <input
                        placeholder="top input"
                        type="text"
                        name="topText"
                        onChange={handleChange}
                    ></input>
                    <input
                        placeholder="bottom input"
                        type="text"
                        name="bottomText"
                        onChange={handleChange}
                    ></input>
                </div>
                
                <button
                    onClick={getRandomMemeData}
                >Get a new meme image 🖼</button>
            </form>
            <section className="meme">
                <img src={memeState.randomImage}></img>
                <h2 className="meme-text top">{memeState.topText}</h2>
                <h2 className="meme-text bottom">{memeState.bottomText}</h2>
            </section>
        </main>
        

    )
}