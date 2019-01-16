import React, { Component } from 'react';

class EnterNumber extends Component {

    constructor() {
        super();
        this.state = {
            entered: '',
        }
    }

    pressedUp = (event) => {
        if (this.state.entered !== '') {
            let amount = Number(this.state.entered);
            this.props.currentUp(amount);
        }
    }

    pressedDown = (event) => {
        if (this.state.entered !== '') {
            let amount = Number(this.state.entered);
            this.props.currentDown(amount);
        }
    }

    enteredNumber = (event) => {
        this.setState({
            entered: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.pressedUp}>Up</button>
                <input type="number" onChange={this.enteredNumber} placeholder="Enter Number" />
                <button onClick={this.pressedDown}>Down</button>
            </div>
        );
    }
}

export default EnterNumber;