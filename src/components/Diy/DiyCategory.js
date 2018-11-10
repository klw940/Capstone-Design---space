import React, { Component } from 'react';
import '../style/DiyCategoryStyle.css';

class DiyCategory extends Component{
    render(){
        return(
            <div>
                <h2>Category</h2>
                <ul className="category">
                    <li>Motor</li>
                    <li>Wings</li>
                    <li>Frame</li>
                    <li>Control Board</li>
                    <li>ESC</li>
                    <li>Battery</li>
                    <li>Antenna</li>
                </ul>
            </div>

        );
    }
}

export default DiyCategory;