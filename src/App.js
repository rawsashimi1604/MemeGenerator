import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form"

export default function App() {
    return (
        <div className="container">
            <Navbar/>
            <main>
                <Form/>
            </main>
        </div>
        
    )
}