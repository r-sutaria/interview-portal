import React from 'react';
import {Nav, NavItem, NavLink, NavbarToggler, Navbar} from 'reactstrap';
export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }


    render() {
        return(
            // <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            //     <div className="d-flex flex-grow-1">
            //         <a href="/" className="navbar-brand">Codeply</a>
            //         <form className="mr-2 my-auto w-100 d-inline-block order-1">
            //             <div className="input-group">
            //                 <input type="text" className="form-control border border-right-0" placeholder="Search..." />
            //     <span className="input-group-append">
            //         <button className="btn btn-outline-light border border-left-0" type="button">
            //             <i className="fa fa-search"></i>
            //         </button>
            //     </span>
            //             </div>
            //         </form>
            //     </div>
            //     <button className="navbar-toggler order-0" type="button" data-toggle="collapse" data-target="#navbar7">
            //         <span className="navbar-toggler-icon"></span>
            //     </button>
            //     <div className="navbar-collapse collapse flex-shrink-1 flex-grow-0 order-last" id="navbar7">
            //         <ul className="navbar-nav">
            //             <li className="nav-item">
            //                 <a className="nav-link" href="#">Link</a>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link" href="#">Link</a>
            //             </li>
            //         </ul>
            //     </div>
            // </nav>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="d-flex flex-grow-1">
                        <a href="/" className="navbar-brand">Codeply</a>
                        <form className="mr-2 my-auto w-100 d-inline-block order-1">
                            <div className="input-group">
                                <input type="text" className="form-control border border-right-0" placeholder="Search..." />
                                <span className="input-group-append">
                    <button className="btn btn-outline-light border border-left-0" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
                            </div>
                        </form>
                    </div>
                </nav>
        )
    }
};