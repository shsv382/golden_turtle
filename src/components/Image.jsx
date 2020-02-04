import React from 'react';
import './image.css';

const Image = ({image}) => {
	return (
		<li className='image_preview tc grow br3 pa4 ma2 dib bw2 shadow-5'
			style={{
				backgroundImage: `url(${image})`
			}}>

			<span className='avgRating'>
				{`${Math.round(Math.random()*100)/100 + 1.5}`.slice(0,4)}/
				<span className='votesCount'>
					{`${Math.floor(Math.random() * 30) + 10}`.slice(0,4)}
				</span>
			</span>	
		</li>
	);
}

export default Image;