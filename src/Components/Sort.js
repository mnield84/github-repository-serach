import React, { Component } from 'react';

class Sort extends Component {
    state = {  }

    render() { 
        return ( 
            <div className="sort-container">
                <h4>Sort by:</h4>
                <div className="buttons">
                    <div className="forks">                    
                        <i className="material-icons">call_split</i>
                        <button onClick={this.props.forksPositive}><i className="material-icons">arrow_upward</i></button>
                        <button onClick={this.props.forksNegative}><i className="material-icons">arrow_downward</i></button>
                    </div>                
                    <div className="stars">                    
                        <i className="material-icons">grade</i>
                        <button onClick={this.props.starsPositive}><i className="material-icons">arrow_upward</i></button>
                        <button onClick={this.props.starsNegative}><i className="material-icons">arrow_downward</i></button>
                    </div>
                </div>
            </div>

         );
    }
}
 
export default Sort;