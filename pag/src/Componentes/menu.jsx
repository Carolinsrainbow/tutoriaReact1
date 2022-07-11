 
import React from 'react';
 
class Menu extends React.Component {
 
  render() {
 
  	return (
 
  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-warning">
 
		    <a className="navbar-brand">Retro Consultancy</a>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav">
			        
			        <li className="nav-item">
			          	<a className="nav-link">Home</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link">Services</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link">Portafolio</a>
			        </li>
                    <li className="nav-item">
			          	<a className="nav-link">Pages</a>
			        </li>
                    <li className="nav-item">
			          	<a className="nav-link">Contact</a>
			        </li>
			    </ul>
			  
		    </div>
 
		</nav>
 
  	)
    
  }
 
}
 
export default Menu;