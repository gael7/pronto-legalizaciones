import React from 'react';
import PropTypes from 'prop-types';


class Requisitos extends React.Component {
  constructor() {
    super();
    const icons = [{
      icon: "directions_car",
      image: "title.jpg",
      title: "Título",
      info: "Para la legalización de vehículos se requiere el título de propiedad de dicho vehículo que desea importar a México."
    },{
      icon: "face",
      image: "ine.png",
      title: "Identificación",
      info: "Identificación oficial con foto como credencial de elector (INE) o pasaporte del propietario del vehículo."
    },{
      icon: "photo",
      image: "vin-number.jpg",
      title: "VIN Number",
      info: "Fotografía del número de serie del vehículo que puede ser encontrado en la base del parabrisas."
    }];

    this.state = {
      title:'Requisitos',
      icons
    };
  }
  render() {
    return (
        <div className="body-background2" id="requisitos">
          <div className="container">
          <div className="row center">
            <h1 className="border-webkit2">{this.state.title}</h1>
          </div>
          <div className="row" >
            {this.state.icons.map((icon, index) => (
              <div key={index} className='col s12 l4'>
                <div className="card">
              <div className="card-image">
                <img src={"/images/"+icon.image}/>
                <span className="card-title">{icon.title}</span>
                  <a className="btn-floating halfway-fab icon-back"><i class="material-icons">{icon.icon}</i></a>
              </div>
              <div className="card-content card-back white-text">
                <p>{icon.info}</p>
              </div>
      </div>
          </div>
        ))}
        </div>
      </div>
        </div>
  )}
}

export default Requisitos;
