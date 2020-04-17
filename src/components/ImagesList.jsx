import React from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';
import './image.css';
import './ImagesList.scss';
import { RadioButton, RadioGroup } from 'react-radio-group-context';

const ImagesList = ({images, onFilterChange}) => {
	const filter = (event) => {
		const radioGroup = document.getElementById("filterImages");
		let labels = radioGroup.getElementsByTagName("label");
		[].map.call(labels, (label) => {
			label.classList.remove("checkedLabel");
		});
		event.target.parentElement.classList.add("checkedLabel");
		onFilterChange(event)
	}

	return(
		<ul className="imageList">
			<div id="image-edit-component"></div>
			<div id='filterImages' class='radio'>
				<RadioGroup
		        	name="filter"
		        	onChange={filter}
		      	>
		      		<RadioButton id="all_images" value='' checked>Все работы</RadioButton> 
		        	<RadioButton id="top100" value='top100'>Топ-100</RadioButton> 
		        	<RadioButton id="finalist" value='finalist'>Финалисты</RadioButton> 
		      	</RadioGroup>
		    </div>
			<a href='/upload'>
			<li className='image_preview tc grow br3 pa4 ma2 dib bw2 shadow-5'
				style={{
					cursor: 'pointer',
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
						image={image} 
						onClick={showImageEdit(image)} />
					)
				}) 
			}
		</ul>
	);
}

const showImageEdit = image => e => {
	const ModalComponent = React.lazy(() => import('./ModalComponent'));
	ReactDOM.render(<React.Suspense fallback={<div>Loading...</div>}>
						<ModalComponent image={image} />
					</React.Suspense>, document.getElementById("image-edit-component"))
}

export default ImagesList;