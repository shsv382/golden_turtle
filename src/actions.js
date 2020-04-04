import { FILTER_IMAGES } from './constants';

export const filterImages = (value) => ({
	type: FILTER_IMAGES,
	payload: value
})