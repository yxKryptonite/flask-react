import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        });
        // fetch('http://127.0.0.1:5000/data').then(res => console.log(res))
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;
