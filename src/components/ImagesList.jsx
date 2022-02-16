import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Image from './Image';
import './image.css';
import './ImagesList.scss';
import { RadioButton, RadioGroup } from 'react-radio-group-context';

const mapStateToProps = state => {
	return {
		isPending:  state.requestImages.isPending,
    	error:      state.requestImages.error
	}
}

const ImagesList = ({images, onFilterChange, isPending, error}) => {
	const filter = (event) => {
		const radioGroup = document.getElementById("filterImages");
		let labels = radioGroup.getElementsByTagName("label");
		[].map.call(labels, (label) => {
			label.classList.remove("checkedLabel");
		});
		event.target.parentElement.classList.add("checkedLabel");
		onFilterChange(event)
	}

	const showImages = (isPending, error, images) => {
		if (!isPending && !error) {
			return images.map((image, i) => {
					return (
						<Image
							key={i}
							image={image} 
							onClick={showImageEdit(image)} />
						)
					}) 	
		} else {
			return [1,2,3,4,5,6,7].map((image, i) => {
					return (
						<Image
							key={i}
							isPending={isPending}
							error={error} />
						)
					}) 	
		}
	}

	return(
		<ul className="imageList">
			<div id="image-edit-component"></div>
			<div id='filterImages' className='radio'>
			{
				isPending && !error && <div className='notify wait'>Подождите...</div>
			}
			{
				error && <div className='notify error'>Нет соединения</div>
			}	
				<RadioGroup
		        	name="filter"
		        	onChange={filter}
		      	>
		      		<RadioButton id="all_images" value='' checked>Все работы</RadioButton> 
		        	<RadioButton id="top100" value='top100'>Топ-100</RadioButton> 
		        	<RadioButton id="finalist" value='finalist'>Финалисты</RadioButton> 
		      	</RadioGroup>
		    </div>
			<a href='/golden_turtle/upload'>
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
			{ 
				showImages(isPending, error, images)
				// images.map((image, i) => {
				// 	return (
				// 		<Image
				// 			key={i}
				// 			image={image} 
				// 			onClick={showImageEdit(image)} />
				// 		)
				// 	}) 	
			}
		</ul>
	);
}

const showImageEdit = image => e => {
	const ModalComponent = React.lazy(() => import('./ModalComponent'));
	ReactDOM.render(<React.Suspense fallback={<div style={{display: 'none'}}> </div>}>
						<ModalComponent image={image} />
					</React.Suspense>, document.getElementById("image-edit-component"))
}


export default connect(mapStateToProps)(ImagesList);