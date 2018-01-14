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
          <div className='navbar-fixed'>
            <nav>
              <div className="nav-wrapper yellow">
                  <a href="#" className="brand-logo center light-blue-text">Pronto</a>
                  <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="">Quiénes Somos</a></li>
                    <li><a href="">Contáctanos</a></li>
                  </ul>
                </div>
            </nav>
          </div>
        );
    }
}
NavigationBar.PropTypes = {
  color: PropTypes.string.isRequired
}
export default NavigationBar;
