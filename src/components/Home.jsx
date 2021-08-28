import React, { Component } from 'react';
import crawfish from '../assets/images/crawfish.jpg'
import NavBar from './Navbar'
import Section from './Section'
import Resume from './Resume'
import down from '../assets/icons/chevron-down.svg'
import Contact from './Contact';

class Home extends Component {
   componentDidMount() {
      var downImg = document.getElementById('downImg');
      downImg.addEventListener('click', () => window.scrollTo({
          top: document.getElementById("about").offsetTop - 20,
          behavior: 'smooth',
      }));
   }

    render() {
      return (
         <div class="fullheight">
         <head>
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville@1&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet"></link>
         </head>
        <section id="home" class="fullheight">
           <div class="parallax fullheight">
           <NavBar></NavBar>
               <div class="header">
               <h1 class="fade-in-bottom">
                  Ramzi Rimawi
               </h1>
               <p class="fade-in-bottom">
               I'm a student at the University of Illinois in Chicago studying Computer Science to become a Software Engineer
               </p>
               <img id='downImg' href="about" class="slide-top" src={down}></img>
               </div>
            </div>
        </section>
        <Section></Section>
        <Resume></Resume>
        <Contact></Contact>
        </div>
      );
    }
  }
  
  export default Home;
