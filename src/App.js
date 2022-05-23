import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import ToggleSwitch from './components/Toggle';
import Timecomponent from './components/Timecomponent';

const App = () => {
  const [toggled,setToggled] = useState(false);

  return (
    <div className="App">
      <Header/>
      <ToggleSwitch label="Date" onChange={(event)=> setToggled(event.target.checked)}/>
      <Timecomponent switch={toggled} />
    </div>
  );
}

export default App;
