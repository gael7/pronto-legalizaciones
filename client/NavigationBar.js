import React from 'react';
import PropTypes from 'prop-types';

class NavigationBar extends React.Component {
    constructor(){
        super();
        this.state = {
        }
    }

    render() {
        return (
        <div>
          <div className='navbar-fixed'>
            <nav>
              <div className="nav-wrapper blue darken-4">
                  <a href="#!" className="brand-logo left yellow-text text-darken-1 bolder">&nbsp;Pronto</a>
                  <a href="#" data-activates="mobile-demo" className="right button-collapse yellow-text text-darken-1"><i className="material-icons">menu</i></a>
                  <ul className="right hide-on-med-and-down">
                    <li><a className="yellow-text text-darken-1 bolder" href="#quien">Quiénes Somos</a></li>
                    <li><a className="yellow-text text-darken-1 bolder" href="#requisitos">Requisitos</a></li>
                    <li><a className="yellow-text text-darken-1 bolder" href="#contactanos">Contáctanos</a></li>
                  </ul>
              </div>
            </nav>
          </div>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="#quien">Quiénes Somos</a></li>
            <li><a href="#requisitos">Requisitos</a></li>
            <li><a href="#contactanos">Contáctanos</a></li>
          </ul>
        </div>
        );
    }
}
NavigationBar.PropTypes = {
  color: PropTypes.string.isRequired
}
export default NavigationBar;
