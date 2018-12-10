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
import Pay from "./Pay/Pay";
import Depositless from "./Pay/Depositless";
import BuyMange from "./BuyManage/BuyMange";

class Content extends Component{
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/diy" component={Diy}/>
                <Route path="/recommend" component={Recommend}/>
                <Route path="/buy" component={Buy}/>
                <Route path="/buyManage" component={BuyMange}/>
                <Route path="/sale" component={Sale}/>
                <Route path="/qnaBoard" component={QnABoard}/>
                <Route path="/freeBoard" component={FreeBoard}/>
                <Route path="/login" component = {Login} />
                <Route path="/sign_up" component={SignUp}/>
                <Route path="/profile" component={MemberInfo}/>
                <Route path="/pay/depositless" component={Depositless}/>
                <Route path="/pay" component={Pay}/>
            </Switch>
        )
    }
}

export default Content;