import React, { Component } from 'react';
import BuyInfo from './Buyinfo';
import { Pagination, Icon } from 'semantic-ui-react';

class BuyList extends Component{
    constructor(){
        super();
        this.state = {
            pageCount: 5,
            activePage: 1
        };
    };

    handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

    render(){
        const { category,
            selectParts,
            info,
        } = this.props;

        let frontIndex= this.state.pageCount*(this.state.activePage-1);
        let backIndex = this.state.pageCount*this.state.activePage;

        const list = info.filter(info => info.part === category).filter((info, index) => (index >= frontIndex && index < backIndex)).map(
            info => (<BuyInfo
                key={info._id}
                info={info}
            />)
        );

        return(
            <div>
                {
                    ( () => {
                        if(category === 1) return(<h1>Frame List</h1>);
                        else if(category === 2) return(<h1>Wings List</h1>);
                        else if(category === 3) return(<h1>ControlBoard List</h1>);
                        else if(category === 4) return(<h1>ESC List</h1>);
                        else if(category === 5) return(<h1>Battery List</h1>);
                        else if(category === 6) return(<h1>Antenna List</h1>);
                        else if(category === 7) return(<h1>Motor List</h1>)
                    })()
                }
                {list}
                <div align="center">
                    <Pagination
                        defaultActivePage={1}
                        firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                        lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                        prevItem={{ content: <Icon name='angle left' />, icon: true }}
                        nextItem={{ content: <Icon name='angle right' />, icon: true }}
                        onPageChange={this.handlePaginationChange}
                        totalPages={Math.ceil(info.filter(info => info.part === category).length/5)}
                        style = {{marginLeft: 'auto', marginRight: 'auto'}}
                    />
                </div>
            </div>

        );
    }
}

export default BuyList;