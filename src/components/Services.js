import { Component } from "react";

export default class Services extends Component{
    render(){
        return(
            <section id="services">
            <div className="container">
                <header>
                    <h2 className="wow fadeInDown">design é o nosso combustível</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.1s">Criação e desenvolvimento de projetos gráficos ou de comunicação visual, ou de concepção de objetos ou peças dos mais diversos tipos, a serem produzidos em grande escala.
                    </p>
                </header>
                <div className="row">
                    <div className="col-md-4">
                        <div className="service-item text-right wow fadeInUp">
                            <div className="service-text">
                                <h3>Design</h3>
                                <p>Desenvolvendo interfaces para sites, games e dispositivos móveis, como celulares, smartphones e tablets.</p>
                            </div>
                            <div className="service-icon">
                                <i className="fa fa-diamond"></i>
                            </div>
                        </div>
                        <div className="service-item text-right wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-text">
                                <h3>Codificação</h3>
                                <p>Utilizamos as melhores práticas para codificar seu website
                                </p>
                            </div>
                            <div className="service-icon">
                                <i className="fa fa-code"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src="/assets/img/phone.png" alt="Phone" />
                    </div>
                    <div className="col-md-4">
                        <div className="service-item text-left wow fadeInUp">
                            <div className="service-text">
                                <h3>Segurança</h3>
                                <p>Essas estratégias evitam que pessoas mal-intencionadas acessem dispositivos físicos como computadores, redes como a internet e os sistemas computacionais de uma empresa.</p>
                            </div>
                            <div className="service-icon">
                                <i className="fa fa-lock"></i>
                            </div>
                        </div>
                        <div className="service-item text-left wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-text">
                                <h3>Apps</h3>
                                <p>Desenvolvimento de aplicações robustas de alta qualidade com segurança
                                </p>
                            </div>
                            <div className="service-icon">
                                <i className="fa fa-cubes"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </section>
        )
    }
}