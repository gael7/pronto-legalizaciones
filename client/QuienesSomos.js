import React from 'react';

class QuienesSomos extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Quiénes Somos",
      aboutMe: "Pronto fue creada en 2008 pero tiene detrás mas de 13 años de experiencia en importación y legalización definitiva de automóviles y camionetas, tractocamiones, semirremolques y mercancía en general desde Laredo, TX.",
      aboutMe2: "Con la mejor atención al cliente brindando un servicio confiable y rápido. Presupuesto y asesoría sin compromiso.",
      src: "/images/logo-square2.png"
    };
  }
  render() {
    return (
      <div className="body-background" id="quienes">
        <div className="container">
      <div className="col s12 center white-text">
        <h1 className="border-webkit">{this.state.title}</h1>
        <div className="row">
          <div className="col s12 l6">
            <h5 className="left-align">&nbsp; {this.state.aboutMe}</h5>
            <h5 className="left-align">&nbsp; {this.state.aboutMe2}</h5>
          </div>
          <div className="col s12 l6">
            <img src={this.state.src} className="pronto-logo"/>
          </div>
        </div>
      </div>
      </div>
    </div>)
  }
}

export default QuienesSomos;
