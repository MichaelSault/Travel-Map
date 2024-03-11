import '../App.css';
import React from 'react';
import { Marker } from 'react-simple-maps';

function City(cityData) {

    return (
        <Marker key={cityData.cityName} coordinates={[-cityData.coordWest, cityData.coordNorth]}>
            <circle r={2} fill="#a83248" stroke="#fff" strokeWidth={0.5} />
            <text
            textAnchor="middle"
            y={-2}
            style={{ fontFamily: "system-ui", fill: "#a83248" }}
            >
                {/* {cityData.cityName} */}
            </text>
        </Marker>     
    )
  }
  
  export default City