import React, { Component } from 'react';
import '../../style/DiyCategoryStyle.css';

class DiyCategory extends Component{
    static defaultProps = {
        data: '',
    }
    categoryClick1 = () => {
        this.props.onInput(1);
    }
    categoryClick2 = () => {
        this.props.onInput(2);
    }
    categoryClick3 = () => {
        this.props.onInput(3);
    }
    categoryClick4 = () => {
        this.props.onInput(4);
    }
    categoryClick5 = () => {
        this.props.onInput(5);
    }
    categoryClick6 = () => {
        this.props.onInput(6);
    }
    categoryClick7 = () => {
        this.props.onInput(7);
    }

    render(){
        return(
            <div className="category">
                <h2>Category</h2>
                <ul className="category-list">
                    <li onClick={this.categoryClick1}>Motor</li>
                    <li onClick={this.categoryClick2}>Wings</li>
                    <li onClick={this.categoryClick3}>Frame</li>
                    <li onClick={this.categoryClick4}>Control Board</li>
                    <li onClick={this.categoryClick5}>ESC</li>
                    <li onClick={this.categoryClick6}>Battery</li>
                    <li onClick={this.categoryClick7}>Antenna</li>
                </ul>
            </div>

        );
    }
}

export default DiyCategory;