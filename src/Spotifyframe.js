import React from "react";
import "./Spotifyframe.css"

function Spotifyframe(){
    return(
        <div className="Spotify-Container">
            <div className="Line"></div>
            <div className="Spotify-Wrapper">
                <h1>SPOTIFY PAGE</h1>
                <iframe 
                src="https://open.spotify.com/embed/artist/7aW6KYhD2gl47MToMbgW9l" 
                frameBorder={0}
                title="Spotify Artist" 
                allow="encrypted-media" 
                allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}

export default Spotifyframe;










