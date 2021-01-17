import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userName: 'old userName',
    inputText: ''
  }

  changeUserNameHandler = (event) => {
    this.setState({ userName: event.target.value })
  }

  changeTextHandler = (event) => {
    this.setState({ inputText: event.target.value })
  }

  deleteCharHandler = (index) => {
    const text = this.state.inputText.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ inputText: updatedText });
  }
  render() {

    const charList = this.state.inputText.split('').map((ch, index) => {
      return (<Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)} />)
    });

    const style = {
      width: "50%",
      margin: "22px auto",
      backgroundColor: "#ccc",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      borderRadius: "7px"
    };


    return (

      <div className="App" style={style}>
        <h1>Hello World</h1>

        <button>Button</button>

        <hr />
        <UserInput changeUsername={this.changeUserNameHandler} userName={this.state.userName} />
        <UserOutput username={this.state.userName} />
        <hr />

        <input type="text" onChange={this.changeTextHandler} value={this.state.inputText} />
        <p>{this.state.inputText}</p>
        <Validation inputLength={this.state.inputText.length} />

        {charList}
      </div>
    );
  }
}

export default App;
