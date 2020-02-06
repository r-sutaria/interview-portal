import React from 'react';
import {Nav, NavItem, NavLink, NavbarToggler, Navbar} from 'reactstrap';
export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    updateWindowsDimension = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    componentDidMount() {
        this.updateWindowsDimension();
        window.addEventListener('resize',this.updateWindowsDimension);
    }

    render() {
        return(
            <nav className={'sidebar border-dark border-right pt-2'} style={{backgroundColor: '#c1c1c1',minHeight:this.state.height-57,width: '13%',minWidth:200,position: 'fixed',float:'left'}}>
                <div>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className={'nav-link active text-dark'} href="#">
                                <b>Notifications</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={'nav-link active text-dark'} href="#">
                                <b>Saved</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={'nav-link active text-dark'} href="#">
                                <b>Ask A Query</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={'nav-link active text-dark'} href="#">
                                <b>Share your Interview Experience</b>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={'nav-link active text-dark'} href="#">
                                <b>History</b>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};