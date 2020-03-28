import React from 'react';
import Image from './Image';
import './image.css';
import './ImagesList.scss';

const ImagesList = ({images}) => {
	return(
		<ul className="imageList">
			<a href='/upload'>
			<li className='image_preview tc grow br3 pa4 ma2 dib bw2 shadow-5'
				style={{
					background: `linear-gradient(to bottom right, #fafafa, #aaaaaa)`
				}}>
				<div style={{
					backgroundImage: `url(${require('../upload.png')})`,
					backgroundSize: 'cover',
					backgroundPosition: "center center",
					width: '100%',
					height: '100%'
				}}></div>
			</li> 
			</a>
			{ images.map((image, i) => {
				return (
					<Image
						key={i}
						image={image} />
					)
				}) 
			}
		</ul>
	);
}

export default ImagesList;