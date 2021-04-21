import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const divStyle = {
    backgroundImage: 'url(background.png)',
   " background-repeat": "no-repeat",
    "background-attachment": "fixed",
    "background-size": "100% 100%",
    "min-height": "100vh",
  };

const Home = () => {

    return(
            <div id="page-wrapper" style={divStyle}>

                <header id="header">
                  { // <img src="logo.png" alt="nike logo" id="header-img" /> 
                  }
                    <nav id="nav-bar" >
                        <ul id="nav-list">
                        <li id="link1"><a class="nav-link" href="/login">Admin</a></li>
                        <li id="link2"><a class="nav-link" href="/recipes">Recipes</a></li>
                        <li id="link3"><a class="nav-link" href="/ingredients">Ingredients</a></li>
                        </ul>
                    </nav>
                </header>
                <div class="container">
                    
                    
                    
                    {/* <section id="form-section">
                    <p>subscribe to our email list</p>
                    <form action="https://www.freecodecamp.com/email-submit" id="form">
                        <label for="mail">E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        <input id="submit" type="submit" value="submit" class="button" />
                    </form>
                    </section> */}
                </div>
                <footer id="page-footer">
                    <p>This is a beta project</p>
                    <p>Copyright 2021 github.com/medamineamara/tebsi-frontend</p>
                </footer>
            </div>
    );
}


export default Home;