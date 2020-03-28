import React from 'react';
import ImagesList from '../components/ImagesList';
import Upload from '../components/Upload';
import './App.scss';
import './burger.scss';
import { Switch, Route } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

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
		images.map((image, i) => {
			image.avgRating = (Math.round(Math.random()*100)/100 + 1.5).toString().slice(0,4);
			image.votesCount = (Math.floor(Math.random() * 30) + 10).toString().slice(0,4);
		})
		this.setState({images: images});
	})
	.catch(error => {
		if (error.message.toLowerCase().includes("failed to fetch")) {
			console.log("Нет соединения с сервером")
		}
	})
  }

  render() {
	  	return (
	    <div className="App">
	      <header className="header sans-serif">
	      	
	      	<ul className='menu' id="menu-container">
	      		<li className='fl w-20'>
			      	<img src='logo-medium.png' className='logo' />
			    </li>
		      	<Menu 	pageWrapId={ "page-wrap" }
		      			outerContainerId={ "menu-container" }
		      			right
		      	>
		      		<li className='fl w-15 menu-item'>
				        <a href="/" className="link dim near-white">My page</a>
				    </li>
				    <li className='fl w-15 menu-item'>    
				        <a href="/upload" className="link dim near-white">Upload</a>
		        	</li>
		      	</Menu>
	      		{/*
			    <li className='fl w-30'>

			    </li>
			    <li className='fl w-15'>
			        <a href="/" className="link dim near-white">My page</a>
			    </li>
			    <li className='fl w-15'>    
			        <a href="/upload" className="link dim near-white">Upload</a>
	        	</li>*/}
	        </ul>
	      </header>
	      <div className="container">
	      	<Switch>
	            <Route exact path={process.env.PUBLIC_URL + '/'} render={ () => 
					<ImagesList images={this.state.images} />
	            } />
	            <Route path={process.env.PUBLIC_URL + '/upload'} component={Upload} />
	        </Switch>
	      	
	      </div>
	    </div>
	  );
	}
}

export default App;
