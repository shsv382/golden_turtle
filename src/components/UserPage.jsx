import React from 'react';
import ImagesList from './ImagesList';
import { connect } from 'react-redux';
import { filterImages, requestImages } from '../actions';

const mapStateToProps = state => {
	return {
		filterBy: 	state.filterImages.filterBy,
		images:     state.requestImages.images,
    	isPending:  state.requestImages.isPending,
    	error:      state.requestImages.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFilterChange: (event) => dispatch(filterImages(event.target.value)),
		onRequestImages: () => requestImages(dispatch)
	}
}

class UserPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.onRequestImages();
	}

	render() {
		const { onFilterChange, filterBy } = this.props;
		const filteredImages = this.props.images.filter(image => {
  			switch (filterBy) {
  				case 'top100':
  					return image.avgRating > 2.1;
  					break;
  				case 'finalist':
  					return image.avgRating > 2.35;
  					break;
  				default:
  					return image;
  			}
  		})
		return (
			<ImagesList images={filteredImages}
						onFilterChange={this.props.onFilterChange} />
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
