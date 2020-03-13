import React from 'react';
import ImagesList from '../components/ImagesList';
import Upload from '../components/Upload';
import './App.scss';
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
	      <header className="header sans-serif">
	      	<ul className='menu'>
	      		<li className='fl w-20'>
			      	<img src='logo-medium.png' className='logo' />
			    </li>
			    <li className='fl w-30'>

			    </li>
			    <li className='fl w-15'>
			        <a href="/" className="link dim near-white">My page</a>
			    </li>
			    <li className='fl w-15'>    
			        <a href="/upload" className="link dim near-white">Upload</a>
	        	</li>
	        </ul>
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
