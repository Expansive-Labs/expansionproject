import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import "98.css";
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';
import ExpansionProject from './artifacts/contracts/ExpansionProject.sol/ExpansionProject.json';

const greeterAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const expansionProjectAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

function App() {

  const [greeting, setGreetingValue] = useState('');
  const [userAccount, setUserAccount] = useState(''); // Who we want to send EXP to
  const [amount, setAmount] = useState(0); // Amount of EXP we want to send, default is zero
  const [count, setCount] = React.useState(0);
  
  // Expansion Project Functions \\

  // Reads how many EXP tokens the signed-in user has in their wallet
  async function getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(expansionProjectAddress, ExpansionProject.abi, provider);
      const balance = await contract.balanceOf(account);
      console.log("Balance: ", balance.toString());
    }
  }

  // Allows a user to send their EXP tokens to another account
  async function sendTokens() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(expansionProjectAddress, ExpansionProject.abi, signer);
      const weiToEthConverter = ethers.utils.parseEther(amount.toString());
      const transaction = await contract.transfer(userAccount, weiToEthConverter);
      await transaction.wait();
      console.log(`${amount} Tokens have successfully been sent to: ${userAccount}`);
    }
  }

  // Greeter Contract Functions \\
  async function fetchGreeting() {
    // If the user has MetaMask, 'window.ethereum' will detect if they are connected
    if (typeof window.ethereum !== 'undefined') {

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider);

      try {
        const data = await contract.greet();
        console.log('data: ', data);

      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  async function requestAccount() {
    // Requests the account information from their metamask wallet
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function setGreeting() {
    if (!greeting) return // Checks if they actaully typed in a greeting on the frontend
    if (typeof window.ethereum !== 'undefined') {
      // Waits for the user to "Connect" to your site..
      await requestAccount();
      // Since we are creating an update to the blockchain, this allows them to create a tx through a 'signer'
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      // New instance of that contract 
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      // This is whatever the user types into the input box as the greeting
      const transaction = await contract.setGreeting(greeting);
      setGreetingValue('');
      // Waits for the tx to be confirmed onto the blockchain
      await transaction.wait();
      // Log the new greeting value from the blockchain
      fetchGreeting();
    }
  }


    // MetaMask Connection
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

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

  // Visitor Counter
  const [visitorCount, setVisitorCount] = useState(0);

  // Dark and Light Mode
  // const rootElement = document.getElementById("root");
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


  // CSS | UX \\
  return (
    
    <div className="App">
      <header className='App Header'>
        {/* <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input 
          onChange={error => setGreetingValue(error.target.value)}
          placeholder="Set greeting" // Will look greyed out in the input field
          value={greeting}
        /> */}

    {/* MetaMask Connection */}
    <div style={{
      // Button vs backround
      position: "absolute",
      top: "0",
      right: "0",
      fontSize: "20px",
      padding: "16px 24px",
      width: "200px",
      height: "50px",
    }}>
      <button 
        onClick={handleMetaMaskConnection}
        style={{
          // Button specifics
          fontSize: "20px",
          padding: "12px 24px",
          width: "200px",
          height: "51px",
          borderRadius: "8px",
          letterSpacing: "1px"

        }}>Connect Wallet</button>
    </div>

    {/* Dark Mode */}
    <div className={`App ${theme}`}>

        <main style={{ marginTop: "16px"}}>

          <button 
            onClick={toggleTheme} 
            style={{
              fontSize: "1.2rem",
              padding: "9px 16px",
              borderRadius: "50px",
            }}>
            {theme === 'light' ? '☼' : '☾'}
          </button>

        </main>
      </div>

    {/* Music Links */}
    <div style={{ 
      marginTop: "32px", 
      position: "relative" 
      }}>
      <button style={{ 
        borderRadius: "8px", 
        padding: "13px 24px", 
        position: "absolute", 
        top: "-70px", 
        left: "32px",
        letterSpacing: "1px"
      }}>
      <a href="https://linktr.ee/expansionproject" target="_blank" style={{ 
        fontSize: "large", 
        color: "black", 
        textDecoration: "none" 
        
      }}>Links</a>
      </button>
    </div>

    {/* Claim EXP */}
    <div style={{
        position: "absolute",
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

    <div>
      <h1 style={{  
        fontFamily: 'Press Start 2P', 
        color: "silver", 
        textShadow: "1px 7px #555",
        transform: "skew(-16deg,0deg)"

      }}>EXPANSION PROJECT</h1>
    </div>

  <div style={{ width: 355, height: 155, margin: "0 auto", marginBottom: 0 }} className="window">
    <div className="title-bar">
    <div className="title-bar-text" style={{ }}>Music Player</div>
    <div className="title-bar-controls">

      <button aria-label="Minimize" />
      <button aria-label="Maximize" />
      <button aria-label="Close" />

    </div>
  </div>

      <div className="window-body">
        <p style={{ textAlign: "center", color: "black", fontWeight: "bold", paddingTop: "5px" }}>Play Count: {count}</p>

          <div className="field-row" style={{ justifyContent: "center" }}>
            <button onClick={() => setCount(count + 1)}>▶️</button>
            <button onClick={() => setCount(count)}>⏩</button>
            <button onClick={() => setCount(0)}>⏹️</button>  
          </div>

          <div class="field-row" style={{ paddingTop: "8px" }}>
            <label for="range25">Volume:</label>
            <label for="range26">Low</label>
            <input id="range26" type="range" min="1" max="11" value="5" />
            <label for="range27">High</label>
          </div>
          
        <p style={{ textAlign: "center", color: "black", paddingTop: "3px" }}>Visitor Count: {visitorCount}</p>
        </div>
      </div>

        {/* <br />
        <button onClick={getBalance}>Get Balance</button>
        <button onClick={sendTokens}>Send Tokens</button>
        <input onChange={error => setUserAccount(error.target.value)} placeholder= "Account ID" />
        <input onChange={error => setAmount(error.target.value)} placeholder= "Amount" 
        /> */}

      </header>
    </div>
  );
}

export default App;