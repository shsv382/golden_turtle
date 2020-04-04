import { FILTER_IMAGES } from './constants';

const initialState = {
	filterBy: ''
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