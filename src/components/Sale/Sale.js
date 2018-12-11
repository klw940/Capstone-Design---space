import React, { Component } from 'react';
import {Tab} from 'semantic-ui-react';
import SaleRegister from "./Sale_Register";
import {Redirect} from "react-router-dom";

class Sale extends Component{
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
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        const panes = [
            { menuItem: 'Frame', render: () => <Tab.Pane><SaleRegister part={this.state.frame}/></Tab.Pane> },
            { menuItem: 'Wings', render: () => <Tab.Pane><SaleRegister part={this.state.wings}/></Tab.Pane> },
            { menuItem: 'Control', render: () => <Tab.Pane><SaleRegister part={this.state.cb}/></Tab.Pane> },
            { menuItem: 'ESC', render: () => <Tab.Pane><SaleRegister part={this.state.esc}/></Tab.Pane> },
            { menuItem: 'Battery', render: () => <Tab.Pane><SaleRegister part={this.state.battery}/></Tab.Pane> },
            { menuItem: 'Antenna', render: () => <Tab.Pane><SaleRegister part={this.state.antenna}/></Tab.Pane> },
            { menuItem: 'Motor', render: () => <Tab.Pane><SaleRegister part={this.state.motor}/></Tab.Pane> },
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

export default Sale;