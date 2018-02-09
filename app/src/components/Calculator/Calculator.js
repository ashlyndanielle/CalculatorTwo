import React, { Component } from 'react';

import calculatorImg from '../../calculator.png';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "",
      display: '0',
      temp: 0,
      operator: '',
      resetDisplay: false
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }

  handleKeyPress = target => {
    console.log(target.key)
    switch( target.key ) {
      case '0':
        this.setDisplay('0')
        break;
      case '1':
        this.setDisplay('1')
        break;
      case '2':
        this.setDisplay('2')
        break;
      case '3':
        this.setDisplay('3')
        break;
      case '4':
        this.setDisplay('4')
        break;
      case '5':
        this.setDisplay('5')
        break;
      case '6':
        this.setDisplay('6')
        break;
      case '7':
        this.setDisplay('7')
        break;
      case '8':
        this.setDisplay('8')
        break;
      case '9':
        this.setDisplay('9')
        break;
      case 'Enter':
        this.calculate();
        break;
      case '*':
        this.setOperator('*');
        break;
      case '/':
        this.setOperator('/');
        break;
      case '+':
        this.setOperator('+');
        break;
      case '-':
        this.setOperator('-');
        break;
      default:
        break;
    }
  }

  setDisplay = num => {
    var display = (this.state.display === '0' || this.state.resetDisplay === true ) ? num : this.state.display + num;
    if (this.state.resetDisplay) {
      this.setState({
        resetDisplay: false
      })
    }
    this.setState({
      display: (this.state.display.length < 13) ? display : this.state.display
    })
  }

  updateHeader = e => {
    this.setState({
      header: e.target.value
    })
  }

  clear = () => {
    this.setState({
      display: '0',
      operator: ''
    })
  }
  
  setOperator = operator => {
    if (!this.state.operator) {
      this.setState({
        operator,
        temp: parseInt(this.state.display, 10),
        display: '0'
      })
    }
  }

  calculate = () => {
    var display = parseInt(this.state.display, 10);
    var temp = this.state.temp;
    if (!this.state.operator) {
      return;
    }
    var total = 0;
    switch (this.state.operator) {
      case '*':
        total = temp * display;
        break;
      case '/':
        total = temp / display;
        break;
      case '+':
        total = temp + display;
        break;
      case '-':
        total = temp - display;
        break;
      default:
        break;
    }
    this.setState({
      temp: '0',
      display: total.toString(),
      operator: '',
      resetDisplay: true
    })
  }

  render() {

    
    return (
      <div id="calculator-container" onKeyPress={ this.handleKeyPres }>
        <input id="header-input" onChange={ e => this.updateHeader(e)} value={this.state.header} placeholder="Calculator Title"/>
        <h1 id="header"> {this.state.header} </h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total">{this.state.display}</span>
          </div>

          <div className="btn clear" onClick={ this.clear }></div>

          <div className="btn zero" onClick={ () => this.setDisplay('0')}></div>
          <div className="btn one" onClick={ () => this.setDisplay('1')}></div>
          <div className="btn two" onClick={ () => this.setDisplay('2')}></div>
          <div className="btn three" onClick={ () => this.setDisplay('3')}></div>
          <div className="btn four" onClick={ () => this.setDisplay('4')}></div>
          <div className="btn five" onClick={ () => this.setDisplay('5')}></div>
          <div className="btn six" onClick={ () => this.setDisplay('6')}></div>
          <div className="btn seven" onClick={ () => this.setDisplay('7')}></div>
          <div className="btn eight" onClick={ () => this.setDisplay('8')}></div>
          <div className="btn nine" onClick={ () => this.setDisplay('9')}></div>

          <div className="btn equal" onClick={ this.calculate }></div>
          <div className="btn multiply" onClick={ () => this.setOperator('*') }></div>
          <div className="btn divide" onClick={ () => this.setOperator('/') }></div>
          <div className="btn subtract" onClick={ () => this.setOperator('-') }></div>
          <div className="btn add" onClick={ () => this.setOperator('+') }></div>
        </div>
      </div>
    );
  }
}

export default Calculator;
