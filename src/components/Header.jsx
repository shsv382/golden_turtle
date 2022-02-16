import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
	const logo = document.documentElement.clientWidth > 600 ? "logo-medium.png" : "logo-192.png";
	return (
		<header className="header sans-serif">
	      	
	      	<ul className='menu' id="menu-container">
	      		<li className='fl w-20'>
			      	<a href="http://wncontest.ru/">
			      		<img src={logo} className='logo' />
			    	</a>
			    </li>
		      	<Menu 	pageWrapId={ "page-wrap" }
		      			outerContainerId={ "menu-container" }
		      			right
		      	>
		      		<li className='menu-item'>
				        <a href="/" className="link dim near-white">My page</a>
				    </li>
				    <li className='menu-item'>    
				        <a href="/golden_turtle/upload" className="link dim near-white">Upload</a>
		        	</li>
		        	<li className='menu-item'>    
				        <a href="http://wncontest.ru/" className="link dim near-white">News</a>
		        	</li>
		      	</Menu>
	        </ul>
	    </header>
	)
}

export default Header;