import React from 'react';
import ExperienceCard from "./ExperienceCard";
export default class ReviewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {
                companyName: 'Amazon',
                author: 'Rutvik Sutaria',
                jobType: '6 month Internship + FTE',
                jobProfile: 'Software Development Engineer',
                n_rounds: 3,
                ctc: '28 Lakhs',
                stipend: '60k',
                receivedOffer: true,
                date: '04/02/2020',
                saved: false,
                helpful: 56,
                accepted: false
            }
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
            <div>
                {
                    this.state.experiences.map(experience => {
                            return(!experience.accepted ? <ExperienceCard experience={experience} onSaveClick={this.onSaveClick}/>
                                    : <div />
                            )
                        }
                    )
                }
                <ExperienceCard experience={this.state.experience} onSaveClick={this.onSaveClick}/>
            </div>
        );
    }

}