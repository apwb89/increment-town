import { WoodCutters, Quarry, Camp, Lake, Farm } from './buildings';

const TownMap = () => {
    return <div className='map-area' style={{backgroundImage: `url("/bad_bg.png")`}}>
       <WoodCutters />
       <Quarry />
       <Camp />
       <Lake />
       <Farm />
    </div>
}

export default TownMap;