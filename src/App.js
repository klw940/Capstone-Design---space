import React, { Component} from 'react';
import DesktopContainer from './components/DesktopContainer';
import Content from './components/Content';
//import Menu from './components/Menu'

class App extends Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <DesktopContainer/>
            </div>
        );
    }
}

export default App;