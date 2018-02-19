import React from 'react';


export class Footer extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "Pronto Legalizaciones",
      sum: "Presupuestos sin compromiso, llámenos o mándenos mensaje por Whatsapp/Facebook las 24 horas del día.",
      created: "Creado por Gael Arrambide",
      tel: " +1(956)-237-9791",
      email: "autosjr118@hotmail.com",
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
              <div className="col l6 s12 center">
                <p className="white-text"><i className='material-icons'>phone</i>&nbsp;{this.state.tel}</p>
                <p className="white-text"><i className='material-icons'>email</i>&nbsp;{this.state.email}</p>
                <a className="btn-floating waves-effect waves-light whatsapp-back" href="https://api.whatsapp.com/send?phone=19562379791&text=Visite%20la%20pagina%20de%20*Pronto%20Legalizaciones*%20y%20quiero%20información%20de" target="_blank"><i className="fa fa-whatsapp fa-5x"></i>&nbsp;&nbsp;Chat</a>
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
