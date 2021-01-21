import React from 'react';
import './App.css';
import Posts from './components/Posts';

//top level component, calls Posts component in jsx
function App() {
  return (
    <div className="App">
      <h1>Pride Places Coding Challenge</h1>
      <Posts></Posts>
    </div>
  );
}

export default App;
