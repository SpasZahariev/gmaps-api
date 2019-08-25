import React from "react";
import "./App.css";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
const myMapStyles = require("./mapStyles.json");

//to get the script working we need to wrap this in other funs
function Map() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 42.6977, lng: 23.3219 }}
      defaultOptions={{ styles: myMapStyles }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

class App extends React.Component {
  render() {
    return (
      <div id="map">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAP_API}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    );
  }
}

export default App;
