import React from "react";
import "./Ytframe.css"

function YoutubeFrame(){
    return(
        <div className="Youtube-Container">
            <div className="Line"></div>
            <div className="Youtube-Wrapper">
                <h1>YOUTUBE CHANNEL</h1>
                <iframe src="https://www.youtube.com/embed/videoseries?si=H42uQGrpMKUOpXOZ&amp;list=PLT_WKMFkPX-SLx6Nr81DJ_e1iqLBBt6hy" title="IrvanDevs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default YoutubeFrame;