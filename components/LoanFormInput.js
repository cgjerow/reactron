import React, { Component } from 'react';

class LoanFormInput extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                {this.props.header}
                <input type={this.props.type} name={this.props.name} onChange={this.props.onChange}></input>
                <br />
            </div>
        );
    }
}

export default LoanFormInput;