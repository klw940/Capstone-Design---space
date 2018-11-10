import React, { Component } from 'react';
import '../../style/DiyCategoryStyle.css';

class DiyCategory extends Component{
    state = {
        category: ''
    }
    categoryClick = (e) => {
        this.setState({
            category: e.target.value
        });
        this.props.onInput(this.state.category);
    }
    render(){
        return(
            <div className="category">
                <h2>Category</h2>
                <ul className="category-list">
                    <li value='1' onClick={this.categoryClick}>Motor</li>
                    <li value='2' onClick={this.categoryClick}>Wings</li>
                    <li value='3' onClick={this.categoryClick}>Frame</li>
                    <li value='4' onClick={this.categoryClick}>Control Board</li>
                    <li value='5' onClick={this.categoryClick}>ESC</li>
                    <li value='6' onClick={this.categoryClick}>Battery</li>
                    <li value='7' onClick={this.categoryClick}>Antenna</li>
                </ul>
            </div>

        );
    }
}

export default DiyCategory;