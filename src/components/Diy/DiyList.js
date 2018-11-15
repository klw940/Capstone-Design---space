import React, { Component } from 'react';
import DiyInfo from './Diyinfo';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class DiyList extends Component{
    static defaultProps = {
        data: [],
    }

    render(){
        const { category } = this.props;
        const { motorData } = this.props;
        const { wingsData } = this.props;
        const { frameData } = this.props;
        const { controlBoardData } = this.props;
        const { escData } = this.props;
        const { batteryData } = this.props;
        const { antennaData } = this.props;
        const motorList  = motorData.map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                />)
        );
        const wingsList = wingsData.map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                />)
        );
        const frameList = frameData.map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                />)
        );
        const controlBoardList =controlBoardData.map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                />)
        );
        const escList = escData.map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                />)
        );
        const batteryList = batteryData.map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                />)
        );
        const antennaList = antennaData.map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                />)
        );
        return(
            <div>
                <h2>List</h2>
                {
                    (()=> {
                        if (category === 1) return (<div> <h5>motor</h5> {motorList} </div>);
                        if (category === 2) return (<div> <h5>wings</h5> {wingsList} </div>);
                        if (category === 3) return (<div> <h5>frame</h5> {frameList} </div>);
                        if (category === 4) return (<div> <h5>control board</h5> {controlBoardList} </div>);
                        if (category === 5) return (<div> <h5>esc</h5> {escList} </div>);
                        if (category === 6) return (<div> <h5>battery</h5> {batteryList} </div>);
                        if (category === 7) return (<div> <h5>antenna</h5> {antennaList} </div>);
                    })()
                }
                <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            5
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                </Pagination>
            </div>
        );
    }
}

export default DiyList;