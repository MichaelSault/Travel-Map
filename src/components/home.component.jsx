import '../App.css';
import React, {useState} from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import City from './city.component';
import CityLabel from './cityLabel.component';

function Home() {

  let nextId = 0;

  const [country, setCountries] = useState([]);
  const handleClick = (geo) => {
    if (!country.includes(geo.properties.name)) {
      const nextCountry = [
        ...country,
        geo.properties.name
      ];
      setCountries(nextCountry);
    } else {
      setCountries(prev => prev.filter(country => country !== geo.properties.name));
    }
    
  }
  

  return (
    <>
        <h1>Map of the World</h1>
        {country == "" ? <div className='blankH2'></div>:<h2>Selected Country: {country[country.length-1]}</h2>}
        
        <ComposableMap>
          <Geographies geography="/features.json">
            {({ geographies }) =>
            geographies.map((geo) => (
              <Geography 
                key={geo.rsmKey} 
                geography={geo}
                fill={ country.includes(geo.properties.name) ? "#24BB22" : "#EAEAEC"}
                stroke="#D6D6DA"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "#24BB22"},
                  pressed: { outline: "none", fill: "#54BB22" },
                }}
                onClick={() => handleClick(geo)}
              />
            ))
            }
          </Geographies>

          <CityLabel cityName="Toronto" coordNorth={43.6532} coordWest={79.3832} lineLengthX={50} lineLengthY={10} connect={"start"}/>
          <City cityName="Toronto" coordNorth={43.6532} coordWest={79.3832}/>
          <CityLabel cityName="Ottawa" coordNorth={45.4215} coordWest={75.6972} lineLengthX={40} lineLengthY={4} connect={"start"}/>
          <City cityName="Ottawa" coordNorth={45.4215} coordWest={75.6972}/>
          
          <CityLabel cityName="Reykjavik" coordNorth={64.1470} coordWest={21.9408} lineLengthX={-15} lineLengthY={18} connect={"end"}/>
          <City cityName="Reykjavik" coordNorth={64.1470} coordWest={21.9408}/>
          <City cityName="Fagurholsmyri" coordNorth={63.8792008} coordWest={16.6499656}/>
          <City cityName="Skagaströnd" coordNorth={65.8581} coordWest={20.1633}/>
          <City cityName="Selfoss" coordNorth={63.9318} coordWest={20.9997}/>

          <CityLabel cityName="Vancouver" coordNorth={49.2827} coordWest={123.1207} lineLengthX={-30} lineLengthY={-4} connect={"end"}/>
          <City cityName="Vancouver" coordNorth={49.2827} coordWest={123.1207}/>
          <CityLabel cityName="Seattle" coordNorth={47.6061} coordWest={122.3328} lineLengthX={-30} lineLengthY={4} connect={"end"}/>
          <City cityName="Seattle" coordNorth={47.6061} coordWest={122.3328}/>

          <CityLabel cityName="Las Vegas" coordNorth={36.1716} coordWest={115.1391} lineLengthX={-30} lineLengthY={4} connect={"end"}/>
          <City cityName="Las Vegas" coordNorth={36.1716} coordWest={115.1391}/>
          
          <CityLabel cityName="Tokyo" coordNorth={35.6764} coordWest={-139.6500} lineLengthX={15} lineLengthY={4} connect={"start"}/>
          <City cityName="Tokyo" coordNorth={35.6764} coordWest={-139.6500}/>
          <City cityName="Osaka" coordNorth={34.6937} coordWest={-135.5023}/>
          <City cityName="Yokohama" coordNorth={35.4437} coordWest={-139.6380}/>
          <City cityName="Hiroshima" coordNorth={34.3853} coordWest={-132.4553}/>

          <CityLabel cityName="London" coordNorth={51.5072} coordWest={0.1276} lineLengthX={-12} lineLengthY={6} connect={"end"}/>
          <City cityName="London" coordNorth={51.5072} coordWest={0.1276}/>
          <City cityName="Birmingham" coordNorth={52.4823} coordWest={1.8900}/>
          <CityLabel cityName="Hamburg" coordNorth={53.5488} coordWest={-9.9872} lineLengthX={12} lineLengthY={-10} connect={"start"}/>
          <City cityName="Hamburg" coordNorth={53.5488} coordWest={-9.9872}/>
          <City cityName="Berlin" coordNorth={52.5200} coordWest={-13.4050}/>
          <CityLabel cityName="Amsterdam" coordNorth={52.3676} coordWest={-4.9041} lineLengthX={22} lineLengthY={-25} connect={"start"}/>
          <City cityName="Amsterdam" coordNorth={52.3676} coordWest={-4.9041}/>
          <City cityName="Lille" coordNorth={50.6244} coordWest={-3.0679}/>
          <CityLabel cityName="Paris" coordNorth={48.8575} coordWest={-2.3514} lineLengthX={-12} lineLengthY={10} connect={"end"}/>
          <City cityName="Paris" coordNorth={48.8575} coordWest={-2.3514}/>
          <City cityName="Brussels" coordNorth={50.8477} coordWest={-4.3572}/>
        </ComposableMap>
    </>
  )
}

export default Home