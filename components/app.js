import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import LoanSearch from './LoanSearch';
import LoanForm from './LoanForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lnum: 0
        };
        this.updateLoan = this.updateLoan.bind(this);

    }

    updateLoan(number) {
        this.setState({lnum: number});
        console.log(number);
        //this.setState({lnum: number});
        //console.log(this.state.lnum);
    }

    render() {
        return (
            <div className="App">
                <h1> Supplemental Fannie Mae Information Form</h1>
                <LoanSearch onSubmit={this.updateLoan}/>
                The number you entered is '{this.state.lnum}'
                <LoanForm />
            </div>
    );
  }
}
export default App

window.onload = function(){
  ReactDOM.render(<App/>, document.getElementById('app'));
}
