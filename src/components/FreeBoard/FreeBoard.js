import React from 'react'
import { Icon, Label, Menu, Table,Button } from 'semantic-ui-react'
const FreeBoard = () => (
    <Table celled>

        <Table.Header>

            <Table.Row>
                <Table.HeaderCell>제목</Table.HeaderCell>
                <Table.HeaderCell>작성자</Table.HeaderCell>
                <Table.HeaderCell>조회수</Table.HeaderCell>
                <Table.HeaderCell>등록일</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>암거나</Table.Cell>
                <Table.Cell>네네</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>2018-12-09</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>이거나</Table.Cell>
                <Table.Cell>오키</Table.Cell>
                <Table.Cell>15</Table.Cell>
                <Table.Cell>2018-12-09</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>저거나</Table.Cell>
                <Table.Cell>응응</Table.Cell>
                <Table.Cell>20</Table.Cell>
                <Table.Cell>2018-12-09</Table.Cell>
            </Table.Row>
        </Table.Body>

        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell colSpan='4'>
                    <Button inverted color='pink'>
                        글작성
                    </Button>
                    <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                            <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                            <Icon name='chevron right' />
                        </Menu.Item>
                    </Menu>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    </Table>
)

export default FreeBoard