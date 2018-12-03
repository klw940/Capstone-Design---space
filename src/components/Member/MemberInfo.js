import React, { Component } from 'react';
import axios from "axios";

class MemberInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            email:'',
            role:'',
        }
    }
    componentDidMount() {
        let ServerAddr = 'http://ec2-52-32-190-25.us-west-2.compute.amazonaws.com:3001';
        axios.get(ServerAddr+'/api/auth/check', { headers: {"x-access-token" : sessionStorage.getItem('dtoken')}}).then(res => {
            console.log(res.data.info);
         this.setState(res.data.info);
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.id}</h1>
                <h1>{this.state.name}</h1>
                <h1>{this.state.email}</h1>
                <h1>{this.state.role}</h1>
            </div>
        );
    }
}

export default MemberInfo;