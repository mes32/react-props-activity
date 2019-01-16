import React, { Component } from 'react';

class CurrentTotal extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.total}</h2>
                <button>Save</button>
            </div>
        );
    }
}

export default CurrentTotal;