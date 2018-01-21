import  React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(){
    super();
    const containerStyle = {
      position: "relative",
      width: "100%",
      height: "80%",
    };
    const center = {
      lat: 27.599656,
      lng: -99.497304
    };
    this.state= {
     containerStyle,
     center,
     showingInfoWindow: false,
      activeMarker: {},
      name: "Pronto Legalizaciones"
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e){
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

render() {
    return (
      <Map google={this.props.google} containerStyle={this.state.containerStyle} initialCenter={this.state.center} zoom={14}
        onClick={this.onMapClicked} streetViewControl={false} mapTypeControl={false} gestureHandling="cooperative">

        <Marker onClick={this.onMarkerClick} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h5>{this.state.name}</h5>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD3LR064cXagnOZBTyj4gptDnbpnEgxuXo")
})(MapContainer)
