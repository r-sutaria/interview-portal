import React from "react";
// import {Navbar,NavbarBrand,Collapse,NavbarToggler,Nav,NavItem,NavLink,NavbarText} from 'reactstrap';
import {Form,FormGroup,Label,Input,Button,Row,Col} from 'reactstrap';
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
                <Form className={'card-body'}>
                    <FormGroup className={'row'}>
                        <Label
                            className="col-1 col-form-label text-center"
                            for={'username'}
                        >
                            <b>Username</b>
                        </Label>
                        <Input
                            type='email'
                            name='email'
                            id='username'
                            placeholder='with a placeholder'
                            className={'col-lg-11'}
                        />
                    </FormGroup>
                    <FormGroup className={'row'}>
                        <Label
                            className="col-lg-1 col-form-label text-center"
                            for={'company'}
                        >
                            <b>Company</b>
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
                        <Row className={'mt-3'}>
                            <Col md={2}>
                                <Label
                                    className="col-form-label text-center ml-3"
                                    for={'company'}
                                >
                                    <h3>Rounds: </h3>
                                </Label>
                            </Col>
                            <Col md={10}></Col>
                        </Row>
                    </FormGroup>
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
                    <FormGroup className={'ml-auto mr-auto p-3'}>
                        <Button
                            color={'primary'}
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