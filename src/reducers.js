import { FILTER_IMAGES,
		 REQUEST_IMAGES_PENDING,
		 REQUEST_IMAGES_SUCCESS,
		 REQUEST_IMAGES_FAILED,
		 CHANGE_EXIF_DATA,
		 CHANGE_EXIF_INPUT } from './constants';

const initialState = {
	filterBy: ''
}

const initialStateImages = {
	isPending: false,
	images: [],
	error: ''
}

const initialExifData = {
	exifData: {}
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

export const changeExifData = (state=initialExifData, action={}) => {
	switch (action.type) {
		case CHANGE_EXIF_DATA:
			return {...state, exifData: action.payload}
			break;
		case CHANGE_EXIF_INPUT:
			return {...state, exifData: {...state.exifData, [action.payload.name]: action.payload.value}}
		default:
			return state;
			break;
	}
}