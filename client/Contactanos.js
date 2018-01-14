import React from 'react';

class Contactanos extends React.Component {
  constructor(){
    super();

    this.state = {
      title: "Contáctanos",
      intro: "Visítanos",
      time: " Lunes-Viernes: ",
      time2: "8 am - 6 pm",
      time3: " Sábado: ",
      time4: "8 am - 2 pm",
      tel: " +1(956)-237-9791",
      email: " autosjr118@hotmail.com",
      address: " 9101A San Mateo Dr., Laredo, TX",
      fb:"/prontolegalizacionestx",
      whatsapp: "+1(956)-237-9791",
    };
  }
  render (){
    return(
      <div className="cont-background">
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center light-blue-text">
                <h4>{this.state.title}</h4>
                <div className="row">
                  <div className="col s12 m6">
                  </div>
                  <div className="col s12 m6">
                    <h5>{this.state.intro}</h5>
                    <p><i className='material-icons'>location_on</i>{this.state.address}</p>
                    <p className="bolder"><i className='material-icons'>schedule</i>{this.state.time}</p><p>{this.state.time2}</p>
                    <p className="bolder">{this.state.time3}</p><p>{this.state.time4}</p>
                    <p><i className='material-icons'>phone</i>{this.state.tel}</p>
                    <p><i className='material-icons'>email</i>{this.state.email}</p>
                      <div className="col s2"><img className="socialLogos" src="images/fb.png"/></div>
                      <div className="col s8"><p>{this.state.fb}</p></div>
                    <div className="row">
                      <div className="col s2"><img className="socialLogos" src="images/wa.png"/></div>
                      <div className="col s8"><p>{this.state.whatsapp}</p></div>
                    </div>
                  </div>
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
