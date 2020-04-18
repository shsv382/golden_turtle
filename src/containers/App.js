import React from 'react';
import UserPage from '../components/UserPage';
import Upload from '../components/Upload';
import Header from '../components/Header';
import './App.scss';
import './Animations.scss';
import './burger.scss';
import { Switch, Route } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

class App extends React.Component {
  constructor(props) {
  	super(props);
  }

  componentDidMount() {
	
  }

  render() {
  		return (
	    <div className="App">
	      <Header />
	      <div className="container">
	      	<Switch>
	            <Route exact path={process.env.PUBLIC_URL + '/'} render={ () => 
					<UserPage />	
					
	            } />
	            <Route path={process.env.PUBLIC_URL + '/upload'} component={Upload} />
	        </Switch>
	      	
	      </div>
	    </div>
	  );
	}
}

export default App;
