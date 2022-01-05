import { Component } from "react";

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <p className="copyright">&copy; 2022 All rights reserved </p>
                    <ul className="social">
                        <li className="wow bounceIn"><a href="http://goo.gl/RqhEjP" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li className="wow bounceIn" data-wow-delay="0.1s"><a href="http://goo.gl/hUfpSB" target="_blank"><i className="fa fa-twitter"></i></a></li>
                        <li className="wow bounceIn" data-wow-delay="0.2s"><a href="http://goo.gl/k9zAy5" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                        <li className="wow bounceIn" data-wow-delay="0.3s"><a href="http://goo.gl/FPjuCE" target="_blank"><i className="fa fa-behance"></i></a></li>
                        <li className="wow bounceIn" data-wow-delay="0.4s"><a href="http://goo.gl/UYjGTR" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                        <li className="wow bounceIn" data-wow-delay="0.5s"><a href="http://goo.gl/r4xzR4" target="_blank"><i className="fa fa-google"></i></a></li>
                    </ul>
                    <a href="index.html#home" data-scroll className="back-to-top"><i className="fa fa-chevron-up"></i></a>
                </div>
           </footer>
        )
    }
}