import React, { Component} from 'react';
import Menu from './components/Menu';
import Content from './components/Content';

class App extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return (
            <div>
                <Menu/>
                <Content/>
            </div>
        );
    }
}

export default App;