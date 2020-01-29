import React from "react";
// import {Navbar,NavbarBrand,Collapse,NavbarToggler,Nav,NavItem,NavLink,NavbarText} from 'reactstrap';
import {Form,FormGroup,Label,Input,Button,Row,Col,FormText,Card} from 'reactstrap';
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
            ],
            internship:false,
            employment: false
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
            <div className={'container'}>
                <h3 className={'text-center mt-2'}>Interview Experience</h3>
                <Form className={'card-body'}>
                    <FormGroup className={'row'}>
                        <Label
                            className="col-2 col-form-label "
                            for={'company'}
                        >
                            <h5><b>Company</b></h5>
                        </Label>
                        <Input
                            type='text'
                            list={'companies'}
                            name='select'
                            id='company'
                            className={'col-2'}
                            onChange={
                                (event) => {
                                    this.setState({
                                        company: event.target.value
                                    });
                                }
                            }
                        />
                        <datalist id={'companies'}>
                            <option value={'Amazon'}>Amazon</option>
                            <option value={'Media.net'}>Media.net</option>
                            <option value={'Microsoft'}>Microsoft</option>
                            <option value={'Samsung'}>Samsung</option>
                            <option value={'Google'}>Google</option>
                        </datalist>
                    </FormGroup>
                    <FormGroup className={'row'}>
                        <Label
                            className="col-2 col-form-label "
                        >
                            <h5><b>Job Type</b></h5>
                        </Label>
                        <Label check className={'col-auto col-form-label'}>
                            <Input
                                type = "radio"
                                name = "job-type"
                                onChange = {(e) => {
                                    this.setState({
                                        internship: e.target.value,
                                        employment: false
                                    })
                                }}
                            />
                            <b> 2-month Internship </b>
                        </Label>
                        <Label check className={'col-auto col-form-label'}>
                            <Input
                                type="radio"
                                name="job-type"
                                onChange = {(e) => {
                                    this.setState({
                                        internship: e.target.value,
                                        employment: false
                                    })
                                }}
                            />
                            <b> 6-month Internship </b>
                        </Label>
                        <Label check className={'col-auto col-form-label'}>
                            <Input
                                type="radio"
                                name="job-type"
                                onChange = {(e) => {
                                    this.setState({
                                        internship: false,
                                        employment: e.target.value
                                    })
                                }}
                            />
                            <b> Full Time Employment </b>
                        </Label>
                        <Label check className={'col-auto col-form-label'}>
                            <Input
                                type="radio"
                                name="job-type"
                                onChange = {(e) => {
                                    this.setState({
                                        internship: e.target.value,
                                        employment: e.target.value
                                    })
                                }}
                            />
                            <b> 6-month + Full time Employment </b>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        {
                            this.state.internship
                            ?
                                <FormGroup className={'row mt-1'}>
                                    <Label
                                        className="col-2 col-form-label "
                                        for={'stipend'}
                                    >
                                        <h5><b>Stipend</b></h5>
                                    </Label>
                                    < Input
                                        type='number'
                                        name='number'
                                        id='ctc'
                                        className={'col-1'}
                                    />
                                    <div className={'col-lg-3 col-form-label'}>
                                        <b>thousand per month</b>
                                    </div>
                                </FormGroup>
                            :
                                <div></div>
                        }
                        {
                            this.state.employment
                                ?
                                <FormGroup className={'row mt-1'}>
                                    <Label
                                        className="col-2 col-form-label "
                                        for={'ctc'}
                                    >
                                        <h5><b>CTC</b></h5>
                                    </Label>
                                    < Input
                                        type='number'
                                        name='number'
                                        id='ctc'
                                        className={'col-1'}
                                    />
                                    <div className={'col-lg-1 col-form-label'}>
                                        <b>in LPA</b>
                                    </div>
                                </FormGroup>
                                :
                                <div></div>
                        }
                    </FormGroup>
                    <FormGroup className={'row'}>
                        <Label
                            className="col-2 col-form-label"
                            for={'job-profile'}
                        >
                            <h5><b>Job Profile</b></h5>
                        </Label>
                        <Input
                            type='text'
                            name='text'
                            id={'job-profile'}
                            className={'col-lg-4'}
                        />
                    </FormGroup>
                    <FormGroup>
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