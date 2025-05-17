import logo from './logo.svg';
import './App.css';
import React from 'react'
function App() {
  const element1 = React.createElement('h1', null, 'Hello ReactJS')
  const element2 = React.createElement('div',
    {
      id: 'getting-container',
      className: 'container'
    },
    "Hello"
  )
  const element3 = React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      'Day la the h2 trong 1 the div'
    )
  )
  const element4 = React.createElement(
    'ul',
    {className: 'item-list'},
    React.createElement('il', null, 'Item so 1'),
    React.createElement('il', null, 'Item so 2'),
    React.createElement('il', null, 'Item so 3'),
  )
  return (
    <div>
        <div>{element1}</div>
        <div>{element2}</div>
        <div>{element3}</div>
        <div>{element4}</div>
    </div>
  );
}

export default App;
