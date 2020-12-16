import React, { Component} from 'react';
import './App.css';
import Keypads from "./Components/Keypads";
import Results from './Components/Results';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  // Functions for calclation

  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.delete()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
      }
  };

  calculate = () => {
    var checkResult = ''
    if(this.state.result.includes('--')){
      checkResult = this.state.result.replace('--','+')
    }
    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        result: (eval(this.state.result) || "" ) + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render(){
    return (
      <div>
        <div className="calculator">
          <h1>Calculator</h1>
          <Results result={this.state.result}/>
          <Keypads onClick={this.onClick}/>
        </div>
      </div>
    );
  }

}

export default App;
