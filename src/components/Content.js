import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Diy from './Diy/Diy';
import Buy from "./Buy/Buy";
import Sale from "./Sale/Sale";
import FreeBoard from "./FreeBoard/FreeBoard";
import QnABoard from "./QnABoard/QnABoard";

const Content = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/diy" component={Diy}/>
            <Route path="/buy" component={Buy}/>
            <Route path="/sale" component={Sale}/>
            <Route path="/qna-board" component={QnABoard}/>
            <Route path="/free-board" component={FreeBoard}/>
        </Switch>
    )
}

export default Content;