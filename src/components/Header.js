import { Component } from "react";

export default class Header extends Component{
    render(){
        return (
            <header>
		<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#"><img src="/assets/img/logo.png" alt="Seven HTML theme" /></a>
				</div>
				<div className="collapse navbar-collapse navbar-right" id="navbar-collapse">
					<ul className="nav navbar-nav">
						<li><a data-scroll href="index.html#home">Home</a></li>
						<li><a data-scroll href="index.html#services">Services</a></li>
						<li><a data-scroll href="index.html#portfolio">Portfolio</a></li>
						<li><a data-scroll href="index.html#about">About</a></li>
						<li><a data-scroll href="index.html#blog">News</a></li>
						<li><a data-scroll href="index.html#contact">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
        )
    }
}