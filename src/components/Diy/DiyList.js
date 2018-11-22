import React, { Component } from 'react';
import DiyInfo from './Diyinfo';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class DiyList extends Component{
    static defaultProps = {
        data: [],
        selectMotor: () => console.warn('selectMotor not defined'),
        selectWings: () => console.warn('selectWings not defined'),
        selectFrame: () => console.warn(' selectFrame not defined'),
        selectControlBoard: () => console.warn('selectControlBoard not defined'),
        selectEsc: () => console.warn('selectEsc not defined'),
        selectBattery: () => console.warn('selectBattery not defined'),
        selectAntenna: () => console.warn('selectAntenna not defined'),
    }

    constructor(){
        super();
        this.dataSet = [...Array(Math.ceil(500 + Math.random() * 500))].map(
            (a, i) => "Record " + (i + 1)
        );
        this.pageSize = 50;
        this.pageCount = Math.ceil(this.dataSet.length/this.pageSize);

        this.state = {
          currentPage: 0
        };
    };

    handleClick(e, index) {

        e.preventDefault();

        this.setState({
            currentPage: index
        });

    }

    render(){
        const { category,
                data,
                selectParts,
          //      selectWings,
            //    selectFrame,
              //  selectControlBoard,
              //  selectEsc,
              //  selectBattery,
               // selectAntenna,
        } = this.props;

        const setList = (part) => {
            data.filter(info => info.part === part).map(
                info => (<DiyInfo
                    key={info.id}
                    info={info}
                    selectParts={selectParts}
                />)
            )
        }

        const motorList  = data.filter(info => info.part === 1).map(
            info => (<DiyInfo
                key={info.id}
                info={info}
                selectParts={selectParts}
            />)
        );
        const wingsList = data.filter(info => info.part === 2).map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                    selectParts={selectParts}
                />)
        );
        const frameList = data.filter(info => info.part === 3).map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                    selectParts={selectParts}
                />)
        );
        const controlBoardList = data.filter(info => info.part === 4).map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                    selectParts={selectParts}
                />)
        );
        const escList = data.filter(info => info.part === 5).map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                    selectParts={selectParts}
                />)
        );
        const batteryList = data.filter(info => info.part === 6).map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                    selectParts={selectParts}
                />)
        );
        const antennaList = data.filter(info => info.part === 7).map(
            info => (
                <DiyInfo
                    key={info.id}
                    info={info}
                    selectParts={selectParts}
                />)
        );
        return(
            <div>
                {
                    (() => {
                        if(category === 1)return (<div>{motorList}</div>);
                        else if(category === 2) return (<div>{wingsList}</div>);
                        else if(category === 3) return (<div>{frameList}</div>);
                        else if(category === 4) return (<div>{controlBoardList}}</div>);
                        else if(category === 5) return (<div>{escList}</div>);
                        else if(category === 6) return (<div>{batteryList}</div>);
                        else if(category === 7) return (<div>{antennaList}</div>);
                    })()
                }
            </div>
        );
    }
}

export default DiyList;

/*
{this.dataSet
    .slice(
        currentPage * this.pageSize,
        (currentPage + 1) * this.pageSize
    )
    .map((data, i) =>
        <div className="data-slice" key={i}>
            {data}
        </div>
    )}
<div className="pagination-wrapper">

    <Pagination aria-label="Page navigation example">

        <PaginationItem disabled={currentPage <= 0}>

            <PaginationLink
                onClick={e => this.handleClick(e, currentPage - 1)}
                previous
                href="#"
            />

        </PaginationItem>

        {[...Array(this.pagesCount)].map((page, i) =>
            <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                    {i + 1}
                </PaginationLink>
            </PaginationItem>
        )}

        <PaginationItem disabled={currentPage >= this.pagesCount - 1}>

            <PaginationLink
                onClick={e => this.handleClick(e, currentPage + 1)}
                next
                href="#"
            />

        </PaginationItem>

    </Pagination>

</div>*/