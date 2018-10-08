import React from 'react';

const Repo = props => (
  <li> 
    <div className="left">
      <img src={props.img} />
    </div>
    <div className="right">    
      <a href={props.url} target="_BLANK">{props.name}</a>
      <span>
        <i className="material-icons">call_split</i>
        {props.forks}
      </span>
      <span>
        <i className="material-icons">grade</i>
        {props.stars}
      </span>
    </div>
  </li>
);

export default Repo;