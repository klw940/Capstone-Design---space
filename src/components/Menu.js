import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {Link} from "react-router-dom";

class Menu extends Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return (
          <div>
              <Navbar color="light" light expand="md">
                  <NavbarBrand tag={Link} to="/">DIY Drone</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                          <NavItem>
                              <NavLink tag={Link} to="/Diy">드론견적</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink tag={Link} to="/buy">부품구매</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink tag={Link} to="/sale">부품판매</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink tag={Link} to="/qna-board">QnA게시판</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink tag={Link} to="/free-board">자유게시판</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="/">로그인</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink tag={Link} to="/sign-up">회원가입</NavLink>
                          </NavItem>
                          <UncontrolledDropdown nav inNavbar>
                              <DropdownToggle nav caret>
                                  내정보
                              </DropdownToggle>
                              <DropdownMenu right>
                                  <DropdownItem>
                                      회원정보수정
                                  </DropdownItem>
                                  <DropdownItem>
                                      로그아웃
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>
                                      Reset
                                  </DropdownItem>
                              </DropdownMenu>
                          </UncontrolledDropdown>
                      </Nav>
                  </Collapse>
              </Navbar>
          </div>
        );
    }
}

export default Menu;
