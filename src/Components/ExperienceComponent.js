import React from 'react';
import {Link} from 'react-router-dom';
import {FaCheckCircle,FaTimesCircle,FaRegStar,FaStar} from "react-icons/all";
import {Button,Row,Col} from "reactstrap";
export default class ExperienceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            experiences: [
                {
                    companyName: 'Amazon',
                    author: 'Rutvik Sutaria',
                    jobType: '6 month Internship + FTE',
                    jobProfile: 'Software Development Engineer',
                    n_rounds: 3,
                    ctc: '28 Lakhs',
                    stipend: '60k',
                    receivedOffer: false,
                    date: '04/02/2020',
                    saved: false
                }
            ]
        }
    }

    onSaveClick = (e) => {
      e.preventDefault();
      this.setState({
          saved: !this.state.saved
      });
    };

    renderExperienceCard = (experience) => {
        return(
            <div className={'border border-dark rounded mr-5 mt-2'}>
                <Row>
                    <Col md={11}>
                        <Link to={'/experience1'} className={'text-dark btn-link'}>
                            <h5 className={'m-3'}>
                                {`${experience.companyName} interview experience for ${experience.jobProfile} by ${experience.author}`}
                            </h5>
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
                    {`Submission Date: ${experience.date}`}
                    <br/>
                    {`Rounds: ${experience.n_rounds}`}
                    <br/>
                    {`Received Offer:  `}{ experience.receivedOffer ? <span className={'text-success ml-1'}><FaCheckCircle /></span> : <span className={'text-danger ml-1'}><FaTimesCircle /></span>}
                    <br/>
                </div>
            </div>
        )
    };

    render() {
        const {experiences} = this.state;
        return <div>{this.renderExperienceCard(experiences[0])}</div>;
    }

}