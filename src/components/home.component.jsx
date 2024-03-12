import '../App.css';
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import City from './city.component';
import CityLabel from './cityLabel.component';

function Home() {

  const handleClick = (geo) => {
    console.log(geo.properties.name)
  }

  return (
    <>
        <ComposableMap>
          <Geographies geography="/features.json">
            {({ geographies }) =>
            geographies.map((geo) => (
              <Geography 
                key={geo.rsmKey} 
                geography={geo}
                fill="#EAEAEC"
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

          <CityLabel cityName="Los Vegas" coordNorth={36.1716} coordWest={115.1391} lineLengthX={-30} lineLengthY={4} connect={"end"}/>
          <City cityName="Los Vegas" coordNorth={36.1716} coordWest={115.1391}/>
          
          <CityLabel cityName="Tokyo" coordNorth={35.6764} coordWest={-139.6500} lineLengthX={15} lineLengthY={4} connect={"start"}/>
          <City cityName="Tokyo" coordNorth={35.6764} coordWest={-139.6500}/>
          <City cityName="Osaka" coordNorth={34.6937} coordWest={-135.5023}/>
          <City cityName="Yokohama" coordNorth={35.4437} coordWest={-139.6380}/>
          <City cityName="Hiroshima" coordNorth={34.3853} coordWest={-132.4553}/>
        </ComposableMap>       
    </>
  )
}

export default Home