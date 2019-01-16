import React, { Component } from 'react';

// Component represeting the history of saved totals
class History extends Component {
    render() {
        let historyArr = this.props.history;
        return (
            <ul>
                { historyArr.map(x => <li>{x}</li>) }
            </ul>
        );
    }
}

export default History;