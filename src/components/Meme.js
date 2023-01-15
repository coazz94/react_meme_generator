import "./components.css"
import { memes } from '../data/memesData';
import React from "react";


const Meme = () =>{

    const  [meme, setMemeInfo] = React.useState(
        {
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
        }
    )

    const [allMemeImages] = React.useState(memes)

    function randomMeme() {
        const keys = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random() * keys.length);
        setMemeInfo(prevData => {
            return{
                ...prevData,
                randomImage: keys[randomNum].url
            }
        })
    }

    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text"/>
                <button onClick={randomMeme} className="form--button">Get a new meme image 🖼</button>
            </div>
            <div>
                <img src={meme.randomImage} alt="not found" className="meme--image"/>
            </div>
        </main>
    );
}

export {Meme};