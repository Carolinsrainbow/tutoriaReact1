import React from 'react';

class SlideBar extends React.Component {
 
  render() {
 
  	return (
 
  		<div id="slider" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators">
		        <li data-slide-to="0" className="active"></li>
		        <li  data-slide-to="1"></li>
		        <li  data-slide-to="2"></li>
				<li  data-slide-to="3"></li>
		    </ol>
		    <div className="carousel-inner">
		        <div className="carousel-item active">	 
				 <img className="img-fluid" src="https://camo.githubusercontent.com/90f24316b24433bf0a2778d95ca93ad264093645a71d2eb9f569cdbc34fbfc6d/68747470733a2f2f6372797374616c2d63646e322e6372797374616c636f6d6d657263652e636f6d2f70686f746f732f363333303536352f73706c61736842616e6e65725f706f6b656d6f6e2e6a7067" />
		        </div>
				<div className="carousel-item active">	 
				 <img className="img-fluid" src="https://camo.githubusercontent.com/90f24316b24433bf0a2778d95ca93ad264093645a71d2eb9f569cdbc34fbfc6d/68747470733a2f2f6372797374616c2d63646e322e6372797374616c636f6d6d657263652e636f6d2f70686f746f732f363333303536352f73706c61736842616e6e65725f706f6b656d6f6e2e6a7067" />
		        </div>
				<div className="carousel-item active">	 
				 <img className="img-fluid" src="https://camo.githubusercontent.com/90f24316b24433bf0a2778d95ca93ad264093645a71d2eb9f569cdbc34fbfc6d/68747470733a2f2f6372797374616c2d63646e322e6372797374616c636f6d6d657263652e636f6d2f70686f746f732f363333303536352f73706c61736842616e6e65725f706f6b656d6f6e2e6a7067" />
		        </div>
				<div className="carousel-item active">	 
				 <img className="img-fluid" src="https://camo.githubusercontent.com/90f24316b24433bf0a2778d95ca93ad264093645a71d2eb9f569cdbc34fbfc6d/68747470733a2f2f6372797374616c2d63646e322e6372797374616c636f6d6d657263652e636f6d2f70686f746f732f363333303536352f73706c61736842616e6e65725f706f6b656d6f6e2e6a7067" />
		        </div>

		    </div>
		</div>

  	)
    
  }
 
}
 
export default SlideBar