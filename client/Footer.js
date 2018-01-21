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
        <footer className="page-footer blue darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="yellow-text text-darken-1">{this.state.title}</h5>
                <p className="yellow-text text-darken-1">{this.state.sum}</p>
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
