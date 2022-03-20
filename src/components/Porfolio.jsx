import { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "./../../node_modules/react-image-gallery/styles/css/image-gallery.css";



export default class Portfolio extends Component {
	render() {


		const images = [
			{
				original: 'https://super.abril.com.br/wp-content/uploads/2019/09/fotosvencedora.png?quality=90&strip=info&resize=680,453',
				thumbnail: 'https://super.abril.com.br/wp-content/uploads/2019/09/fotosvencedora.png?quality=90&strip=info&resize=680,453',
			},
		    {
				original: 'https://img.elo7.com.br/product/main/338BB23/painel-de-festa-paisagem-natureza-3x2-festa-infantil.jpg?quality=90&strip=info&resize=680,453',
				thumbnail: 'https://img.elo7.com.br/product/main/338BB23/painel-de-festa-paisagem-natureza-3x2-festa-infantil.jpg?quality=90&strip=info&resize=680,453'
			},
			{
				original: 'https://www.hypeness.com.br/1/2019/10/cenas-surreais-animais-e-natureza-1.jpg?quality=90&strip=info&resize=680,453',
				thumbnail: 'https://www.hypeness.com.br/1/2019/10/cenas-surreais-animais-e-natureza-1.jpg?quality=90&strip=info&resize=680,453'
			},
			{
				original: 'https://www.hypeness.com.br/1/2019/10/cenas-surreais-animais-e-natureza-2.jpg?quality=90&strip=info&resize=680,453',
				thumbnail: 'https://www.hypeness.com.br/1/2019/10/cenas-surreais-animais-e-natureza-2.jpg?quality=90&strip=info&resize=680,453'
			}
		]

		return (
			<>
				<section>
					<div className="container">
						<header>
							<h2 className="wow fadeInDown">galeria de imagens</h2>
						</header>
						<ImageGallery items={images} />
					</div>
				</section>
			</>
		);
	}
}