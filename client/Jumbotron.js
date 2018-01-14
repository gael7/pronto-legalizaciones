import React from 'react';
import PropTypes from 'prop-types';

class Jumbotron extends React.Component {
  constructor(){
    super();
    const options =["Automóviles", "Camionetas", "Tractocamiones", "Semirremolques", "Maquinaria pesada", "Motocicletas", "Lanchas", "Motos acuáticas", "Mercancía en general"];
    this.state={
      title: "Pronto Legalizaciones",
      intro: "Importación y legalización de: ",
      options,
    }
  }
  render(){
    return(
      <div className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center white-text">{this.state.title}</h1>
            <div className="row">
              <h5 className="header col s12 white-text center">{this.state.intro}</h5>
              {this.state.options.map((option, index) => (
                <div key={index} className="col s4 m4 l6 xl4">
                      <div className="card-panel black center-align hoverable">
                        <span className="white-text center">{option}</span>
                      </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="parallax"><img src="/images/pronto.jpg" alt="" /></div>
      </div>
    );
  }
}
Jumbotron.PropTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default Jumbotron;
