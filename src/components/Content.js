import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Diy from './Diy/Diy';
import Buy from "./Buy/Buy";
import Sale from "./Sale/Sale";
import FreeBoard from "./FreeBoard/FreeBoard";
import QnABoard from "./QnABoard/QnABoard";
import Login from "./Login/Login"
import SignUp from "./SignUp/SignUp";
import WriteFree from "./FreeBoard/WriteFree";
import antenna_sale from "./Sale/antenna_sale";
import battery_sale from "./Sale/battery_sale";
import cb_sale from "./Sale/cb_sale";
import esc_sale from "./Sale/esc_sale";
import frame_sale from "./Sale/frame_sale";
import motor_sale from "./Sale/motor_sale";
import wings_sale from "./Sale/wings_sale";
const Content = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/diy" component={Diy}/>
            <Route path="/buy" component={Buy}/>
            <Route path="/sale" component={Sale}/>
            <Route path="/qna-board" component={QnABoard}/>
            <Route path="/free-board" component={FreeBoard}/>
            <Route path="/Write-Free-Board" component={WriteFree}/>
            <Route path="/login" component={Login}/>
            <Route path="/sign-up" component={SignUp}/>
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

export default Content;