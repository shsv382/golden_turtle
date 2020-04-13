import React from 'react';
import './ImageEdit.scss';

class ImageEdit extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const modal = document.getElementById("editing-image");
		modal.style.width = document.documentElement.clientWidth + "px";
		modal.style.left =  document.getElementsByClassName("container")[0]
							.getBoundingClientRect().left * (-1) + "px";
		modal.style.height = document.documentElement.clientHeight + "px";
	}

	render() {
		const { image } = this.props;
		return (<div id="editing-image">
					<img src={image.urls.small} />
				</div>)
	}
}

export default ImageEdit;