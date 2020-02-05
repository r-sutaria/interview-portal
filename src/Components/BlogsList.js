import React from "react";
import AnswerBox from "./AnswerBox";
import {Card,Button,ButtonDropdown,DropdownToggle,DropdownItem,DropdownMenu,Row,Col} from "reactstrap";
import {FaComment,FaEllipsisH,FaFacebookF,FaTwitter,AiFillEdit,MdShare,FaStar} from "react-icons/all";
import {Editor,EditorState,convertToRaw,convertFromRaw} from 'draft-js';
import CodeEditor from "./CodeEditor";
import '../Images/pikachu.jpg';
import AnswerCard from "./AnswerCard";
export default class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOptionsOpen: false,
            answer: false,
            answers: [],
            editorState: EditorState.createEmpty(),
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.onChange = this.onChange.bind(this);
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

    onChange = (editorState) => {
        this.setState({editorState})
    };

    onSubmit = () => {
        this.setState({
            answers: [...this.state.answers,this.state.editorState]
        });
    };

    render() {
        return (
            <div className={'container mt-2'} style={{minHeight: this.state.height-57}}>
                <Card>
                    <div className={'mx-4 mt-2 border-bottom'}>
                        <div className={'row'}>
                            <b className={'col-11'}>
                                <h4>
                                    What are some tips to crack the Amazon interview?
                                </h4>
                            </b>
                            <ButtonDropdown
                                className={'float-right col-1'}
                                color={'white'}
                                isOpen={this.state.isOptionsOpen}
                                toggle={()=>this.setState({isOptionsOpen:!this.state.isOptionsOpen})}
                                size={'lg'}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <DropdownToggle title={'Options'} className={'bg-white text-dark border-0'}>
                                    <FaEllipsisH/>
                                </DropdownToggle>
                                <DropdownMenu style={{fontStyle: 'normal'}}>
                                    <Button className={'ml-3 text-dark'} color={'white'}><b>Report</b></Button>
                                    <Button className={'ml-3 text-dark'} color={'white'}><b>Answer Later</b></Button>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </div>
                        <div className={'row mb-1'}>
                            <div className={'col-6'}>
                                <Button
                                    className={'border-0'}
                                    color={'dark'}
                                    size={'sm'}
                                    onMouseDown={(e) => {
                                        this.setState({
                                            answer: !this.state.answer
                                        });
                                        e.preventDefault();
                                    }}
                                >
                                    <AiFillEdit size={'20px'}/>
                                    {' Answer'}
                                </Button>
                                <Button
                                    className={'border-0 ml-2'}
                                    color={'dark'}
                                    size={'sm'}
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <FaStar size={'20px'}/>
                                    {' Save'}
                                </Button>
                            </div>
                            <div className={'col-6'}>
                                <div className={'text-right'}>
                                    <Button
                                        className={'border-0 mb-1'}
                                        color={'white'}
                                        title={'Comment'}
                                        onMouseDown={(e) => {
                                            console.log('mouse down!');
                                            e.preventDefault();
                                        }}
                                    >
                                        <FaComment/>
                                    </Button>
                                    <Button
                                        className={'border-0 mb-1'}
                                        color={'white'}
                                        onMouseDown={(e) => {
                                            console.log('mouse down!');
                                            e.preventDefault();
                                        }}
                                        title={'Share on Facebook'}
                                    >
                                        <FaFacebookF/>
                                    </Button>
                                    <Button
                                        className={'border-0 mb-1'}
                                        color={'white'}
                                        title={'Share on Twitter'}
                                        onMouseDown={(e) => {
                                            console.log('mouse down!');
                                            e.preventDefault();
                                        }}
                                    >
                                        <FaTwitter/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.answer
                            ? <AnswerBox
                                    onChange={this.onChange}
                                    onSubmit={this.onSubmit}
                                    editorState={this.state.editorState}
                            />
                            : <div>
                                <br/>
                            </div>
                    }
                    {
                        this.state.answers[0]
                        ?   <AnswerCard editorState={this.state.answers[0]} />
                        : <div></div>
                    }
                </Card>
            </div>
        )
    }
}