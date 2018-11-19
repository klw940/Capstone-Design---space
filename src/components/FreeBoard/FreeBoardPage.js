import React, { Component } from 'react';

class FreePageNumber extends Component{
    render(){
        return(
            <span>{this.props.page_number}&nbsp;</span>
        );
    }
}

export default FreePageNumber;