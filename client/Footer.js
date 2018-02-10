import React from 'react';


export class Footer extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "Pronto Legalizaciones",
      sum: "Presupuestos sin compromiso, llámenos o mándenos mensaje por Whatsapp/Facebook las 24 horas del día.",
      created: "Creado por Gael Arrambide"
      }
  }
  render() {
    return (
        <footer className="page-footer nav-color">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">{this.state.title}</h5>
                <p className="white-text">{this.state.sum}</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            {this.state.created}
            <a className="grey-text text-lighten-4 right" href="http://www.gaelarrambide.com"><i className="material-icons">language</i></a>
            </div>
          </div>
        </footer>
      );
    }
}

export default Footer;
