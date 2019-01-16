import React, { Component } from 'react';

class EnterNumber extends Component {
    render() {
        return (
            <div>
                <button>Up</button>
                <input placeholder='Enter Number' />
                <button>Down</button>
            </div>
        );
    }
}

export default EnterNumber;