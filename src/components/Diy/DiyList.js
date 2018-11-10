import React, { Component } from 'react';

class DiyList extends Component{

    render(){

        return(
            <div>
                <h2>List</h2>
                {this.state.list}
            </div>
        );
    }
}

export default DiyList;