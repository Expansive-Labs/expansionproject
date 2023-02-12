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

  // User Interface \\

  const [theme, setTheme] = useState('light');
  // const rootElement = document.getElementById("root");
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
    }, [theme]);
  
  const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
      setVisitorCount(visitorCount + 1);
    }, []);




  return (
    
    <div className="App">
      <header className='App Header'>
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input 
          onChange={error => setGreetingValue(error.target.value)}
          placeholder="Set greeting" // Will look greyed out in the input field
          value={greeting}
        />

    <div className={`App ${theme}`}>
        <button onClick={toggleTheme}> ☾☼ </button>
        <h1 style={{ 
            fontFamily: "Courier New, monospace", 
            color: "silver", 
            textShadow: "1px 5px #444",
            transform: "skew(-16deg,0deg)"
        }}>EXPANSION PROJECT</h1>
    </div>

      <div style={{ width: 300, margin: "0 auto", marginBottom: 50 }} className="window">
        <div className="title-bar">
        <div className="title-bar-text">Counter</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

        <div className="window-body">
          <p style={{ textAlign: "center", color: "black" }}>Current Count: {count}</p>
          <p style={{ textAlign: "center", color: "black" }}>Visitor Count: {visitorCount}</p>
          <div className="field-row" style={{ justifyContent: "center" }}>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>0</button>
          </div>
        </div>
      </div>

        <br />
        <button onClick={getBalance}>Get Balance</button>
        <button onClick={sendTokens}>Send Tokens</button>
        <input onChange={error => setUserAccount(error.target.value)} placeholder= "Account ID" />
        <input onChange={error => setAmount(error.target.value)} placeholder= "Amount" 
        />

      </header>
    </div>
  );
}

export default App;