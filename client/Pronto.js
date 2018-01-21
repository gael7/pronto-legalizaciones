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
      info: "Título de propiedad del vehículo que desea importar a México."
    },{
      icon: "face",
      title: "Identificación",
      info: "Identificación oficial con foto como credencial de elector (INE) o pasaporte del propietario."
    },{
      icon: "photo",
      title: "VIN Number",
      info: "Foto del número de serie del vehículo que puede ser encontrado en la base del parabrisas."
    }];

    this.state = {
      icons
    };
  }

  render (){
    return(
      <div>
        <NavigationBar/>
        <header>
        <Jumbotron />
        </header>
        <body>
        <QuienesSomos />
        <div className="parallax-container" id="requisitos">
          <div className="section no-pad-bot">
            <div className="container yellow-text text-darken-1">
                <h3 className="center hide-on-med-and-down">Requisitos</h3>
                <h4 className="center hide-on-large-only">Requisitos</h4>
                <div className="row" id="iconSection">
                  {this.state.icons.map((icon, index) => (
                    <div key={index}>
                    <BioIcons icon={icon.icon} title={icon.title} info={icon.info}/>
                      <div className="card-panel hide-on-med-and-up red darken-4">
                        <span className="white-text"><i className='small material-icons'>{icon.icon}</i>&nbsp;{icon.title+ ": " +icon.info}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="parallax"><img src="/images/background-1.jpg" alt="" /></div>
          </div>
        <Contactanos />
        </body>
        <Footer />
      </div>
    )
  }
}

export default Pronto;
