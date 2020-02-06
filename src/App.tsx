import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/calendar.css';
import AlertComponent from './components/AlertComponent';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AlertComponent showCancel continue={() => {}} show={true} 
        title='Success' subtitle="Events weren't sent correctly or server was not found. Please make sure you have access to the internet and that you correctly input the kitchen duty assignments."/> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
