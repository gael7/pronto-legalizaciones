import React from 'react';

class NavigationBar extends React.Component {
    constructor(){
        super();
      const sections = [{
        ref: "home",
        icon: "home",
        text: "Home"
      },{
        ref: "quienes",
        icon: "people",
        text: "Quiénes Somos"
      },{
        ref: "requisitos",
        icon: "assignment",
        text: "Requisitos"
      },{
        ref: "contacto",
        icon: "phone",
        text: "Contacto"
      },{
        ref: "mapa",
        icon: "map",
        text: "Ubicación"
      }];
        this.state = {
          sections
        };
    }

    render() {
        return (

          <div>
            <div className="above-bar">
            </div>
            <nav>
              <div className="nav-wrapper nav-color">
                <ul id="nav-mobile" className="center hide-on-med-and-down">
                {this.state.sections.map((section, index)=>(
                  <li key={index} className="nav-menu "><a href={"#"+section.ref}><i className="material-icons left">{section.icon}</i>{section.text}</a></li>
                ))}
                </ul>
              </div>
            </nav>
        </div>
        );
    }
}

export default NavigationBar;
