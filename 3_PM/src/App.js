import React, { Component } from "react"
import "./App.css"
import { thisExpression } from "@babel/types";

const WinMessage = (props) => <div>{props.won ? "You won, a new number has been generated" : "You lost, try again"}</div>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomValue: Math.floor(Math.random() * 10),
      guess: this.randomValue,
      hintGuess: 0,
      streak: 0,
      lives: 3,
      started: false,
      win: false,
      streakOver: false,
      gameOver: false,
    }
  }

  updateGuess = event => {
    event.preventDefault()

    this.setState({ guess: parseInt(event.target.value) })
  }

  genNewNum = () => {this.setState({randomValue: Math.floor(Math.random() * 10)})}

  hint = (props) => {
    if (!this.state.started) {
      return (<h3></h3>)
    }

    if (this.state.randomValue - this.state.hintGuess <= 2) {
      return (<h3>Hint: Your guess was very close</h3>)
    } else if (this.state.randomValue - this.state.hintGuess <= 4) {
      return (<h3>Hint: Your guess was close</h3>)
    } else if (this.state.randomValue - this.state.hintGuess === 5) {
      return (<h3>Hint: Your guess was neither close nor far</h3>)
    } else if (this.state.randomValue - this.state.hintGuess >= 6) {
      return (<h3>Hint: Your guess was slightly off</h3>)
    } else if (this.state.randomValue - this.state.hintGuess >= 8) {
      return (<h3>Hint: Your guess was very off</h3>)
    } else {
      return (<h3>Hint: Your guess was invalid</h3>)
    }
  }

  restart = event => {
    event.preventDefault()

    window.location.reload()
  }

  checkWin = event => {
    event.preventDefault()

    this.setState({hintGuess: this.state.guess})
    
    if (this.state.guess === this.state.randomValue) {
      this.setState({win: true})
      this.setState({streak: this.state.streak + 1})
      this.setState({lives: this.state.lives + 1})
      this.setState({started: false})

      this.genNewNum()
    } else {
      this.setState({win: false})
      this.setState({streak: 0})
      this.setState({lives: this.state.lives - 1})
      this.setState({started: true})

      this.checkGameOver()
    }
  }

  checkGameOver = (props) => {
    if (this.state.lives <= 0) {
      return (<div id="gameOver">
        <h1>You lost all your lives, try again?</h1>
        <button onClick={this.restart}>Try again</button>
      </div>)
    } else {
      return (<div></div>)
    }
  }

  render() {
    return (
      <div className="App">
        <this.checkGameOver />
        <div id="gameDiv">
          <h1>The Guessing Game</h1>
          <br />
          <br />
          <form>
            <label>
              <span name="guessText">Enter a guess:</span>
              <input
                type="number"
                value={this.state.guess}
                onChange={this.updateGuess}
              />
            </label>
            <br />
            <br />
            <input type="submit" value="Submit" onClick={this.checkWin} />
          </form>
          {<WinMessage won={this.state.win}/>}
          <br />
          <br />
          <h2>Your current winstreak is {this.state.streak}</h2>
          <h2>You have {this.state.lives} lives</h2>
          <br />
          <br />
          <this.hint />
        </div>
      </div>
    )
  }
}


export default App
