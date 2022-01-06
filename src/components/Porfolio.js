import { Component } from "react";

export default class Portfolio extends Component{
    render(){
        return(
            <section id="portfolio">
	<header>
		<h2 className="wow fadeInDown">What we done so far</h2>
		<p className="wow fadeInUp" data-wow-delay="0.1s">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat.
		</p>
	</header>
	<div className="content" id="filter-controls">
		<nav className="centered-pills clearfix">
			<ul className="nav nav-pills" >
				<li><a dangerouslySetHref="javascript:void(0);" className="filter active" datafilter="all">All</a></li>
				<li><a dangerouslySetHref="javascript:void(0);" className="filter" datafilter=".mockups">Mockups</a></li>
				<li><a dangerouslySetHref="javascript:void(0);" className="filter" datafilter=".icons">Icons</a></li>
				<li><a dangerouslySetHref="javascript:void(0);" className="filter" datafilter=".ui-kits">UI Kits</a></li>
				<li><a dangerouslySetHref="javascript:void(0);" className="filter" datafilter=".templates">Templates</a></li>
			</ul>
		</nav>
		<div className="projects row">
			<figure className="mix all portfolio-item icons col-md-3 col-sm-6" >
				<img className="img-responsive" src="/assets/img/portfolio/adena.png" alt="Adena icons pack" />
				<figcaption className="mask">
					<h3>Adena icons pack</h3>
					<span>Icons</span>
				</figcaption>
			</figure>
			<figure className="mix portfolio-item ui-kits col-md-3  col-sm-6">
				<img className="img-responsive" src="/assets/img/portfolio/atom.png" alt="Atom UI Kit" />
				<figcaption className="mask">
					<h3>Atom UI Kit</h3>
					<span>UI Kits</span>
				</figcaption>
			</figure>
			<figure className="mix portfolio-item icons col-md-3  col-sm-6">
				<img className="img-responsive" src="/assets/img/portfolio/flat.png" alt="60 flat icons" />
				<figcaption className="mask">
					<h3>60 flat icons</h3>
					<span>Icons</span>
				</figcaption>
			</figure>
			<figure className="mix portfolio-item mockups col-md-3  col-sm-6">
				<img className="img-responsive" src="/assets/img/portfolio/ipad.jpg" alt="iPad mockup" />
				<figcaption className="mask">
					<h3>iPad Mockup</h3>
					<span>Mockups</span>
				</figcaption>
			</figure>
			<figure className="mix portfolio-item templates col-md-3  col-sm-6">
				<img className="img-responsive" src="/assets/img/portfolio/ket.jpg" alt="Ket singlpage PSD template" />
				<figcaption className="mask">
					<h3>Ket Web template</h3>
					<span>Tempaltes</span>
				</figcaption>
			</figure>
			<figure className="mix portfolio-item templates col-md-3  col-sm-6">
				<img className="img-responsive" src="/assets/img/portfolio/mentum.png" alt="Mentum web theme" />
				<figcaption className="mask">
					<h3>Mentum web theme</h3>
					<span>Templates</span>
				</figcaption>
			</figure>
			<figure className="mix portfolio-item web mockups col-md-3  col-sm-6">
				<img className="img-responsive" src="/assets/img/portfolio/modern-phone.jpg" alt="Smartphone mockup" />

				<figcaption className="mask">
					<h3>Smartphone mockup</h3>
					<span>Mockups</span>
				</figcaption>
			</figure>
			<figure className="mix portfolio-item print ui-kits col-md-3  col-sm-6">
				<img className="img-responsive" src="/assets/img/portfolio/sven.jpg" alt="Sven UI Kit" />
				<figcaption className="mask">
					<h3>Sven UI Kit</h3>
					<span>UI Kits</span>
				</figcaption>
			</figure>

		</div>
	</div>
</section>
        )
    }
}