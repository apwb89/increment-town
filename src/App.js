import { useState } from 'react';
import './App.css';
import ResourceArea from './components/ResourceArea';
import TownMap from './components/TownMap';
import SideMenu from './components/SideMenu';

function App() {
  const [ resources, setResources ] = useState({
    population: 2,
    water: 10,
    wood: 10,
  })
  const [ menu, setMenu ] = useState('Quarry');

  return (
    <div className="App">
      <ResourceArea resources={resources}/>
        <div className='map-and-menu-area'>
          <TownMap setResources={setResources}/>
          <SideMenu  menu={menu} setMenu={setMenu}/>
        </div>
    </div>
  );
}

export default App;
