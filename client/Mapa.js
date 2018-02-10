import React from 'react';
import MapContainer from './MapContainer';

class Mapa extends React.Component {
  constructor(){
    super();

    this.state = {
      title: "Ubicación",
    };
  }
  render (){
    return(
      <div className="body-background2" id="mapa">
        <div className="container">
        <div className="row center">
          <div className="col s12">
            <h1 className="border-webkit2">{this.state.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <MapContainer />
          </div>
        </div>
        </div>
      </div>


    )
  }
}

export default Mapa;
