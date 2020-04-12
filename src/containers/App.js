import React from 'react';
import ImagesList from '../components/ImagesList';
import Upload from '../components/Upload';
import Header from '../components/Header';
import './App.scss';
import './burger.scss';
import { Switch, Route } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
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

class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		images: []
  	}
  }

  componentDidMount() {
	this.props.onRequestImages();
  }

  render() {
  		const { onFilterChange, filterBy } = this.props;
  		const images = this.props.images.filter(image => {
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
	    <div className="App">
	      <Header />
	      <div className="container">
	      	<Switch>
	            <Route exact path={process.env.PUBLIC_URL + '/'} render={ () => 
					(this.props.isPending) ? 
						<h1>Загрузка</h1>
					:
						<ImagesList images={images}
								filterBy={onFilterChange} />	
					
	            } />
	            <Route path={process.env.PUBLIC_URL + '/upload'} component={Upload} />
	        </Switch>
	      	
	      </div>
	    </div>
	  );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
