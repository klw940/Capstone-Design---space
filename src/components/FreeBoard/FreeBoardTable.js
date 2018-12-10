import React, { Component } from 'react';
import axios from "axios";
import { ServerAddr } from "../Constants";

class FreeTableRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            showBoard:false,
            comment:null
        };
        this.handleShow = this.handleShow.bind(this);
    }
    handleShow(){
        if(this.state.showBoard){
            axios.get(ServerAddr+'/board_detail', {
                params: {number:"1"}
            })
                .then( res => {console.log(res)})
                .catch( res => {console.log(res)});
            this.setState({showBoard:false});
        }
        else{
            this.setState({showBoard:true});
        }
    }
    render(){
        const {
            Date, hits, number, title, writer
        } = this.props.data;
        return(
            <>
                <tr>
                    <td>{number}</td>
                    <td onClick={this.handleShow}>{title}</td>
                    <td>{writer}</td>
                    <td>{Date}</td>
                    <td>{hits}</td>
                </tr>
                <tr hidden = {!this.state.showBoard}>
                    <td colSpan="5">comment</td>
                </tr>
            </>
        );
    }
}

export default FreeTableRow;