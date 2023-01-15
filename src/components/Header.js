import "./components.css"
import trollFace from "../data/Troll Face.png"




const Header = () => {
    return(
        <header className="header">
            <img
                src={trollFace}
                alt="not found"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}


export {Header}