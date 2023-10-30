
import './style.css';
import linkedInIcon from "./images/linkedin-logo.png"
import githubLogo from "./images/github.png"
import heroImg from "./images/Profile pic.png"
import htmlImg from "./images/html5.png"
import cssImg from "./images/css-3.png"
import jsImg from "./images/javascript.png"
import reactImg from "./images/react.png"

export default function Hero() {
    return (
        <div id="hero">
            <div id="hero-container">
                <div className="hero-text">
                    <h1>Front-End React Developer</h1>
                    <p>Hi, I'm Lucas Pereira. A passionate Front-end Developer based in Ontario, Canada</p>
                    <div id="links">
                        <img className="linklogo" src={linkedInIcon} alt=""/>
                        
                        <a href="https://clearbit.com/github.com"><img class = "linklogo" src={githubLogo} alt=""/></a>
                        
                    </div>
                </div>

                <div className="hero-image">
                    <img src={heroImg} alt="Profile Pic" id="profileImg"/>
                </div>
            </div>

            <div id="stack">
                <p id="pstack">Tech Stack  | </p>
                <img src={htmlImg} alt=""/>
                <img id="cssi" src={cssImg} alt=""/>
                <img src={jsImg} alt=""/>
                <img src={reactImg} alt=""/>

            </div>
        </div>
    )
}




