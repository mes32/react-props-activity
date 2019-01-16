import React, { Component } from 'react';

// Represents a display of current total with a 'Save' button. Pressing the 
// 'save' button will append the current total to the history.
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