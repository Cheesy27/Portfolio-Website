
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
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank"><img className="linklogo" src={linkedInIcon} alt=""/></a>
                        
                    <a href="https://github.com/Cheesy27" target="_blank"><img class = "linklogo" src={githubLogo} alt=""/></a>
                        
                </div>
            </div>

            <footer>
                <p>&copy; 2023 Lucas Pereira</p>
            </footer>
        </div>
    )

}