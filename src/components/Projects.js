import React from "react";


function Projects(props) {
	return (
	  <div className="card">
		<div className="img-container">
		  <img alt={props.title} src={props.image} />
		</div>
		<div className="content">
		  <ul>
			<li>
			  <strong>Name:</strong> {props.title}
			</li>
			<li>
			  <strong>Description:</strong> {props.des}
			</li>
			<li>
			  <strong>GitHub:</strong> {props.gitHub}
			</li>
			<li>
			  <strong>Deployed site:</strong> {props.url}
			</li>
		  </ul>
		</div>
		
	  </div>
	);
  }
  
  export default Projects;
  