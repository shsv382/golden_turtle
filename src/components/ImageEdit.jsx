import React from 'react';
import './ImageEdit.scss';

class ImageEdit extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	
	}

	render() {
		const { image } = this.props;
		return (<React.Fragment>
					<img id="editing_image" src={image.urls.small} />
					<h5 id="title">Название</h5>
					<div className="modal_descriptions">
						<ul className="modal_descriptions_params">
							<li>f/8</li>
							<li>1/400 s</li>
							<li>ISO 400</li>
							<li>20 mm</li>
						</ul>
						<ul className="modal_descriptions_paragraphs">
							<li>
								<h5>Описание:</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur 
									adipiscing elit, sed do eiusmod tempor 
									incididunt ut labore et dolore magna 
									aliqua. Ut enim ad minim veniam, quis 
									nostrud exercitation ullamco laboris 
									nisi ut aliquip ex ea commodo consequat.
								</p>
							</li>
						</ul>
					</div>
				</React.Fragment>)
	}
}

export default ImageEdit;