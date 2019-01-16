import React, { Component } from 'react';

class EnterNumber extends Component {

    constructor() {
        super();
        this.state = {
            entered: undefined,
        }
    }

    pressedUp = (event) => {
        this.props.currentUp(1);
    }

    pressedDown = (event) => {
        this.props.currentDown(1);
    }

    render() {
        return (
            <div>
                <button onClick={this.pressedUp}>Up</button>
                <input placeholder='Enter Number' />
                <button onClick={this.pressedDown}>Down</button>
            </div>
        );
    }
}

export default EnterNumber;