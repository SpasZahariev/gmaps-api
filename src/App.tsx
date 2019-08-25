import React from "react";
import "./App.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import mapStyles from "./mapStyles";

//to get the script working we need to wrap this in other funs
function Map() {
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey={`${process.env.REACT_APP_MAP_API}`}
    >
      <GoogleMap
        id="example-map"
        zoom={14}
        center={{
          lat: 42.6977,
          lng: 23.3219
        }}
      ></GoogleMap>
    </LoadScript>
  );
}

class App extends React.Component {
  render() {
    return <div id="map">{Map()}</div>;
  }
}

export default App;
