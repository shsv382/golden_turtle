import React from 'react';
import './ImageEdit.scss';

const ImageEdit = ({image}) => {
	return (<div id="editing-image">
				<img src={image.urls.regular} />
			</div>)
}

export default ImageEdit;