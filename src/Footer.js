import React from "react";
import "./Footer.css";
import logo from "./images/id-black.png";

function Footer(){
    const Year = new Date();
    const CopyYear = Year.getFullYear();

    return(
        <div className="Footer-Container">
            <div className="Line"></div>
            <div className="Footer-Wrapper">
                <img src= {logo} className="Logo"></img>
                <div className="Copy-Wrapper">
                    <p className="Copy">&copy;</p>
                    <p>{CopyYear} IrvanDevs</p>
                </div>
            </div>
        </div>
    );
}


export default Footer;