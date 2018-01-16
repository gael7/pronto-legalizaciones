import  React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(){
    super();
    const style = {
      width: "50%",
      height: "50%",
    };
    const center = {
      lat: 27.599656,
      lng: -99.497304
    };
    this.state= {
     style,
     center
    };
  }
render() {
    return (
      <Map google={this.props.google}  style={this.state.style} initialCenter={this.state.center} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD3LR064cXagnOZBTyj4gptDnbpnEgxuXo")
})(MapContainer)
