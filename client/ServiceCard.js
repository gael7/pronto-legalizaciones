import React from 'react';
import PropTypes from 'prop-types';

class ServiceCard extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(  <div className="col s6 m6 l3 xl3">
                  <div className="card">
                    <div className="card-image">
                      <img src={"/images/"+this.props.src} alt={this.props.name}/>
                    </div>
                      <div className="card-content card-back white-text">
                        {this.props.name}
                      </div>
                  </div>
              </div>
    );
  }
}

ServiceCard.PropTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default ServiceCard;
