import React from "react";
import {Col, Row,Button} from "reactstrap";
import {Link} from "react-router-dom";
import {FaStar,FaRegStar} from "react-icons/all";
import AnswerProfileCard from "./AnswerProfleCard";

export default class QueryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false
        }
    }

    onSaveClick = (e) => {
        e.preventDefault();
        this.setState({
            saved: !this.state.saved
        });
    };

    render() {
        return (
            <div className={'border border-dark rounded mr-5 mt-2'}>
                <Row>
                    <Col md={11}>
                        <Link to={'/query1'} className={'text-dark btn-link'}>
                            <div className={'ml-3'}>
                                <h5 className={'m-3'}>
                                    What are some tips to crack Amazon interview?
                                </h5>
                            </div>
                        </Link>
                    </Col>
                    <Col md={1}>
                        {
                            !this.state.saved ? <Button color={'white mt-2'} title={'Save'} onMouseDown={this.onSaveClick}><FaRegStar/></Button>
                                : <Button color={'white mt-2'} title={'Unsave'} onMouseDown={this.onSaveClick}><FaStar/></Button>
                        }
                    </Col>
                </Row>
                <div className={'ml-3 mb-3'}>
                    <AnswerProfileCard
                        src={'/pikachu.jpg'}
                        name={'Rutvik Sutaria'}
                        description={'8th semester CSE student'}
                    />
                    <div className={'ml-3 mt-1'}>
                        Mug up geeks for geeks.
                        Mug up geeks for geeks.
                        Mug up geeks for geeks.
                        Mug up geeks for geeks.
                        Mug up geeks for geeks.
                        Mug up geeks for geeks.
                        Mug up geeks for geeks.
                        Mug up geeks for geeks.
                        Mug up geeks for geeks.
                        Mug up geeks for geeks.
                        Mug up geeks for geeks.
                        Mug up geeks for geeks.
                        Mug up geeks for geeks.
                        Hello!!
                        ...
                        <Link to={'/query1/answer1'}>
                            (more)
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}