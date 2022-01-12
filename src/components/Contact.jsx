import React, { Component } from "react";
import axios from "axios";

export default class Contact extends Component{

    nome = React.createRef();
    email = React.createRef();
    assunto = React.createRef();
    mensagem = React.createRef();

    state = {
        nome: "",
        email: "",
        assunto: "",
        mensagem: ""
    };

    comprovarCambios = () => {
        var nome = this.nome.current.value;
        var email = this.email.current.value;
        var assunto = this.assunto.current.value;
        var mensagem = this.mensagem.current.value;
        this.setState({
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        });
    }

   constructor(){
       super();
	   this.sendMail = this.sendMail.bind(this);
   }

   async sendMail(e){
       e.preventDefault();
       const { nome, email, assunto, mensagem } = this.state;
       const form = await axios.post("https://sendmailercontact.herokuapp.com/api/form", {
        nome,   
        email,
        assunto,
        mensagem
       })

	   
   }

    render(){
        return(
            <section id="contact">
	<div className="container">
		<header>
			<h2 className="wow fadeInDown">Contato</h2>
			<p className="wow fadeInUp" data-wow-delay="0.1s">Envie sua proposta.
			</p>
		</header>
		<form className="row" onSubmit={this.sendMail}>
			<div className="form-group col-md-6">
				<input name="name" type="text" placeholder="Nome" className="form-control" onChange={this.comprovarCambios} ref={this.nome}/>
			</div>
			<div className="form-group col-md-6">
				<input name="mail" type="email"  onChange={this.comprovarCambios} placeholder="E-mail" className="form-control"  ref={this.email} />
			</div>
			<div className="form-group col-md-12">
				<input name="subject" type="subject" onChange={this.comprovarCambios} placeholder="Assunto" className="form-control" ref={this.assunto} />
			</div>
			<div className="form-group col-md-12">
				<textarea name="message" className="form-control" onChange={this.comprovarCambios} rows="10" placeholder="Mensagem" ref={this.mensagem}></textarea>
			</div>
			<div className="form-group col-md-12">
				<button className="btn btn-lg btn-primary">Enviar</button>
			</div>
		</form>
		<div className="address">
			<div className="row">
				<div className="col-md-4 text-center wow zoomIn">
					<i className="fa fa-phone circled"></i>
					<span>(54) 99144-8750</span>
				</div>
				<div className="col-md-4 text-center wow zoomIn" data-wow-delay="0.2s">
					<i className="fa fa-envelope circled"></i>
					<span>wagner.programmer@outlook.com</span>
				</div>
				<div className="col-md-4 text-center wow zoomIn" data-wow-delay="0.4s">
					<i className="fa fa-globe circled"></i>
					<span>4116 Oak Avenue</span>
					<span>Chickago, IL 60607</span>
				</div>
			</div>
		</div>
	</div>
</section>
        )
    }
}