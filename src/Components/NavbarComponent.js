import React from "react";
import SidebarComponent from "./SidebarComponent";
import './NavbarComponent.css';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from "reactstrap";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import {FaSearch} from "react-icons/all";

export default class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen: false,
            loginOpen: false,
            signUpOpen: false,
            username: '',
            password: '',
        }
    }

    toggleLogin = () => {
        this.setState({
            loginOpen: !this.state.loginOpen,
            signUpOpen: false
        })
    };

    toggleSignUp = () => {
        this.setState({
            loginOpen: false,
            signUpOpen: !this.state.signUpOpen
        })
    };

    onChangeUsernameLogin = (event) => {
        this.setState({
            username: event.target.value
        });
        event.preventDefault();
    };

    onChangePasswordLogin = (event) => {
        this.setState({
            password: event.target.value
        });
        event.preventDefault();
    };

    render(){
        return(
            <div>
                <Navbar
                    color={"dark"}
                    expand={'md'}
                    dark
                    className={'border-dark border-bottom'}
                    fixed={'top'}
                >
                    <div className={'container-fluid'}>
                        <NavbarBrand
                            href={'/'}
                            className={'text-left'}
                            style={{width:'13%'}}
                        >
                            <Link
                                to={'/'}
                                className={'text-white'}
                                style={{textDecoration: 'none'}}
                                onMouseDown = {(e) => e.preventDefault()}
                            >
                                InterviewPortal
                            </Link>
                        </NavbarBrand>
                        <div className="d-flex flex-grow-1 mr-2">
                            <Form className="mr-2 my-auto w-100 d-inline-block order-1">
                                <InputGroup>
                                    <Input type="text"
                                           placeholder="Search for companies..."
                                    />
                                    <InputGroupAddon addonType={'append'}>
                                            <Button
                                                className="btn-outline-dark border border-left-0"
                                                type="button"
                                                color={'light'}
                                            >
                                                <FaSearch/>
                                            </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </div>
                        <NavbarToggler onClick={(event)=>{this.setState({
                            isOpen: !this.state.isOpen
                        });
                        event.preventDefault();
                        }}
                        />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className={'mr-auto'} navbar={true}>
                                <NavItem>
                                    <Link
                                        className={'btn text-white'}
                                        onMouseDown = {(e)=>e.preventDefault()}
                                        to={'/experiences'}
                                    >
                                        Experiences
                                    </Link>
                                </NavItem>

                                <NavItem>
                                    <Link
                                        className={'btn text-white'}
                                        onMouseDown = {(e)=>e.preventDefault()}
                                        to={'/queries'}
                                    >
                                        Blogs
                                    </Link>
                                </NavItem>

                                <NavItem>
                                    <Link
                                        className={'btn text-white'}
                                        onMouseDown={(e)=>e.preventDefault()}
                                        to={'/practice'}
                                    >
                                        Practice
                                    </Link>
                                </NavItem>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret className={'text-white'}>
                                        Placements
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Placement 2020
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link
                                                style={{textDecoration:'none',color:'#000000'}}
                                                to={'/placement-report-2019'}
                                            >
                                                Placement Report 2019
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Placement Rules
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            <Nav navbar={true}>
                                {
                                    !this.props.user ?
                                        <NavItem>
                                            <Button
                                                color={'link text-white'}
                                                style={{
                                                    textDecoration: 'none'
                                                }}
                                                onClick={(event) => {
                                                    this.toggleLogin();
                                                    event.preventDefault();
                                                }}
                                            >
                                                Login / SignUp
                                            </Button>
                                            <Modal
                                                isOpen={this.state.loginOpen}
                                                toggle={this.toggleLogin}
                                            >
                                                <ModalHeader toggle={this.toggleLogin}>Login</ModalHeader>
                                                <ModalBody>
                                                    <LoginForm
                                                        onChangeUsernameLogin={this.onChangeUsernameLogin}
                                                        onChangePasswordLogin={this.onChangePasswordLogin}
                                                        username={this.state.username}
                                                        passsword={this.state.password}
                                                    />
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button
                                                        color={'link text-dark'}
                                                        style={{
                                                            textDecoration: 'none'
                                                        }}
                                                        onClick={(event) => {
                                                            this.toggleSignUp();
                                                            event.preventDefault();
                                                        }}
                                                    >
                                                        <b>Not a member? Sign Up</b>
                                                    </Button>
                                                    <Button
                                                        color={'success'}
                                                        onClick={(event) =>
                                                            this.props.onClickLogin(event, this.state.username, this.state.password)
                                                        }
                                                    >
                                                        Login
                                                    </Button>
                                                </ModalFooter>
                                            </Modal>
                                            <Modal
                                                isOpen={this.state.signUpOpen}
                                                toggle={this.toggleSignUp}
                                            >
                                                <ModalHeader toggle={this.toggleSignUp}>Sign Up</ModalHeader>
                                                <ModalBody>
                                                    <SignUpForm/>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button
                                                        color={'link text-dark'}
                                                        style={{
                                                            textDecoration: 'none'
                                                        }}
                                                        onClick={(event) => {
                                                            this.toggleLogin();
                                                            event.preventDefault();
                                                        }}
                                                    >
                                                        <b>Already a member? Login</b>
                                                    </Button>
                                                    <Button
                                                        color={'success'}
                                                        onClick={
                                                            (event) => {
                                                                event.preventDefault();
                                                            }
                                                        }
                                                    >
                                                        Sign Up
                                                    </Button>
                                                </ModalFooter>
                                            </Modal>
                                        </NavItem>
                                        :
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret className={'text-white'}>
                                                {this.props.user}
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>
                                                    Profile
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Messages
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem
                                                    onClick={(event) => {
                                                        this.props.onClickSignOut(event);
                                                        this.setState({
                                                            loginOpen: false,
                                                            signUpOpen: false
                                                        })
                                                    }}
                                                >
                                                    SignOut
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                }
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}