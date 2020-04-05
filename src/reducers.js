import { FILTER_IMAGES,
		 REQUEST_IMAGES_PENDING,
		 REQUEST_IMAGES_SUCCESS,
		 REQUEST_IMAGES_FAILED } from './constants';

const initialState = {
	filterBy: ''
}

const initialStateImages = {
	isPending: false,
	images: [],
	error: ''
}

export const filterImages = (state=initialState, action={}) => {
	switch (action.type) {
		case FILTER_IMAGES:
			return {...state, filterBy: action.payload};
			break;
		default:
			return state;
			break;
	}
}

export const requestImages = (state=initialStateImages, action={}) => {
	switch (action.type) {
		case REQUEST_IMAGES_PENDING:
			return {...state, isPending: true};
			break;
		case REQUEST_IMAGES_SUCCESS:
			return {...state, images: action.payload, isPending: false};
			break;
		case REQUEST_IMAGES_FAILED:
			return {...state, error: action.payload, isPending: false};
			break;
		default:
			return state;
			break;
	}
}