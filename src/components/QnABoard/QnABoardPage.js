import React, { Component } from 'react';

class QnAPageNumber extends Component{
    render(){
        return(
            <span>{this.props.page_number}&nbsp;</span>
        );
    }
}

export default QnAPageNumber;