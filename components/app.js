import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render(){
    return(
      <div>
        // Your App goes here
      </div>
    )
  }
}
export default App

window.onload = function(){
  ReactDOM.render(<App/>, document.getElementById('app'));
}
