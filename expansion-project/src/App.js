import './App.css';
import React from "react";
import "98.css";
import { useState, useEffect } from 'react';
// import { ethers } from 'ethers';
import ExpansionProject from './artifacts/contracts/ExpansionProject.sol/ExpansionProject.json';

// const expansionProjectAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

function App() {

  // MetaMask Connection
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

  // Audio Play Counter and Volume Slider
  const [audioCount, setAudioCount] = React.useState(0);
  const [audioVolume, setAudioVolume] = useState(5);

  // Video Play Counter and Volume Slider
  const [videoCount, setVideoCount] = React.useState(0);
  const [videoVolume, setVideoVolume] = useState(5);

  // Webaite Visitor Counter
  const [visitorCount, setVisitorCount] = useState(0);

  const handleMetaMaskConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsMetaMaskConnected(true);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.error("MetaMask is not available in your browser");
    }
  };

  // Dark and Light Mode
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    setVisitorCount(visitorCount + 1);
  }, []);

  // CSS | UX \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  return (
    
    <div className="App">
      <header className='App Header'>

    {/* MetaMask Connection */}
    <div style={{
      // Button vs background
      position: "fixed",
      top: "0",
      right: "0",
      fontSize: "20px",
      padding: "16px 24px",
      width: "200px",
      height: "50px",
      display: "flex",
      alignItems: "center"
    }}>
      <div style={{
        // Green light
        width: "16px",
        height: "12px",
        backgroundColor: isMetaMaskConnected ? "#07FFA3" : "#CF1000",
        borderRadius: "50%",
        marginRight: "16px",
        marginLeft: "-8px",
        border: isMetaMaskConnected ? "2px solid gray" : "2px solid gray"
      }} />
      <button 
        onClick={handleMetaMaskConnection}
        style={{
          // Button specifics
          fontSize: "16px",
          fontSize: "large",
          padding: "8px 24px",
          width: "200px",
          height: "55px",
          borderRadius: "8px",
          letterSpacing: "2px",
          cursor: "pointer"
        }}>
        {isMetaMaskConnected ? "Wallet Connected" : "Connect Wallet"}
      </button>
    </div>

    {/* Dark Mode */}
    <div className={`App ${theme}`}>

      <main style={{ marginTop: "10px" }}>
        <button 
          onClick={toggleTheme} 
          style={{
            fontSize: "1.2rem",
            padding: "25px",
            borderRadius: "50px",
            transform: "scale(0.8)",
            transformOrigin: "center center",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            color: theme === 'light' ? 'black' : 'gold',
            backgroundColor: theme === 'light' ? 'silver' : '#05072d',
            border: `1px solid ${theme === 'light' ? 'black' : 'gold'}`

          }}>
        <span style={{
          fontSize: "2rem",
          lineHeight: "0",
          position: "relative",
          top: "4px",
          left: "1px"
        }}>{theme === 'light' ? '☼' : '☾'}</span>
        </button>

      </main>
      </div>

  {/* Social Links */}
  <div style={{ 
    marginTop: "24px", 
    position: "fixed" 
  }}>
    <button style={{ 
      borderRadius: "8px", 
      padding: "13px 24px", 
      position: "absolute", 
      top: "-100px", 
      left: "32px",
      letterSpacing: "1px",
      cursor: "pointer"
    }}>
      <a href="https://linktr.ee/expansionproject" target="_blank" style={{textDecoration: "none"}}>
        <img style={{
          display: "block",
          "-webkit-user-select": "none",
          margin: "auto",
          backgroundColor: "hsl(0, 0%, 90%)",
          transition: "background-color 300ms",
          width: "40px",
          height: "40px",
          marginRight: "16px"
        }} src="https://gateway.pinata.cloud/ipfs/QmV113mue8m3mnPqCUPFE9R6hGPs5DD8MwaePfiku41ADd?_gl=1*1mex13o*_ga*MTgyMjQ0MzU4Ny4xNjc2OTE4NTE2*_ga_5RMPXG14TE*MTY3Njk5NjUwMi4yLjAuMTY3Njk5NjUwNy41NS4wLjA." />
        <span style={{
          fontSize: "large", 
          color: "black"
        }}>Socials!</span>
      </a>
    </button>
  </div>

    {/* Videos Tab */}
    <div style={{ 
    marginTop: "21px", 
    position: "fixed" 
  }}>
    <button style={{ 
      borderRadius: "8px",
      padding: "40px 24px 13px",
      padding: "13px 24px", 
      position: "absolute", 
      top: "-8px", 
      left: "32px",
      letterSpacing: "1px",
      cursor: "pointer"
    }}>
      <a href="https://www.youtube.com/@expansionproject" target="_blank" style={{ textDecoration: "none" }}>
        <img style={{
          display: "block",
          "-webkit-user-select": "none",
          margin: "auto",
          backgroundColor: "hsl(0, 0%, 90%)",
          transition: "background-color 300ms",
          width: "40px",
          height: "40px",
          marginRight: "16px"
        }} src="https://gateway.pinata.cloud/ipfs/QmNnQfmieBumfPgXB5o1Gf5qNANYhNS9yptWAniyHgjr8f?_gl=1*1gaswm7*_ga*MTgyMjQ0MzU4Ny4xNjc2OTE4NTE2*_ga_5RMPXG14TE*MTY3NjkxODUxNi4xLjEuMTY3NjkxODUyMy41My4wLjA." />
        <span style={{
          fontSize: "large", 
          color: "black", 
          textDecoration: "none"
        }}>Videos!</span>
      </a>
    </button>
  </div>

    {/* Photos Tab */}
    <div style={{ 
      marginTop: "110px", 
      position: "fixed"
  }}>
    <button style={{ 
      borderRadius: "8px",
      padding: "40px 24px 13px",
      padding: "13px 24px", 
      position: "absolute", 
      top: "-8px", 
      left: "32px",
      letterSpacing: "1px",
      cursor: "pointer"
    }}>
      <a href="https://linktr.ee/expansionproject" target="_blank" style={{ textDecoration: "none" }}>
        <img style={{
          display: "block",
          "-webkit-user-select": "none",
          margin: "auto",
          backgroundColor: "hsl(0, 0%, 90%)",
          transition: "background-color 300ms",
          width: "40px",
          height: "40px",
          marginRight: "16px"
        }} src="https://gateway.pinata.cloud/ipfs/QmUB8GvXrPLCPtXXy5n5KLe1xfuaCoZDjjyD5Y55KLQgcW?_gl=1*zr232i*_ga*MTgyMjQ0MzU4Ny4xNjc2OTE4NTE2*_ga_5RMPXG14TE*MTY3NzAwOTEwNi4zLjAuMTY3NzAwOTExMi41NC4wLjA." />
        <span style={{
          fontSize: "large", 
          color: "black", 
          textDecoration: "none"
        }}>Photos!</span>
      </a>
    </button>
  </div>

    {/* Claim EXP faucet */}
    <div style={{
      position: "fixed",
      top: 70,
      right: 8,
    }}>
      <h1 style={{  
        fontFamily: 'Press Start 2P', 
        color: "silver", 
        textShadow: "1px 7px #555",
        transform: "skew(-16deg,0deg)",
        fontSize: "10px" // you can adjust the value as needed

      }}>^ Claim EXP tokens!
      </h1>
    </div>

  <div style={{ marginTop: "50px" }}>
    <h1 style={{
      fontFamily: 'Press Start 2P',
      color: "silver",
      textShadow: "1px 7px #555",
      transform: "skew(-16deg,0deg)",
      WebkitTextStroke: theme === 'light' ? "1.5px black" : "none",
      textStroke: theme === 'light' ? "2px black" : "none",
      WebkitTextFillColor: theme === 'light' ? "#09996d" : "#07FFA3",
      fontSize: "51px",
      marginBottom: "20px"
    }}>
      EXPANSION PROJECT
    </h1>
  </div>

  {/* Audio Player */}
  <div style={{ 
    width: 355, 
    height: 155, 
    margin: "0 auto", 
    marginBottom: 0 }} 
    
    className="window">
      <div className="title-bar">
        <div className="title-bar-text" style={{ letterSpacing: "1px", 
          }}>Music Player - Now playing.. Royal</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <p style={{ 
          textAlign: "center", 
          color: "black", 
          paddingTop: "2px", 
          letterSpacing: "1px", 
          }}>Play Count: {audioCount}</p>

        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={() => setAudioCount(audioCount + 1)}>▶️</button>
          <button onClick={() => setAudioCount(audioCount)}>⏩</button>
          <button onClick={() => setAudioCount(0)}>⏹️</button>  
        </div>

        <div class="field-row" style={{ 
          paddingTop: "4px", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center" ,
          textAlign: "center"

          }}>
          <div style={{ 
            marginBottom: "1px", 
            fontWeight: "bold"
            }}>Volume:</div>

          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            width: "100%" 

            }}>
            <label for="range26" style={{ 
              paddingLeft: "13px", 
              letterSpacing: "1px", 
              }}>Low</label>

            <label for="range27" style={{ 
              paddingRight: "13px", 
              letterSpacing: "1px",
              }}>High</label>
              
          </div>
            <input
              id="range26"
              type="range"
              min="1"
              max="11"
              value={audioVolume}
              onChange={(e) => setAudioVolume(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>

        <p style={{ 
            textAlign: "center", 
            color: "black", 
            paddingTop: "3px", 
            letterSpacing: "1px", 
          
          }}>Visitor Count: {visitorCount}</p>
      </div>
    </div>

  {/* Video Media Player */}
  <div style={{ 
    width: 480, 
    height: 480, 
    margin: "0 auto", 
    marginBottom: 0 }} 
    className="window">
      <div className="title-bar">
        <div className="title-bar-text" style={{ letterSpacing: "1px", 
          }}>Video Media Player - Now watching.. Emagination</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <p style={{ 
            textAlign: "center", 
            color: "black", 
            paddingTop: "2px", 
            letterSpacing: "1px", 
          }}>View Count: {videoCount}</p>

        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={() => setVideoCount(videoCount + 1)}>▶️</button>
          <button onClick={() => setVideoCount(videoCount)}>⏩</button>
          <button onClick={() => setVideoCount(0)}>⏹️</button>  
        </div>

        {/* YouTube embedded video */}
        <iframe style={{
          paddingTop: "16px"
        }}
          width="440"             
          height="300" 
          src="https://www.youtube.com/embed/Mflab1MxKaI"
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
        />

        <div class="field-row" style={{ 
          paddingTop: "4px", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center" ,
          textAlign: "center"

          }}>
          <div style={{ 
            marginBottom: "1px", 
            fontWeight: "bold"
            }}>Volume:</div>

          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            width: "100%" 

            }}>
            <label for="range26" style={{ 
              paddingLeft: "13px", 
              letterSpacing: "1px", 
              }}>Low</label>

            <label for="range27" style={{ 
              paddingRight: "13px", 
              letterSpacing: "1px",
              }}>High</label>
          
          {/* Volume Slider */}
          </div>
            <input
              id="range26"
              type="range"
              min="1"
              max="11"
              value={videoVolume}
              onChange={(e) => setVideoVolume(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
      </div>
    </div>

      {/* EXPANSIVE LABS */}
      <div style={{ position: "relative", top: "-10px", margin: "10px 0" }}>
        <h1 style={{ fontFamily: "Press Start 2P", paddingTop: "25px", fontSize: "8px", color: "#717171" }}>
          This webpage is powered by 
          <a href="https://github.com/Expansive-Labs" target="_blank" rel="noopener noreferrer" style={{color: "#09846d", textDecoration: "none", letterSpacing: "2px" }}> ///EXPANSIVE LABS///</a>
        </h1>
      </div>

      </header>
    </div>
  );
}

export default App;