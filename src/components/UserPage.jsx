import React from 'react';
import ImagesList from '../components/ImagesList';

class UserPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.requestImages();
	}

	render() {
		return (
			(this.props.isPending) ? <h1>Загрузка</h1>	:
			<ImagesList images={this.props.images}
						filterBy={this.props.onFilterChange} />
		)
	}
}

export default UserPage;