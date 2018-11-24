import React, { Component } from 'react';
import DiyInfo from './Diyinfo';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class DiyList extends Component{
    static defaultProps = {
        data: [],
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
                info,
                selectParts,
        } = this.props;

        const list = info.filter(info => info.part === category).map(
                info => (<DiyInfo
                    key={info.id}
                    info={info}
                    selectParts={selectParts}
                />)
            )
        return(
            <div>
                {list}
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