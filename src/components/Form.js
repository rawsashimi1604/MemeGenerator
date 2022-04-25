import React from "react";

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
        </div>
    )
}