import React, { Component } from 'react';
import {Button, Tab} from 'semantic-ui-react';
import axios from "axios";
import BuyList from './BuyList';
import {List, Map, Record} from "immutable/dist/immutable";

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
    frameMaterial: '',
    wingMaterial: '',
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
            step1Show: false,
            step2Show: false,
            step3Show: false,
            step4Show: false,
            step5Show: false,
            step6Show: false,
            step7Show: false,
            ServerAddr: "http://ec2-52-32-190-25.us-west-2.compute.amazonaws.com:3001",
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
                    frameMaterial: '',
                    wingMaterial: '',
                }),
            ]),
        }
    }
    selectParts = (select, input) => {
        const { selectedParts } = this.state;

        switch(select){
            case 1:
                this.setState({
                    selectedParts: selectedParts.set('motor', input)
                })
                this.inputSelectParts(input);
                break;
            case 2:
                this.setState({
                    selectedParts: selectedParts.set('wings', input)
                })
                this.inputSelectParts(input);
                break;
            case 3:
                this.setState({
                    selectedParts: selectedParts.set('frame', input)
                })
                this.inputSelectParts(input);
                break;
            case 4:
                this.setState({
                    selectedParts: selectedParts.set('controlBoard', input)
                })
                this.inputSelectParts(input);
                break;
            case 5:
                this.setState({
                    selectedParts: selectedParts.set('esc', input)
                })
                this.inputSelectParts(input);
                break;
            case 6:
                this.setState({
                    selectedParts: selectedParts.set('battery', input)
                })
                this.inputSelectParts(input);
                break;
            case 7:
                this.setState({
                    selectedParts: selectedParts.set('antenna', input)
                })
                this.inputSelectParts(input);
                break;
        }
    }

    inputSelectParts = (input) => {
        axios.post(this.state.ServerAddr+'/drone', input)
            .then( res => { console.log(res) })
            .catch( res => { console.log(res) });
    }
    componentDidMount() {
        axios.get(this.state.ServerAddr+'/buy')
            .then( res => {this.setState({
                info: res.data
            })
            })
            .catch( res => {
                console.log("error");
            });
    }
    nextShow1 = () => {
        this.setState({ step1Show: true});
    }

    nextShow2 = () => {
        this.setState({ step2Show: true });
    }

    nextShow3 = () => {
        this.setState({ step3Show: true });
    }

    nextShow4 = () => {
        this.setState({ step4Show: true });
    }

    nextShow5 = () => {
        this.setState({ step5Show: true});
    }

    nextShow6 = () => {
        this.setState({ step6Show: true});
    }

    nextShow7 = () => {
        this.setState({ step7Show: true});
    }

    render(){
        const panes = [
            { menuItem: 'Motor', render: () =>
                    <Tab.Pane><BuyList
                        category = {this.state.motor}
                        info = {this.state.info}
                        selectParts = {this.selectParts}
                    /> </Tab.Pane> },
            { menuItem: 'Wings', render: () => <Tab.Pane><BuyList
                    category = {this.state.wings}
                    info = {this.state.info}
                    selectParts = {this.selectParts}
                /></Tab.Pane> },
            { menuItem: 'Frame', render: () => <Tab.Pane><BuyList
                    category = {this.state.frame}
                    info = {this.state.info}
                    selectParts = {this.selectParts}
                /></Tab.Pane> },
            { menuItem: 'Control Board', render: () => <Tab.Pane><BuyList
                    category = {this.state.cb}
                    info = {this.state.info}
                    selectParts = {this.selectParts}
                /></Tab.Pane> },
            { menuItem: 'ESC', render: () => <Tab.Pane><BuyList
                    category = {this.state.esc}
                    info = {this.state.info}
                    selectParts = {this.selectParts}
                /></Tab.Pane> },
            { menuItem: 'Battery', render: () => <Tab.Pane><BuyList
                    category = {this.state.battery}
                    info = {this.state.info}
                    selectParts = {this.selectParts}
                /></Tab.Pane> },
            { menuItem: 'Antenna', render: () => <Tab.Pane><BuyList
                    category = {this.state.antenna}
                    info = {this.state.info}
                    selectParts = {this.selectParts}
                /></Tab.Pane> },
        ];
        return(
            <div>
                <Tab panes={panes}>
                </Tab>
            </div>
        );
    }
}

export default Buy;