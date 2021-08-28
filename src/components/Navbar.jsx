import React, { Component } from 'react';
import logo from '../assets/icons/rr.png'

class Navbar extends Component {
    componentDidMount() {
        var homeNav = document.getElementById('homeNav');
        homeNav.addEventListener('click', () => window.scrollTo({
            top: 0,
            behavior: 'smooth',
        }));

        var aboutNav = document.getElementById('aboutNav');
        aboutNav.addEventListener('click', () => window.scrollTo({
            top: document.getElementById("about").offsetTop - 20,
            behavior: 'smooth',
        }))

        document.getElementById("resumeNav").addEventListener('click', () => window.scrollTo({
            top: document.getElementById("resume").offsetTop,
            behavior: 'smooth',
        }));
    
        document.getElementById("contactNav").addEventListener('click', () => window.scrollTo({
            top: document.getElementById("contact").offsetTop,
            behavior: 'smooth',
        }));
    }
  
    render () {
        return (
            <div>
            <nav class="navbar navbar-top">
                <a class="navbar-brand fade-in" href="/">
                    <img src={logo} height="50px" class="d-inline-block align-top" loading="lazy"/>
                </a>
                <div class="navbartext fade-in">
                    <a class="navbar-text" id="homeNav">
                        HOME
                    </a>
                    <a class="navbar-text" id="aboutNav">
                        ABOUT
                    </a>
                    <a class="navbar-text" id="resumeNav">
                        RESUME
                    </a>
                    <a class="navbar-text" id="contactNav">
                        CONTACT
                    </a>
                </div>
            </nav>
        </div>
        )
    }
}
export default Navbar;
