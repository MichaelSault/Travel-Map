import '../App.css';
import React from 'react';
import { Annotation } from 'react-simple-maps';

function CityLabel(cityData) {

    return (
        <Annotation
            subject={[-cityData.coordWest, cityData.coordNorth]}
            dx={cityData.lineLengthX}
            dy={cityData.lineLengthY}
            connectorProps={{
                stroke: "#a83248",
                strokeWidth: 2,
                strokeLinecap: "round"
            }}
            >
            <text x="-2" textAnchor={cityData.connect} alignmentBaseline="middle" fill="#a83248">
                {cityData.cityName}
            </text>
        </Annotation>    
    )
  }
  
  export default CityLabel;