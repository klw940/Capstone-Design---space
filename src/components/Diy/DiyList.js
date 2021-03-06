import React, { Component } from 'react';
import DiyInfo from './Diyinfo';
import { Pagination, Icon } from 'semantic-ui-react';

class DiyList extends Component{
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
            message,
        } = this.props;

        let frontIndex= this.state.pageCount*(this.state.activePage-1);
        let backIndex = this.state.pageCount*this.state.activePage;

        const list = info.filter(info => info.part === category).filter((info, index) => (index >= frontIndex && index < backIndex)).map(
            info => (<DiyInfo
                key={info._id}
                info={info}
                selectParts={selectParts}
            />)
        );

        return(
            <div>
                {
                    ( () => {
                        if(category === 1) return(<h1>Step1: Frame List</h1>);
                        else if(category === 2) return(<h1>Step2: Wings List</h1>);
                        else if(category === 3) return(<h1>Step3: ControlBoard List</h1>);
                        else if(category === 4) return(<h1>Step4: ESC List</h1>);
                        else if(category === 5) return(<h1>Step5: Battery List</h1>);
                        else if(category === 6) return(<h1>Step6: Antenna List</h1>);
                        else if(category === 7) return(<h1>Step7: Motor List</h1>);
                    })()
                }
                {list}
                <h6 className="text-danger">{message}</h6>
                <div align="center">
                <Pagination
                    defaultActivePage={1}
                    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                    prevItem={{ content: <Icon name='angle left' />, icon: true }}
                    nextItem={{ content: <Icon name='angle right' />, icon: true }}
                    ellipsisItem={null}
                    onPageChange={this.handlePaginationChange}
                    totalPages={Math.ceil(info.filter(info => info.part === category).length/5)}
                    style = {{marginLeft: 'auto', marginRight: 'auto'}}
                />
                </div>
            </div>

        );
    }
}

export default DiyList;