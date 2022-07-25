import Grassland from './tiles/Grassland';
import { useState } from 'react';

const TownMap = () => {
    const tilesWidth = 20;
    const tilesHeight = 20;
    const tiles = [];
    {for (let i = 0; i < tilesWidth; i++) {
        for (let j = 0; j < tilesHeight; j++) {
            tiles.push(<Grassland />) 
        }
    }}

    const [ mapGrid, setMapGrid ] = useState(tiles)


    return <div className='tiled-map-area' >
        {mapGrid.map(x => {
            return <Grassland />
        })}
    </div>
}

export default TownMap;