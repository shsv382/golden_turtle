import React from 'react';
import ImagesList from '../components/ImagesList';
import Upload from '../components/Upload';
import './App.css';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		images: []
  	}
  }

  componentDidMount() {
  	fetch('https://api.unsplash.com/photos/random?client_id=99c7ec0457480b03326a57d7e361d98e8a4ffc578f171b1224618789e74e78aa&count=15')
	.then(response => response.json())
	.then((images) => {
		this.setState({images: images});
	})
  }

  render() {
	  	return (
	    <div className="App">
	      <header className="header">
	        <a href="/">My page</a>
	        <a href="/upload">Upload</a>
	      </header>
	      <div className="container">
	      	<Switch>
	            <Route exact path='/' render={ () => 
					<ImagesList images={this.state.images} />
	            } />
	            <Route path='/upload' component={Upload} />
	        </Switch>
	      	
	      </div>
	    </div>
	  );
	}
}

export default App;
