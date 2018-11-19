import React, { Component } from 'react';
import DiyInfo from './Diyinfo';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class DiyList extends Component{
    static defaultProps = {
        data: [],
    }
    render(){
        const { category,
                data,
                selectMotor,
                selectWings,
                selectFrame,
                selectControlBoard,
                selectEsc,
                selectBattery,
                selectAntenna,
        } = this.props;
        const motorList  = data.filter(info => info.part === 1).map(
            info => (<DiyInfo
                key={info.id}
                info={info}
                selectMotor={selectMotor}
            />)
        );
        const wingsList = data.filter(info => info.part === 2).map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                    selectWings={selectWings}
                />)
        );
        const frameList = data.filter(info => info.part === 3).map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                    selectFrame={selectFrame}
                />)
        );
        const controlBoardList = data.filter(info => info.part === 4).map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                    selectControlBoard={selectControlBoard}
                />)
        );
        const escList = data.filter(info => info.part === 5).map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                    selectEsc={selectEsc}
                />)
        );
        const batteryList = data.filter(info => info.part === 6).map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                    selectBattery={selectBattery}
                />)
        );
        const antennaList = data.filter(info => info.part === 7).map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                    selectAntenna={selectAntenna}
                />)
        );
        return(
            <div>
                <h2>List</h2>
                {
                    (() => {
                        if(category === 1) return (<div><h5>Motor</h5>{motorList}</div>);
                        if(category === 2) return (<div><h5>Wings</h5>{wingsList}</div>);
                        if(category === 3) return (<div><h5>Frame</h5>{frameList}</div>);
                        if(category === 4) return (<div><h5>Control Board</h5>{controlBoardList}</div>);
                        if(category === 5) return (<div><h5>ESC</h5>{escList}</div>);
                        if(category === 6) return (<div><h5>Battery</h5>{batteryList}</div>);
                        if(category === 7) return (<div><h5>Antenna</h5>{antennaList}</div>);
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