import React, { Component } from 'react';

// Component repsenting form for entering numbers to add/subtract from the 
// current total, and buttons for 'Up' (add) and 'Down' (subtract).
class EnterNumber extends Component {

    constructor() {
        super();
        this.state = {
            entered: '',
        }
    }

    // Event handler for 'Up' button
    // Takes the currently entred value and increases the current total
    pressedUp = (event) => {
        if (this.state.entered !== '') {
            let amount = Number(this.state.entered);
            this.props.currentUp(amount);
        }
    }

    // Event handler for 'Down' button
    // Takes the currently entred value and decreases the current total
    pressedDown = (event) => {
        if (this.state.entered !== '') {
            let amount = Number(this.state.entered);
            this.props.currentDown(amount);
        }
    }

    // Event handler for input field
    // Takes the currently entred value and updates this component's state
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