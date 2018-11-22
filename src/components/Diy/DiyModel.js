import React, { Component } from 'react';
import custom_image from '../../image/custom.png';

class DiyModel extends Component{
    render(){
        return(
            <div>
                <img src={custom_image} alt="home_image" width="30%"/>
            </div>
        );
    }
}

export default DiyModel;