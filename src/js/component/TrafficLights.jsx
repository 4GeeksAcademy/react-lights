import React, { useState } from 'react';
import './TrafficLights.css'


function TrafficLight() {
  const [color, setColor] = useState('red');

  
  const changeColor = () => {
    switch (color) {
      case 'red':
        setColor('green');
        break;
      case 'yellow':
        setColor('red');
        break;
      case 'green':
        setColor('yellow');
        break;
      default:
        setColor('red');
    }
  };

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div className={`light red ${color === 'red' ? 'active' : ''}`}></div>
        <div className={`light yellow ${color === 'yellow' ? 'active' : ''}`}></div>
        <div className={`light green ${color === 'green' ? 'active' : ''}`}></div>
      </div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default TrafficLight;
