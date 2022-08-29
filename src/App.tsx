import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Clock from './features/clock/Clock';
import useMediaQuery from '@mui/material/useMediaQuery';
import ItemList from './features/itemList/ItemList';
import MessageBox from './features/messageBox/MessageBox';

function App() {
  const ourMediaQuery = useMediaQuery('(min-width:400px)');
  const items = [
    'Shark',
    'Dolphin',
    'Octopus'
  ];
  return (
    <div className="App">
      <Counter/>
      <span>{`Is Screen at Minimum 400px: ${ourMediaQuery}`}</span>
      <Clock/>
      <ItemList items={items}/>
      <MessageBox text={"hi kasun"}/>
    </div>
  );
}

export default App;
