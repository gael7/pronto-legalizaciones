import React from 'react';
import PropTypes from 'prop-types';

class Jumbotron extends React.Component {
  constructor(){
    super();
    const options =["Automóviles", "Camionetas", "Tractocamiones", "Semirremolques", "Maquinaria pesada", "Motocicletas", "Lanchas", "Motos acuáticas", "Mercancía en general"];
    this.state={
      title: "Pronto Legalizaciones",
      intro: "Importación y legalización a México de: ",
      options,
    }
  }
  render(){
    return(
      <div className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center yellow-text text-darken-2 hide-on-med-and-down">{this.state.title}</h1>
            <h2 className="header center yellow-text text-darken-2 hide-on-large-only">{this.state.title}</h2>
            <div className="row">
              <h5 className="header col s12 white-text center">{this.state.intro}</h5>
              {this.state.options.map((option, index) => (
                <div key={index} className="col s6 m4 l3 xl3">
                    <div className="card-panel red darken-4 center-align hoverable hide-on-small-only">
                      <span className="white-text center">{option}</span>
                    </div>
                    <h5 className="hide-on-med-and-up white-text">{option}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="parallax"><img src="/images/background-1.jpg" alt="" /></div>
      </div>
    );
  }
}
Jumbotron.PropTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default Jumbotron;
