import React from 'react';
import './image.css';

const Image = ({image}) => {
	return (
		<li className='image_preview tc grow br3 pa4 ma2 dib bw2 shadow-5'
			style={{
				backgroundImage: `url(${image.urls.small})`
			}}>

			<span className='avgRating'>
				{image.avgRating}/
				<span className='votesCount'>
					{image.votesCount}
				</span>
			</span>	
		</li>
	);
}

export default Image;