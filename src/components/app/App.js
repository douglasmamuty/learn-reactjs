import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
import {formatName} from '../../utils/Utils.js';



function App() {

  const user = {
    firstName: 'Douglas',
    lastName: 'Saldanha'
  };
  
  const getGreeting = (user) => {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  
  const element = (
    <div>
      <h1>
        Hello, {formatName(user)}!
      </h1>    
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  return (
    <div>
      <div>
        {element}
      </div>
      <div>
        {getGreeting()}      
      </div>
    </div>
    
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
