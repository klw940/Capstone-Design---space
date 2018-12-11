import React, { Component } from 'react';
import {Button, Tab} from 'semantic-ui-react';
import axios from "axios";
import BuyList from './BuyList';
import {List, Map, Record} from "immutable/dist/immutable";
import { ServerAddr } from "../Constants";
import {Redirect} from "react-router-dom";

const Parts = Record({
    name: '',
    image: '',
    price: '',
    weight: '',
    long_length: '',
    short_length: '',
    store: '',
    description: '',
    part: '',
    thrust: '',
    HOU: '',
    rating: '',
    material: ''
});

class Buy extends Component{
    constructor() {
        super();
        this.state = {
            frame: 1,
            wings: 2,
            cb: 3,
            esc: 4,
            battery: 5,
            antenna: 6,
            motor: 7,
            info: List([
                Parts({
                    name: '',
                    image: '',
                    price: '',
                    weight: '',
                    long_length: '',
                    short_length: '',
                    store: '',
                    description: '',
                    part: '',
                    thrust: '',
                    HOU: '',
                    rating: '',
                    material: ''
                }),
            ]),
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get(ServerAddr+'/buy')
            .then( res => {this.setState({
                info: res.data
            })
            })
            .catch( res => {
                console.log("error");
            });
    }

    render(){
        const panes = [
            { menuItem: 'Motor', render: () =>
                    <Tab.Pane><BuyList
                        category = {this.state.motor}
                        info = {this.state.info}
                    /> </Tab.Pane> },
            { menuItem: 'Wings', render: () => <Tab.Pane><BuyList
                    category = {this.state.wings}
                    info = {this.state.info}
                /></Tab.Pane> },
            { menuItem: 'Frame', render: () => <Tab.Pane><BuyList
                    category = {this.state.frame}
                    info = {this.state.info}
                /></Tab.Pane> },
            { menuItem: 'Control Board', render: () => <Tab.Pane><BuyList
                    category = {this.state.cb}
                    info = {this.state.info}
                /></Tab.Pane> },
            { menuItem: 'ESC', render: () => <Tab.Pane><BuyList
                    category = {this.state.esc}
                    info = {this.state.info}
                /></Tab.Pane> },
            { menuItem: 'Battery', render: () => <Tab.Pane><BuyList
                    category = {this.state.battery}
                    info = {this.state.info}
                /></Tab.Pane> },
            { menuItem: 'Antenna', render: () => <Tab.Pane><BuyList
                    category = {this.state.antenna}
                    info = {this.state.info}
                /></Tab.Pane> },
        ];
        if(!sessionStorage.getItem('dtoken')){
            return(<Redirect to='/' />)
        }
        else
            return(
                <div>
                    <Tab panes={panes}>
                    </Tab>
                </div>
            );
    }
}

export default Buy;