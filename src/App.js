import React from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Discography from './Discography';
import YoutubeFrame from './Ytframe';
import Spotifyframe from './Spotifyframe';
import Footer from './Footer';

function App() {
  return (
    <div className= "App-Container">
      <Header />
      <MainContent />
      <Discography />
      <YoutubeFrame />
      <Spotifyframe />
      <Footer />
    </div>
  );
}

export default App;