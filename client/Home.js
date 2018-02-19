import React from 'react';
import ServiceCard from './ServiceCard';

class Home extends React.Component {
  constructor(){
    super();
    const options =[
    { name: "Autos / Camionetas",
      src: "autos.jpg"
    }, {
      name: "Tractocamiones",
      src: "tractocamiones.jpg"
    }, {
      name: "Semirremolques",
      src: "semi.jpg"
    }, {
      name: "Maquinaria pesada",
      src: "maquinaria.jpg"
    },{
      name: "Motocicletas",
      src: "motos.jpg"
    }, {
      name: "Lanchas",
      src: "lancha.jpg"
    }, {
      name: "Motos acuáticas",
      src: "acuatica.jpg"
    }, {
      name: "Mercancía en general",
      src: "mercancia.jpg"
    }];
    this.state={
      intro: "Servicios de importación y legalización definitiva a México desde Laredo, Texas de:",
      options,
    }
  }
  render(){
    return(
      <div className="body-background2" id="home">
        <div className="container">
              <h4 className="header col s12 black-text center">{this.state.intro}</h4>
              <div className="row hide-on-med-and-down">
              {this.state.options.map((option, index) => (
                index<4 &&
                <ServiceCard key={index} src={option.src} name={option.name} />
              ))}
              </div>
              <div className="row hide-on-med-and-down">
              {this.state.options.map((option, index) => (
                index>=4 &&
                <ServiceCard key={index} src={option.src} name={option.name} />
              ))}
              </div>
              <div className="row hide-on-large-only">
              {this.state.options.map((option, index) => (
                index<2 &&
                <ServiceCard key={index} src={option.src} name={option.name} />
              ))}
              </div>
              <div className="row hide-on-large-only">
              {this.state.options.map((option, index) => (
                (index>=2 && index<4) &&
                <ServiceCard key={index} src={option.src} name={option.name} />
              ))}
              </div>
              <div className="row hide-on-large-only">
              {this.state.options.map((option, index) => (
                (index>=4 && index<6) &&
                <ServiceCard key={index} src={option.src} name={option.name} />
              ))}
              </div>
              <div className="row hide-on-large-only">
              {this.state.options.map((option, index) => (
                (index>=6 && index<8) &&
                <ServiceCard key={index} src={option.src} name={option.name} />
              ))}
              </div>
        </div>
    </div>
    );
  }
}

export default Home;
