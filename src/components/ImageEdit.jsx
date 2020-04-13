import React from 'react';
import './ImageEdit.scss';

class ImageEdit extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const modal = document.getElementById("editing-image");
		modal.style.width = document.documentElement.clientWidth - 40 + "px";
		modal.style.height = document.documentElement.clientHeight/1.5 + "px";
	}

	render() {
		const { image } = this.props;
		return (<div id="editing-image">
					<img src={image.urls.small} />
				</div>)
	}
}

export default ImageEdit;