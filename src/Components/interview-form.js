import React from "react";
// import {Navbar,NavbarBrand,Collapse,NavbarToggler,Nav,NavItem,NavLink,NavbarText} from 'reactstrap';
import {Form,FormGroup,Label,Input,Button,Row,Col,FormText} from 'reactstrap';
import RoundCard from "./RoundCard";
export default class ExperienceForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            company: 'Amazon',
            rounds:[
                {
                    id: '1',
                    title: '',
                    details: ''
                }
            ]
        };
        this.addRound = this.addRound.bind(this);
        this.onChangeDetails = this.onChangeDetails.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.renderRound = this.renderRound.bind(this);
        this.removeCard = this.removeCard.bind(this);
    }

    addRound = (event) => {
        const index = this.state.rounds.length;
        const list = this.state.rounds.slice().concat({
            id: (index+1).toString(),
            experience: ''
        });
        this.setState({
            rounds: list
        });
        console.log(this.state);
        event.preventDefault();
    }

    removeCard = (event,round) => {
        event.preventDefault();
        const list = this.state.rounds.filter((item) => item.id !== round.id)
        const modifiedList = list.map((item,index) => {
            return({
                id: (index+1).toString(),
                title: item.title,
                details: item.details
            })
        });
        this.setState({
            rounds: modifiedList
        })
    };

    onChangeTitle = (event,round) => {
        const list = this.state.rounds.slice();
        list[+round.id-1].title = event.target.value;
        this.setState({
            rounds: list
        })
    };

    onChangeDetails = (event,round) => {
        const list = this.state.rounds.slice();
        list[+round.id-1].details = event.target.value;
        this.setState({
            rounds: list
        })
    }

    renderRound = (round,index) => {
        return(
            <RoundCard
                id={index}
                onClick={this.removeCard}
                onChangeTitle={this.onChangeTitle}
                onChangeDetails={this.onChangeDetails}
                round={round}
            />);
    };

    render() {
        return (
            <div>
                <h3 className={'text-center mt-2'}>Interview Experience</h3>
                <Form className={'card-body'}>
                    <FormGroup className={'row'}>
                        <Label
                            className="col-lg-1 col-form-label text-center"
                            for={'company'}
                        >
                            <h5><b>Company</b></h5>
                        </Label>
                        <Input
                            type='select'
                            name='select'
                            id='company'
                            className={'col-lg-11'}
                            onChange={
                                (event) => {
                                    this.setState({
                                        company: event.target.value
                                    });
                                }
                            }
                        >
                            <option value={'Amazon'}>Amazon</option>
                            <option value={'Media.net'}>Media.net</option>
                            <option value={'Microsoft'}>Microsoft</option>
                            <option value={'Samsung'}>Samsung</option>
                            <option value={'Google'}>Google</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className={'row'}>
                        <Label
                            className="col-lg-1 col-form-label text-center"
                        >
                            <h5><b>Job Type</b></h5>
                        </Label>
                        <Label check className={'col-auto col-form-label'}>
                            <Input type="radio" name="job-type" />{' '}
                            <b> 2-month Internship </b>
                        </Label>
                        <Label check className={'col-auto col-form-label'}>
                            <Input type="radio" name="job-type" />{' '}
                            <b> 6-month Internship </b>
                        </Label>
                        <Label check className={'col-auto col-form-label'}>
                            <Input type="radio" name="job-type" />{' '}
                            <b> Full Time Employment </b>
                        </Label>
                        <Label check className={'col-auto col-form-label'}>
                            <Input type="radio" name="job-type" />{' '}
                            <b> 6-month + Full time Employment </b>
                        </Label>
                    </FormGroup>
                    <FormGroup className={'row mt-1'}>
                        <Label
                            className="col-lg-1 col-form-label text-center"
                            for={'ctc'}
                        >
                            <h5><b>CTC</b></h5>
                        </Label>
                        <Input
                            type='number'
                            name='number'
                            id='ctc'
                            className={'col-lg-4'}

                        />
                        <div className={'col-lg-1 col-form-label'}>
                            <h5><b>In LPA</b></h5>
                        </div>
                    </FormGroup>
                    <FormGroup className={'row'}>
                        <Label
                            className="col-lg-2 col-form-label"
                            for={'job-profile'}
                        >
                            <h5><b>Job Profile</b></h5>
                        </Label>
                        <Input
                            type='text'
                            name='text'
                            id={'job-profile'}
                            className={'col-lg-10'}
                            style={{marginLeft:'-8rem'}}

                        />
                    </FormGroup>
                    <FormGroup>
                        <Row className={'mt-3'}>
                            <Col md={2}>
                                <Label
                                    className="col-form-label text-center ml-3"
                                    for={'company'}
                                >
                                    <h3>Rounds: </h3>
                                </Label>
                            </Col>
                        </Row>
                        <Row className={'mt-3'}>
                            <Col md={2}>

                            </Col>
                        </Row>
                    {
                        this.state.rounds.map((round,index) =>
                            <RoundCard
                                id={index}
                                onClick={this.removeCard}
                                onChangeTitle={this.onChangeTitle}
                                onChangeDetails={this.onChangeDetails}
                                round={round}
                                key={(index+1).toString()}
                            />
                        )
                    }
                    </FormGroup>
                    <FormGroup className={'ml-auto mr-auto p-3'}>
                        <Button
                            color={'dark'}
                            onClick={
                                (event) => {
                                    this.addRound(event);
                                }
                            }
                        >
                            Add Round
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}