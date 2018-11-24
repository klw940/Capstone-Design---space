import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import axois from 'axios';

const panes = [
    { menuItem: 'Motor', render: () => <Tab.Pane>Motor</Tab.Pane> },
    { menuItem: 'Wings', render: () => <Tab.Pane>Wings</Tab.Pane> },
    { menuItem: 'Frame', render: () => <Tab.Pane>Frame</Tab.Pane> },
    { menuItem: 'Control Board', render: () => <Tab.Pane>Control Board</Tab.Pane> },
    { menuItem: 'ESC', render: () => <Tab.Pane>ESC</Tab.Pane> },
    { menuItem: 'Battery', render: () => <Tab.Pane>Battery</Tab.Pane> },
    { menuItem: 'Antenna', render: () => <Tab.Pane>Antenna</Tab.Pane> },
];

class Buy extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div>
                <h1>구매</h1>
                <Tab panes={panes} />
            </div>
        );
    }
}

export default Buy;