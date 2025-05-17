import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const header = React.createElement('h1', null, 'List of fruits')
  const fruits = ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"]
  return (
    <div>
      <div>{header}</div>
      <ul>
        {
          fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
