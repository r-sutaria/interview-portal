import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Navbar,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {AiFillNotification,FaBookmark,AiFillEdit,FaQuestionCircle,MdHistory,AiOutlineCode,IoMdStats} from 'react-icons/all';
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
            <nav className={'sidebar border-dark border-right'} style={{backgroundColor: '#c1c1c1',minHeight:this.state.height-57,width: '13%',minWidth:200,position: 'fixed',float:'left'}}>
                <div>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to={'/notifications'} className={'nav-link active text-dark'}>
                                <b>
                                    <span className={'mb-1 col-form-label'}>
                                        <AiFillNotification size={20}/>
                                    </span>
                                    {' '}Notifications
                                </b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/saved'} className={'nav-link active text-dark'}>
                                <b>
                                    <span className={'mb-1 col-form-label'}>
                                        <FaBookmark size={20}/>
                                    </span>
                                    {' '}Saved
                                </b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/queries'} className={'nav-link active text-dark'}>
                                <b>
                                    <span className={'mb-1 col-form-label'}>
                                        <FaQuestionCircle size={20}/>
                                    </span>
                                    {' '}Queries
                                </b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/experiences'} className={'nav-link active text-dark'}>
                                <b>
                                    <span className={'mb-1 col-form-label'}>
                                        <AiFillEdit size={20}/>
                                    </span>
                                    {' '}Experiences
                                </b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/history'} className={'nav-link active text-dark'}>
                                <b>
                                    <span className={'mb-1 col-form-label'}>
                                        <MdHistory size={20}/>
                                    </span>
                                    {' '} History
                                </b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/practice'} className={'nav-link active text-dark'}>
                                <b>
                                    <span className={'mb-1 col-form-label'}>
                                        <AiOutlineCode size={20}/>
                                    </span>
                                    {' '} Practice
                                </b>
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link
                                className={'nav-link active text-dark'}
                                to={'/placement'}
                            >
                                <b>
                                    <span className={'mb-1 col-form-label'}>
                                        <IoMdStats size={20}/>
                                    </span>
                                    {' '}
                                    Placements
                                </b>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};