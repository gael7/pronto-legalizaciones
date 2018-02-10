import React from 'react';
import Home from './Home';
import NavigationBar from './NavigationBar';
import QuienesSomos from './QuienesSomos';
import Requisitos from './Requisitos';
import Contacto from './Contacto';
import Mapa from './Mapa';
import Footer from './Footer'

class Pronto extends React.Component {
  constructor(){
    super();
    const sections = [{
      ref: "home",
      icon: "home",
    },{
      ref: "quienes",
      icon: "people",
    },{
      ref: "requisitos",
      icon: "assignment",
    },{
      ref: "contacto",
      icon: "phone",
    },{
      ref: "mapa",
      icon: "map",
    }];
      this.state = {
        sections
      };
  }

  render (){
    return(
      <div id="pronto">
        <NavigationBar />
        <div class="fixed-action-btn">
          <a className="btn-floating btn-medium waves-effect waves-light btn-back" href="#pronto"><i className="material-icons">menu</i></a>
            <ul>
              {this.state.sections.map((section, index)=>(
                <li key={index} className="btn-floating btn-back"><a href={"#"+section.ref}><i className="material-icons">{section.icon}</i></a></li>
              ))}
            </ul>
        </div>
        <Home />
        <QuienesSomos />
        <Requisitos />
        <Contacto />
        <Mapa />
        <Footer />
      </div>
    )
  }
}

export default Pronto;
