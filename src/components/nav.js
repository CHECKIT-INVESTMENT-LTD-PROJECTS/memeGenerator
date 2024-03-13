// import logo from "../logo.svg";
import React from 'react';
import Trollimage from '../images/troll_logo.png'

function Nav(){
    return (
        <header className="Header">
            <group  className="Header--logo">
                <img src={Trollimage} alt="Troll Logo" className="Header--img"/>
                <h3>Meme Generator</h3>
            </group>


            <small className="Header--p">React Course - Project 3</small>
        </header>
    )
}

export default Nav
