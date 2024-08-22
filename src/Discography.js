import React, { useState, useRef, useEffect} from "react";
import "./Discography.css";
import sfl from "./images/sfl.jpg";
import nbm from "./images/nbm.jpg";
import last from "./images/last.jpg";
import ffte from "./images/ffte.jpg";
import wsbs from "./images/wsbs.jpg";
import wycf from "./images/wycf.jpg";
import sosor from "./images/sosor.jpg";
import yyzx from "./images/yyzx.jpg";
import egol from "./images/egol.jpg";

function Discography() {
    const sflTrack = [
        { title: "1. Stalking for Love", duration: "03:10", artist: "IrvanDevs", link: "https://youtu.be/qSY-kkoA00o?si=m9vvzPCY7V1u393C" },
    ];

    const nbmTrack = [
        { title: "1. Never Be Mine", duration: "03:27", artist: "IrvanDevs", link: "https://youtu.be/u977JPdjYQ0?si=qXEv3QnL0UmAzH6A" },
    ];

    const lastTrack = [
        { title: "1. 12", duration: "03:09", artist: "IrvanDevs", link: "https://youtu.be/DS-O97pwBaU?si=q7u02gnpzU0egFhX" },
        { title: "2. Comes and Goes", duration: "03:17", artist: "IrvanDevs", link: "https://youtu.be/1x2fK2FkqYk?si=fC_qRXeS1Wjr5BZJ" },
        { title: "3. 12 (Inst.)", duration: "03:09", artist: "IrvanDevs", link: "https://youtu.be/aAgSM3SE0ZU?si=1sALnuoieuDf_w3T" },
        { title: "4. Comes and Goes (Inst.)", duration: "03:17", artist: "IrvanDevs", link: "https://youtu.be/ZwejdbYt_s8?si=F-5mIazMnZMaG4j6" },
    ];

    const ffteTrack = [
        { title: "1. Far from the Expectation", duration: "03:57", artist: "IrvanDevs", link: "https://youtu.be/HKk85Fjn7f4?si=Hd11Ddk52jDxMRqo" },
        { title: "2. Far from the Expectation (Inst.)", duration: "03:57", artist: "IrvanDevs", link: "https://youtu.be/C_uUWBIv5-I?si=kXHmGm298F4Z_fIR" },
    ]

    const wsbsTrack = [
        { title: "1. 我是不是你最疼爱的人", duration: "03:51", artist: "IrvanDevs (Originally by 潘越云 | Michelle Pan)", link: "https://youtu.be/VwGptqeLxSs?si=1cPy5qdf2nC5HE8i" },
    ]

    const wycfTrack = [
        { title: "1. Wish You Can Feel What I Feel", duration: "02:46", artist: "IrvanDevs", link: "https://youtu.be/jlE-53yrRfc?si=NPeqn0m3WO8Shosz" },
        { title: "2. Wish You Can Feel What I Feel (Inst.)", duration: "02:46", artist: "IrvanDevs", link: "https://youtu.be/X4np6XNrjzA?si=DmCrvLTxYcUEyDHD" },
    ]

    const sosorTrack = [
        { title: "1. 18 (Intro)", duration: "01:28", artist: "IrvanDevs", link: "https://youtu.be/jqtugoqbcoE?si=h-w24NHkD6AsWdf6" },
        { title: "2. IDGAF", duration: "03:12", artist: "IrvanDevs", link: "https://youtu.be/sJ-lg3vXYhE?si=CsuYPp9P0OGxW3k2" },
        { title: "3. Lost My Way", duration: "02:37", artist: "IrvanDevs", link: "https://youtu.be/sHqtx6JEivo?si=K61I-y4cnoktiroL" },
        { title: "4. Fell Too Hard", duration: "04:03", artist: "IrvanDevs", link: "https://youtu.be/iNvDyApQzpw?si=0EG_yy7HuZ8FCqdb" },
        { title: "5. Dark Days", duration: "03:21", artist: "IrvanDevs", link: "https://youtu.be/4h6ehOPO1CY?si=IRArlMOukQQuovX5" },
    ]

    const yyzxTrack = [
        { title: "1. 雨一直下", duration: "04:16", artist: "IrvanDevs (Originally by 张宇 | Phil Chang)", link: "https://youtu.be/bzeCl8OVzOk?si=IrKRl05NUn9f36Q_" },
    ]

    const egolTrack = [
        { title: "1. Endless Game of Love", duration: "03:00", artist: "IrvanDevs", link: "https://youtu.be/xbAcWVugwSg?si=JfDjdv_ZoyHhUL_H" },
        { title: "2. Endless Game of Love (Inst.)", duration: "03:00", artist: "IrvanDevs", link: "https://youtu.be/WfE52psRj0U?si=jGvtoFCOgHdB3150" },
    ]

    const albums = [
        { artwork: sfl, title: "Stalking for Love", info: "Single | 1 Track | 09.01.2020", tracks: sflTrack },
        { artwork: nbm, title: "Never Be Mine", info: "Single | 1 Track | 26.11.2020", tracks: nbmTrack },
        { artwork: last, title: "Last?", info: "EP | 4 Tracks | 12.01.2022", tracks: lastTrack },
        { artwork: ffte, title: "Far from the Expectation", info: "Single | 2 Tracks | 04.06.2022", tracks: ffteTrack },
        { artwork: wsbs, title: "我是不是你最疼爱的人", info: "Single | 1 Track | 12.08.2022", tracks: wsbsTrack },
        { artwork: wycf, title: "Wish You Can Feel What I Feel", info: "Single | 2 Tracks | 02.02.2023", tracks: wycfTrack },
        { artwork: sosor, title: "Same Old Story, on repeat.", info: "EP | 5 Tracks | 03.08.2023", tracks: sosorTrack },
        { artwork: yyzx, title: "雨一直下", info: "Single | 1 Tracks | 12.01.2024", tracks: yyzxTrack },
        { artwork: egol, title: "Endless Game of Love", info: "Single | 2 Tracks | 26.04.2024", tracks: egolTrack },
    ];

    const [openTracklists, setOpenTracklists] = useState(new Array(albums.length).fill(false));

    const handleAlbumClick = (index) => {
        const newOpenTracklists = [...openTracklists];
        newOpenTracklists[index] = !newOpenTracklists[index];
        setOpenTracklists(newOpenTracklists);
    };

    return (
        <div className="Discography-Container">
            <h2>DISCOGRAPHY</h2>
            <p className="ClickInfo">click to open/close tracklist</p>
            <div className="Discography">
                {albums.map((album, index) => (
                    <div key={index} className="Album">
                        <div onClick={() => handleAlbumClick(index)}>
                            <Album
                                artwork={album.artwork}
                                title={album.title}
                                info={album.info}
                            />
                        </div>
                        <Tracklist
                            tracks={album.tracks}
                            isOpen={openTracklists[index]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}


function Album(props){
    const {artwork, title, info } = props;
    return(
        <div className="Album-Container">
            <div className="Artwork">
                <img src={artwork}></img>
            </div>
            <div className="Album-Info">
                <p className="Title">{title}</p>
                <p className="Info">{info}</p>
            </div>
        </div>
    );
}

function Tracklist({tracks, isOpen}) {
    const tracklistRef = useRef(null);

    const [maxHeight, setMaxHeight] = useState("0px");

    useEffect(() => {
        if (isOpen) {
            setMaxHeight(`${tracklistRef.current.scrollHeight}px`);
        } else {
            setMaxHeight("0px");
        }
    }, [isOpen, tracks]);

    return (
        <div className={`Tracklist-Container ${isOpen ? "Open" : ""}`}
        style={{ maxHeight }}
        ref={tracklistRef}>
            <ul>
                {tracks.map((track, index) => (
                    <a href={track.link} key={index} target="_blank">
                        <li>
                            <Track 
                                TrackTitle={track.title}
                                Duration={track.duration}
                                Artist={track.artist}
                            />
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    );
}


function Track(props){
    const {TrackTitle, Duration, Artist} = props;
    
    return(
        <div className = "Track-Container">
            <div className="Left">
                <p className="TrackTitle">{TrackTitle}</p>
                <p className="Artist">{Artist}</p>
            </div>

            <div className="Right">
                <p className="Duration">{Duration}</p>
            </div>
        </div>
    );
}

export default Discography;