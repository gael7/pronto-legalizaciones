import React from 'react';

class QuienesSomos extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "Quiénes Somos",
      aboutMe: "Empresa con 13 años de experiencia en importación y legalización de automóviles y camionetas, tractocamiones, semirremolques y mercancía en general. Con la mejor atención al cliente brindando un servicio al confiable y rápido.",
      aboutMe2: "Presupuesto sin compromiso",
    };
  }
  render (){
    return(
      <div className="cont-background">
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center light-blue-text" id="aboutMe">
                <h4>{this.state.title}</h4>
                <div className="col s12 m6">
                  <p className="left-align">{this.state.aboutMe}</p>
                  <p className="left-align">{this.state.aboutMe2}</p>
                </div>
                <div className="col s12 m6">
                    <div className="carousel carousel-slider center" data-indicators="true">
                      <div className="carousel-item white-text" href="#one!">
                        <img src="/images/1.jpg" />
                      </div>
                      <div className="carousel-item white-text" href="#two!">
                        <img src="/images/2.jpg" />
                      </div>
                      <div className="carousel-item white-text" href="#three!">
                        <img src="/images/3.jpg" />
                      </div>
                      <div className="carousel-item white-text" href="#four!">
                        <img src="/images/4.jpg" />
                      </div>
                      <div className="carousel-item white-text" href="#five!">
                        <img src="/images/5.jpg" />
                      </div>
                      <div className="carousel-item white-text" href="#six!">
                        <img src="/images/6.jpg" />
                      </div>
                      <div className="carousel-item white-text" href="#seven!">
                        <img src="/images/7.jpg" />
                      </div>
                      <div className="carousel-item white-text" href="#eight!">
                        <img src="/images/8.jpg" />
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

export default QuienesSomos;
