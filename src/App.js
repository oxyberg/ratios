import React from 'react';
import Tab from './Tab';
import './styles/main.scss';

function App() {
  return (
    <div>
      <Tab label="16:9" hotkey="V" isActive={false}/>
      <Tab label="4:3" hotkey="P" isActive={true}/>
    </div>
  );
}

export default App;
