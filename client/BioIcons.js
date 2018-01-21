import React from 'react';
import PropTypes from 'prop-types';

class BioIcons extends React.Component {
  constructor(){
    super();

  }
  render (){
    return(
          <div className='col s12 m4 hide-on-small-only'>
            <div className='icon-block'>
              <h2 className='center red-text text-darken-4'>
                <i className='medium material-icons'>{this.props.icon}</i>
              </h2>
              <h5 className='center red-text text-darken-4 bolder'>{this.props.title}</h5>
              <p className='center red-text text-darken-4 bolder'>{this.props.info}</p>
            </div>
          </div>
    )
  }
}

BioIcons.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
};

export default BioIcons;
