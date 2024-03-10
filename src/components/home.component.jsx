import '../App.css';
import React from 'react';
import { Annotation, ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

function Home() {

  return (
    <>
        <ComposableMap>
          <Geographies geography="/features.json">
            {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
            }
          </Geographies>
          <Annotation
            subject={[2.3522, 48.8566]}
            dx={-40}
            dy={-5}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 2,
              strokeLinecap: "round"
            }}
          >
            <text x="-2" textAnchor="end" alignmentBaseline="middle" fill="#F53">
              {"Paris"}
            </text>
          </Annotation>
          <Annotation
            subject={[-79.383, 43.653]}
            dx={40}
            dy={8}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 2,
              strokeLinecap: "round"
            }}
          >
            <text x="-2" textAnchor="start" alignmentBaseline="middle" fill="#F53">
              {"Toronto"}
            </text>
          </Annotation>
          <Marker key={'Los Angeles'} coordinates={[-118.2426, 34.0549]}>
            <circle r={2} fill="#F00" stroke="#fff" strokeWidth={0.5} />
            <text
              textAnchor="middle"
              y={-20}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            ></text>
          </Marker>
        </ComposableMap>       
    </>
  )
}

export default Home