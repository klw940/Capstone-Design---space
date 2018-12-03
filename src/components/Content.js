import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Diy from './Diy/Diy';
import Recommend from './Recommend/Recommend'
import Buy from "./Buy/Buy";
import Sale from "./Sale/Sale";
import FreeBoard from "./FreeBoard/FreeBoard";
import QnABoard from "./QnABoard/QnABoard";
import Login from "./Member/Login"
import SignUp from "./Member/SignUp";
import MemberInfo from "./Member/MemberInfo";
import Pay from "./Pay/Pay"
import antenna_sale from "./Sale/antenna_sale";
import battery_sale from "./Sale/battery_sale";
import cb_sale from "./Sale/cb_sale";
import esc_sale from "./Sale/esc_sale";
import frame_sale from "./Sale/frame_sale";
import motor_sale from "./Sale/motor_sale";
import wings_sale from "./Sale/wings_sale";

class Content extends Component{
    render() {
        const {isAuthenticated} = this.props;
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/diy" component={Diy}/>
                <Route path="/recommend" component={Recommend}/>
                <Route path="/buy" component={Buy}/>
                <Route path="/sale" component={Sale}/>
                <Route path="/qnaBoard" component={QnABoard}/>
                <Route path="/freeBoard" component={FreeBoard}/>
                <Route path="/login" render={(props) => <Login {...props} isAuthenticated={isAuthenticated}/>}/>
                <Route path="/sign_up" component={SignUp}/>
                <Route path="/profile" component={MemberInfo}/>
                <Route path="/pay" component={Pay}/>
                <Route path="/antenna_sale" component={antenna_sale}/>
                <Route path="/battery_sale" component={battery_sale}/>
                <Route path="/cb_sale" component={cb_sale}/>
                <Route path="/esc_sale" component={esc_sale}/>
                <Route path="/frame_sale" component={frame_sale}/>
                <Route path="/motor_sale" component={motor_sale}/>
                <Route path="/wings_sale" component={wings_sale}/>
            </Switch>
        )
    }
}

export default Content;