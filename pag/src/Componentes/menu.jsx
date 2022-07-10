 
import React from 'react';
 
class Menu extends React.Component {
 
  render() {
 
  	return (
 
  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-warning">
 
		    <a className="navbar-brand" href="#">Retro Consultancy</a>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">
			        
			        <li className="nav-item">
			          	<a className="nav-link" href="#">Nosotros</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="#">Servicios</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="#">Contacto</a>
			        </li>
			    </ul>
			  
		    </div>
 
		</nav>
 
  	)
    
  }
 
}
 
export default Menu;