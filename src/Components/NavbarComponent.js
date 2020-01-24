import React from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink} from "reactstrap";

export default class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen: false
        }
    }

    render(){
        return(
            <div>
                <Navbar
                    color={"primary"}
                    expand={'md'}
                    dark
                >
                    <NavbarBrand
                        href={'#'}
                        className={'text-left'}
                    >
                        <span className={"text-white"}>InterviewPortal</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={()=>this.setState({
                        isOpen: !this.state.isOpen
                    })}
                    />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={'mr-auto'} navbar>
                            <NavItem>
                                <NavLink href={"#"} className={'text-light'}>Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={"#"} className={'text-light'}>Github</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText href={"#"} className={'text-light'}>Components</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}