import { FILTER_IMAGES,
		 REQUEST_IMAGES_PENDING,
		 REQUEST_IMAGES_SUCCESS,
		 REQUEST_IMAGES_FAILED } from './constants';

export const filterImages = (value) => ({
	type: FILTER_IMAGES,
	payload: value
})

export const requestImages = async (dispatch) => {
	dispatch( {type: REQUEST_IMAGES_PENDING} );
	try {
		const response = await fetch('https://api.unsplash.com/photos/random?client_id=99c7ec0457480b03326a57d7e361d98e8a4ffc578f171b1224618789e74e78aa&count=15')
		const images = await response.json();
		images.map((image, i) => {
			image.avgRating = (Math.round(Math.random()*100)/100 + 1.5).toString().slice(0,4);
			image.votesCount = (Math.floor(Math.random() * 30) + 10).toString().slice(0,4);
		});
		dispatch( {type: REQUEST_IMAGES_SUCCESS, payload: images} );
	} catch(error) {
		dispatch( {type: REQUEST_IMAGES_FAILED, payload: error} );
	}
}