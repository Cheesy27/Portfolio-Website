
import './style.css';
import linkedInIcon from "./images/linkedin-logo.png"
import githubLogo from "./images/github.png"

export default function Footer() {
    return(
        <div id="footer">
             <div id="contact">
                <h2>Contact</h2>
                <p>email: luacsjan27@gmail.com</p>
                <div id="links">
                    <img className="linklogo" src={linkedInIcon} alt=""/>
                        
                    <a href="https://github.com/Cheesy27"><img class = "linklogo" src={githubLogo} alt=""/></a>
                        
                </div>
            </div>

            <footer>
                <p>&copy; 2023 Lucas Pereira</p>
            </footer>
        </div>
    )

}