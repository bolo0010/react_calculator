import React from 'react';
import Screen from './Screen';
import Keyboard from './Keyboard';
import './css/App.css'

class App extends React.Component {
  state = {
    value: '',
    newValue: '',
    flag: false,
    fun: '',
    score: '',
  }

  handleClick = (e) => {
    if (this.state.score) {
      this.setState({
        score: ''
      })
    }
    if (!isNaN(Number(e.target.textContent))) {
      const textContent = Number(e.target.textContent)
      if (this.state.value.length < 15) {
        if (this.state.flag) {
          let newValue = this.state.newValue
          if (newValue[0] === '0' && newValue[1] !== '.') return
          newValue += textContent
          this.setState({
            newValue
          })
        } else {
          let value = this.state.value
          if (value[0] === '0' && value[1] !== '.') return
          value += textContent
          this.setState({
            value
          })
        }
      }
    } else {
      if (e.target.textContent === 'CE') {
        this.setState({
          value: '',
          newValue: '',
          flag: false,
          fun: '',
          score: ''
        })
      } else if (e.target.textContent === '<') {
        if (this.state.flag) {
          let newValue = this.state.newValue
          newValue = newValue.slice(0, -1)
          this.setState({
            newValue
          })
        } else {
          let value = this.state.value
          value = value.slice(0, -1)
          this.setState({
            value
          })
        }
      } else if (e.target.textContent === '/' || e.target.textContent === '+' || e.target.textContent === '-' || e.target.textContent === 'X') {
        this.setState({
          flag: true,
          fun: e.target.textContent
        })
      }
      else if (e.target.textContent === '=') {
        let score = '';
        let value = this.state.value;
        let newValue = this.state.newValue;
        if (this.state.fun === '/') {
          if (newValue === '0') {
            alert('Nie dziel przez 0!')
            return
          }
          score = value / newValue;
        } else if (this.state.fun === '+') {
          score = Number(value) + Number(newValue)
        } else if (this.state.fun === '-') {
          score = value - newValue
        } else if (this.state.fun === 'X') {
          score = value * newValue
        }
        this.setState({
          value: '',
          newValue: '',
          flag: false,
          fun: '',
          score
        })
      } else if (e.target.textContent === '.') {
        if (this.state.flag) {
          let newValue = this.state.newValue
          if (newValue.includes('.')) return
          newValue += e.target.textContent
          this.setState({
            newValue
          })
        } else {
          let value = this.state.value
          if (value.includes('.')) return
          value += e.target.textContent
          this.setState({
            value
          })
        }
      } else if (e.target.textContent === '+/-') {
        if (this.state.flag) {
          let newValue = this.state.newValue
          if (newValue === '0' || newValue === '') return
          newValue = (-newValue)
          this.setState({
            newValue
          })
        } else {
          // nie działa value i usuwanie się psuje
          let value = this.state.value
          if (value === '0' || value === '') return
          value = (-value)
          this.setState({
            value
          })
        }
      }
    }
  }

  render() {
    return (
      <>
        <Screen value={this.state.value} newValue={this.state.newValue} flag={this.state.flag} score={this.state.score} />
        <Keyboard click={this.handleClick} />
      </>
    );
  }
}

export default App;