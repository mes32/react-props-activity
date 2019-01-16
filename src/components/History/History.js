import React, { Component } from 'react';

class History extends Component {
    render() {
        let history = this.props.history;
        let historyArr = [];
        for (let x of history) {
            historyArr.push(<li>{x}</li>);
        }
        return (
            <ul>
                {historyArr}
            </ul>
        );
    }
}

export default History;