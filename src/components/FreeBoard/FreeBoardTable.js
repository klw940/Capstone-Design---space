import React, { Component } from 'react'
import {Table} from "semantic-ui-react";
import {Link} from "react-router-dom";

class FreeBoardTable extends Component {
    render() {
        const { posts } = this.props;

        return (
            <Table.Row>
                <Table.Cell>{posts.number}</Table.Cell>
                <Table.Cell>
                    <Link to={{ pathname: '/freeBoard/view', state: {number: posts.number, title: posts.title, contents: posts.contents}}}>
                        {posts.title}
                    </Link>
                </Table.Cell>
                <Table.Cell>{posts.writer}</Table.Cell>
                <Table.Cell>{posts.date}</Table.Cell>
            </Table.Row>
        )
    }
}

export default FreeBoardTable;