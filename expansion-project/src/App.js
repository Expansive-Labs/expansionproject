import './App.css';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';
import { type } from '@testing-library/user-event/dist/type';
// After you compile & deploy Greeter.sol - paste the contract address below
// If Error = ABI is missing.. re-compile, re-deploy and paste that contract address below
// npx hardhat run --network localhost scripts/deploy.js
// Switch to the hardhat network inside of metamask to unteract with the smart contracts
const greeterAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

function App() {

  const [greeting, setGreetingValue] = useState()

  async function requestAccount() {
    // Requests the account information from their metamask wallet
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function fetchGreeting() {
    // If the user has MetaMask, 'window.ethereum' will detect if they are connected
    if (typeof window.ethereum !== 'undefined') {

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)

      try {
        const data = await contract.greet()
        console.log('data: ', data)

      } catch (error) {
        console.log("Error: ", error)
      }
    }
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
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      // This is whatever the user types into the input box as the greeting
      const transaction = await contract.setGreeting(greeting)
      setGreetingValue('')
      // Waits for the tx to be confirmed onto the blockchain
      await transaction.wait()
      // Log the new greeting value from the blockchain
      fetchGreeting()
    }
  }

  
  const [theme, setTheme] = useState('light');
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
          <button onClick={toggleTheme}>☾☼</button>
          <h1>Expansion Project</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
