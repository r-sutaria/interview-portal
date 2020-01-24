import React from "react";
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
    Form
} from "reactstrap";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen: false,
            loginOpen: false,
            signUpOpen: false
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
                        <Nav className={'mr-auto'} navbar={true}>
                        </Nav>
                        <Nav navbar={true}>
                            <NavItem>
                                <Button
                                    color={'link text-white'}
                                    style={{
                                        textDecoration: 'none'
                                    }}
                                    onClick={(event)=>{
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
                                        <LoginForm/>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button
                                            color={'link text-primary'}
                                            style={{
                                                textDecoration: 'none'
                                            }}
                                            onClick={(event)=>{
                                                this.toggleSignUp();
                                                event.preventDefault();
                                            }}
                                        >
                                            Not a member? Sign Up
                                        </Button>
                                        <Button
                                            color={'success'}
                                            onClick={
                                                (event) => {
                                                    event.preventDefault();
                                                }
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
                                            color={'link text-primary'}
                                            style={{
                                                textDecoration: 'none'
                                            }}
                                            onClick={(event)=>{
                                                this.toggleLogin();
                                                event.preventDefault();
                                            }}
                                        >
                                            Already a member? Login
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
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}