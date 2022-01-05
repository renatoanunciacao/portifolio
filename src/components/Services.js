import { Component } from "react";

export default class Services extends Component{
    render(){
        return(
            <section id="services">
            <div className="container">
                <header>
                    <h2 className="wow fadeInDown">Design is our fuel</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.1s">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </header>
                <div className="row">
                    <div className="col-md-4">
                        <div className="service-item text-right wow fadeInUp">
                            <div className="service-text">
                                <h3>Design</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    empor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className="service-icon">
                                <i className="fa fa-diamond"></i>
                            </div>
                        </div>
                        <div className="service-item text-right wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-text">
                                <h3>Coding</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    empor incididunt ut labore et dolore magna aliqua.
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
                                <h3>Photography</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    empor incididunt ut labore et dolore magna aliqua. 
                                </p>
                            </div>
                            <div className="service-icon">
                                <i className="fa fa-camera"></i>
                            </div>
                        </div>
                        <div className="service-item text-left wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-text">
                                <h3>Apps</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    empor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className="service-icon">
                                <i className="fa fa-cubes"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="video-wrapper clearfix">
            <div className="col-md-offset-1 col-md-10 video">
                <a href="https://www.youtube.com/watch?v=CnYtWWDor2s" id="popup-youtube" className="circled fa fa-play" ></a>
                <h3>Play video and be amazed</h3>
                <p>Than lovely frames</p>
            </div>
        </div>
    </section>
        )
    }
}