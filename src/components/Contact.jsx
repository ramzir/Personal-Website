import React from "react"
import github from "../assets/icons/github.png"
import linkedin from "../assets/icons/linkedin100.png"
import resume from '../assets/RamziRimawiResumeFall2021.pdf';

export default () => (
    <div id="contact" class="contact container">
        <h2>
            Want to Get in Touch?
        </h2>
        <div class="row centered">
            <div class="col">
                <a href="mailto:rrimaw2@uic.com" target="_blank">
                    <button class="contactbuttons">
                        Send Me An Email
                    </button>
                </a>
            </div>
            <div class="col">
                <a href={resume} target="_blank">
                    <button class="contactbuttons">
                        View My Resume
                    </button>
                </a>
            </div>
        </div>
        <div class="row contacticons">
            <a href="https://www.linkedin.com/in/ramzirimawi/" target="_blank">
                <img src={linkedin}></img>
            </a>
            <a href="https://github.com/ramzir" target="_blank">
                <img src={github}></img>
            </a>
        </div>
        <p class="copyright">
            @ Copyright Ramzi Rimawi
        </p>
    </div>
);