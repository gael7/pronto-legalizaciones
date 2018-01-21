import React from 'react';
import MapContainer from './MapContainer';

class Contactanos extends React.Component {
  constructor(){
    super();

    this.state = {
      title: "Contáctanos",
      intro: "Visítanos",
      time: " Lunes-Viernes: ",
      time2: "8:00 A.M. - 6:00 P.M.",
      time3: " Sábado: ",
      time4: "8:00 A.M. - 2:00 P.M",
      tel: " +1(956)-237-9791",
      email: " autosjr118@hotmail.com",
      address: " 9101A San Mateo Dr., Laredo, TX., 78045",
      fb:"/prontolegalizacionestx",
    };
  }
  render (){
    return(
      <div className="cont-background yellow darken-1" id="contactanos">


        <div className="row">
          <div className="col s12 center blue-text text-darken-4">
            <h3 className="hide-on-med-and-down">{this.state.title}</h3>
            <h4 className="hide-on-large-only">{this.state.title}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 xl6">
            <MapContainer />
          </div>
          <div className="col s12 m6 xl6 center white-text">
            <div className="card-panel red darken-4">
            <h5>{this.state.intro}</h5>
            <p><i className='material-icons'>location_on</i>{this.state.address}</p>
            <p><i className='material-icons'>schedule</i><span className="bolder">{this.state.time}</span>{this.state.time2}</p>
            <p><span className="bolder">{this.state.time3}</span>{this.state.time4}</p>
            <p><i className='material-icons'>phone</i>{this.state.tel}</p>
            <p><i className='material-icons'>email</i>{this.state.email}</p>
          <div className="row">
            <div className="col s1 m1 offset-s2 offset-m3">
              <img className="socialLogos" src="images/fb.png"/>
            </div>
            <div className="col s6 m4 offset-s1">
              <p>{this.state.fb}</p>
            </div>
          </div>
          <div className="row">
            <div className="col s1 m1 offset-s2 offset-m3">
              <img className="socialLogos" src="images/wa.png"/>
            </div>
            <div className="col s6 m4 offset-s1">
              <p>{this.state.tel}</p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>


    )
  }
}

export default Contactanos;
