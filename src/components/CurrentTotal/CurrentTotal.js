import React, { Component } from 'react';

class CurrentTotal extends Component {
    save = (event) => {
        this.props.saveTotal();
    }

    render() {
        return (
            <div>
                <h2>{this.props.total}</h2>
                <button onClick={this.save}>Save</button>
            </div>
        );
    }
}

export default CurrentTotal;