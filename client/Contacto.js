import React from 'react';

class Contacto extends React.Component {
  constructor(){
    super();

    this.state = {
      title: "Contacto",
      time: " Lunes-Viernes: ",
      time2: "8:00 A.M. - 6:00 P.M.",
      time3: "Sábado: ",
      time4: "8:00 A.M. - 2:00 P.M.",
      tel: " +1(956)-237-9791",
      email: "autosjr118@hotmail.com",
      address: "9101 Suite A San Mateo Dr., Laredo, TX. 78045",
      whats: "WhatsApp disponible 24/7",
      style: {
        border:"none",
        overflow: "hidden"
      }
    };
  }
  render (){
    return(
      <div className="body-background" id="contacto">
        <div className="container">
        <div className="row center">
          <div className="col s12">
            <h1 className="border-webkit">{this.state.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l6 left white-text">
            <h5><i className='material-icons'>location_on</i> &nbsp;{this.state.address}</h5>
            <h5><i className='material-icons'>schedule</i><span className="bolder">{this.state.time}</span>{this.state.time2}</h5>
            <h5><span className="bolder">{this.state.time3}</span>{this.state.time4}</h5>
            <h5><i className='material-icons'>phone</i> &nbsp;{this.state.tel}</h5>
            <h5><i className='material-icons'>email</i> &nbsp;{this.state.email}</h5>
          </div>
          <div className="col s12 l6 center white-text">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprontolegalizacionestx%2F&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="214" style={this.state.style} scrolling="no" frameborder="0" allowTransparency="true"></iframe>
            <h5 className="bolder"><a className="btn-floating btn-large waves-effect waves-light whatsapp-back" href="https://api.whatsapp.com/send?phone=19562379791&text=Visite%20la%20pagina%20de%20*Pronto%20Legalizaciones*%20y%20quiero%20información%20de" target="_blank"><i className="fa fa-whatsapp fa-5x"></i></a>&nbsp;{this.state.whats}</h5>
          </div>
        </div>
        </div>
      </div>


    )
  }
}

export default Contacto;
