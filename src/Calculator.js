import React, {Component} from "react";

class Calculator extends Component {
  constructor(props) {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      result: '',
      operator: '+'
    };
    this.actionHandler = this.actionHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({ operator: e.target.value })
  }

  handleInputChange = (e, num) => {
    e.preventDefault();
    this.setState({
      [num]: Number(e.target.value)
    });
  };

  actionHandler = (e, num) => {
    e.preventDefault();
    if (this.state.operator === '+') {
      let x = this.state.num1 + this.state.num2;
      console.log(x)
      this.setState({result: x});
      console.log('clicked +');
    } else if (this.state.operator === '-'){
      let x = this.state.num1 - this.state.num2;
      console.log(x)
      this.setState({result: x});
      console.log('clicked -');
    } else if (this.state.operator === '*'){
      let x = this.state.num1 * this.state.num2;
      console.log(x)
      this.setState({result: x});
      console.log('clicked *');
    } else if (this.state.operator === '/'){
      let x = this.state.num1 / this.state.num2;
      console.log(x)
      this.setState({result: x});
      console.log('clicked /');
    } else {
      console.log('error')
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="number"
                 name="num1"
                 placeholder="enter your first number"
                 value={this.state.num1}
                 onChange={(e) => this.handleInputChange(e, 'num1')}
          />

          {/*<span>+</span>*/}
          <label>
            <select value={this.state.operator} onChange={this.handleChange}>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </label>

          <input type="number"
                 name="num2"
                 placeholder="enter your second number"
                 value={this.state.num2}
                 onChange={(e) => this.handleInputChange(e, 'num2')}
          />

          <button type='submit' onClick={(e) => this.actionHandler(e, 'sum')}>=</button>
          <h3>Addition results go here!</h3>
          <h5>{this.state.result}</h5>
        </div>
      </div>
    );
  }
}


export default Calculator;