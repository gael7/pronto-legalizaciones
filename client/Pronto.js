import React from 'react';
import Jumbotron from './Jumbotron';
import NavigationBar from './NavigationBar';
import QuienesSomos from './QuienesSomos';
import Contactanos from './Contactanos';
import BioIcons from './BioIcons';
import Footer from './Footer';

class Pronto extends React.Component {
  constructor(){
    super();
    const icons = [{
      icon: "directions_car",
      title: "Título",
      info: "Título de propiedad del vehiculo"
    },{
      icon: "face",
      title: "ID",
      info: "Identificación oficial con foto (IFE, Pasaporte)"
    },{
      icon: "photo",
      title: "VIN Number",
      info: "Foto del número de serie"
    }];

    this.state = {
      title: 'Pronto Legalizaciones',
      summary: '',
      icons
    };
  }

  render (){
    return(
      <div>
        <NavigationBar color={this.state.color}/>
        <header>
        <Jumbotron />
        </header>
        <body>
        <QuienesSomos />
        <div className="cont-background" id="requisitos">
          <div className="container">
            <div className="section">
              <h4 className="center">Requisitos</h4>
              <div className="row" id="iconSection">
                {this.state.icons.map((icon, index) => (
                  <BioIcons key={index} icon={icon.icon} title={icon.title} info={icon.info}/>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Contactanos />
        </body>
        <Footer />
      </div>
    )
  }
}

export default Pronto;
