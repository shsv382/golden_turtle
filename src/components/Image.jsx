import React from 'react';
// import ImageEdit from './ImageEdit';
import './image.css';

const Image = ({image, onClick}) => {
	return (
		<li className='image_preview tc grow br3 pa4 ma2 dib bw2 shadow-5'
			style={{
				backgroundImage: `url(${image.urls.small})`
			}}
			onClick={onClick}>
			<span className='avgRating'>
				{image.avgRating}/
				<span className='votesCount'>
					{image.votesCount}
				</span>
			</span>	
		</li>
	);
}

// const showImageEditComponent = e => {
// 	const ImageEdit = asyncComponent(import('./ImageEdit'));
// 	return <ImageEdit />
// }

export default Image;