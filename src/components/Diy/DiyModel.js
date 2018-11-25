import React, { Component } from 'react';
import custom_image from '../../image/drone.png';
import{
    Image,
} from 'semantic-ui-react';
class DiyModel extends Component{
    render(){
        return(
            <div>
                <Image src={custom_image} size='medium' rounded centered/>
            </div>
        );
    }
}

export default DiyModel;