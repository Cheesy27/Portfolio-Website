
import './style.css';
import diploma from "./images/diploma.png"
import bestdeals from"./images/BestDeals.png"
import signin from "./images/SignIn.png"
import atc from "./images/addtocart.png"

export default function MainContent() {
    return(

        <div id="main-content">
            <div id="about">
            <div className="about-container">
                <div id="apiimg">
                    <img src={diploma} alt="diploma"/>
                </div>
                <div className="about-text">
                    <h4>About Me</h4>
                    <h3>A dedicated Front-end Developer based in Mississauga📍</h3>
                    <p>As a junior Front-End Developer, I possess an impressive arsenal of skill
                        in HTML, CSS, Javascript, React, Tailwind, Typescript, and SCSS. I excel 
                        in designing and maintaining responsive websites that offer a smooth user experience.
                        My expertise lies in crafting dynamic, engaging interfaces through writing 
                        clean and optimized code and utilizing cutting-edge development tools and techniques.
                        I am also a team player who thrives in collaborating with cross-functional teams to 
                        produce outstanding web applications.
                    </p>
                </div>

            </div>
        </div>
    

        <div id="projects">
            <div className="pheader">
                <h4>PORTFOLIO</h4>
                <h1>Each project is a unique piece of developement</h1>
            </div>
            

            <div className="container">
                <div id="apiimg">
                    <a href="https://easydealsstore.netlify.app/" target="_blank" rel="noreferrer"><img src={bestdeals} alt="webiste"/></a>
                </div>
                <div className="about-text">
                    <a href="https://easydealsstore.netlify.app/" target="_blank" rel="noreferrer"><h4>BestDeals</h4></a>
                    <p> BestDeals is a onloine platform ecommerce store selling various products. The website provides an interface for adding items to a kart and viewing the products in the kard
                    </p>
                </div>

            </div>

            <div className="container swap">
                <div id="apiimg">
                    <a href="https://loginsignuppagelucasp.netlify.app/" target="_blank" rel="noreferrer"><img src={signin} alt="website"/></a>
                </div>
                <div className="about-text">
                    <a href="https://loginsignuppagelucasp.netlify.app/" target="_blank" rel="noreferrer"><h4>Sign In page</h4></a>
                    <p>The sign in pages includes clean animations and navigation for users to input their information or create a account.
                    </p>
                </div>

            </div>

            <div className="container">
                <div id="apiimg">
                    <a href="https://addtocartbylucasp.netlify.app/" target="_blank" rel="noreferrer"><img id="atcimg" src={atc} alt="diploma"/></a>
                </div>
                <div className="about-text">
                    <a href="https://addtocartbylucasp.netlify.app/" target="_blank" rel="noreferrer"><h4>add to cart App</h4></a>
                    <p>If you ever forget what you need to buy when grocery shopping my addtocart app is there!
                        The app allows you to enter multiple items that store and displays the item. 
                        To remove the item all you have to is click on the item and it is removed.
                    </p>
                </div>

            </div>


        </div>
    </div>
    )

}