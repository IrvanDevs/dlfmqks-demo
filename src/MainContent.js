import React from "react";
import "./MainContent.css";
import profile from './images/profile.jpg';
import instagram from './images/ig-logo.png';
import spotify from './images/sp-logo.png';
import apple from './images/am-logo.png';
import youtube from './images/yt-logo.png';

function MainContent(){
    const birthDate = new Date(2004, 5, 21);

    const calculateAge = (birthDate) => {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();

        if(monthDifference < 0 || (monthDifference === 0 && dayDifference <0)){
            age--;
        }

        return age;
    }

    const age = calculateAge(birthDate);

    return(
        <div className= "MainContent-Container">
            <div className= "MainContent">
                <img className = "Profile" src={profile} alt="profile-picture"></img>
                <h2>IRVANDEVS</h2>
                <div className= "Description">
                    <p>I'm a {age} year old musician from Indonesia who loves experimenting with sounds and lyrics.
                    <br></br>
                    I write and produce my own songs, but because I enjoy bringing my imagination to life through sound.
                    <br></br>
                    Each track is a creative journey, capturing the things I dream up.</p>
                </div>
                <div className= "SocialMedia">
                    <ul>
                        <li>
                            <a href="https://instagram.com/irvandevs" target="_blank"><img src={instagram} alt="instagram"></img></a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/artist/7aW6KYhD2gl47MToMbgW9l" target="_blank"><img src={spotify} alt="spotify"></img></a>
                        </li>
                        <li>
                            <a href="https://music.apple.com/id/artist/irvandevs/1492917798" target="_blank"><img src={apple} alt="apple"></img></a>
                        </li>
                        <li>                   
                            <a href="https://youtube.com/irvandevs" target="_blank"><img src={youtube} alt="youtube"></img></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainContent;