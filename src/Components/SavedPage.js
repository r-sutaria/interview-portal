import React from 'react';
export default class SavedPage extends React.Component {
    constructor(props) {
        super(props);
    }

    round = {
        id: '1',
        title: 'Online Coding Round',
        details: 'There were two questions. All the students that fully solved ' +
            'both the questions got selected for the next round' +
            'The first question was related to simple binary search. Linear search was not allowed.' +
            'The second question could be solved using simple DFS/BFS.'
    };

    renderRound = (round) => {
        return(
            <div>
                <h5>
                    Round {round.id} : ({round.title})
                </h5>
                <p style={{fontSize:18}}>
                    {round.details}
                </p>
            </div>
        )
    };

    render() {
        return(
            <div>
                {this.renderRound(this.round)}
            </div>
        );
    }

}