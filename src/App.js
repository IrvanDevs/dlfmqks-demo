import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Discography from './Discography';
import YoutubeFrame from './Ytframe';
import SpotifyFrame from './Spotifyframe';
import Footer from './Footer';

function App() {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = {
    header: useRef(null),
    mainContent: useRef(null),
    discography: useRef(null),
    youtubeFrame: useRef(null),
    spotifyFrame: useRef(null),
    footer: useRef(null),
  };

  const handleScroll = () => {
    const newVisibleSections = {};
    Object.keys(sectionRefs).forEach((key) => {
      if (sectionRefs[key].current) {
        const { top, bottom } = sectionRefs[key].current.getBoundingClientRect();
        // Check if the section is in the viewport
        newVisibleSections[key] = top < window.innerHeight && bottom > 0;
      }
    });
    setVisibleSections(newVisibleSections);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Initial check to set the visibility on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App-Container">
        <Header />
      <div ref={sectionRefs.mainContent} className={`fade-in ${visibleSections.mainContent ? 'visible' : ''}`}>
        <MainContent />
      </div>
      <div ref={sectionRefs.discography} className={`fade-in ${visibleSections.discography ? 'visible' : ''}`}>
        <Discography />
      </div>
      <div ref={sectionRefs.youtubeFrame} className={`fade-in ${visibleSections.youtubeFrame ? 'visible' : ''}`}>
        <YoutubeFrame />
      </div>
      <div ref={sectionRefs.spotifyFrame} className={`fade-in ${visibleSections.spotifyFrame ? 'visible' : ''}`}>
        <SpotifyFrame />
      </div>
      <div ref={sectionRefs.footer} className={`fade-in ${visibleSections.footer ? 'visible' : ''}`}>
        <Footer />
      </div>
    </div>
  );
}

export default App;