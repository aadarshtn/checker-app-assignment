import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className = "tabs">
        <div className = "tab">
          <div className = "list">
            { data.map(cards => (
              <Card cards = {cards} />
            )) }
          </div>
        </div>
        <div className = "tab">
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
