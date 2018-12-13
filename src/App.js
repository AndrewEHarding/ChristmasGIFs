import React from 'react';
import './App.css';
import Wrapper from "./Components/Wrapper";
import Control from "./Components/Control";
import Display from "./Components/Display";
// import Button from "./Components/Button";

class App extends React.Component {

  state = {
    inputForm: "",
    gifWords: ["Snowman", "Dreidel", "Cookies"],
    gifSearch: "",
    searchLength: 0,
    giphyResponse: []
  }

  handleChange = event => {
    this.setState({ inputForm: event.target.value });
  }

  handleClick = event => {
    this.setState({ gifSearch: event.target.value });
    console.log(`Current search: ${event.target.value}`);
  }

  handleClear = () => {
    this.setState({ gifSearch: "" });
    console.log(`Search cleared`)
  }

  handleSubmit = event => {
    // Stop page reload
    event.preventDefault();

    // Function to capitalize first letter and set others to lowercase
    const capitalize = (string) => {
      if (typeof string !== 'string') return ''
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }

    // Trim and capitalize input
    let input = capitalize(this.state.inputForm.trim());

    // Prevent empty input or repeat
    if (input === "" || this.state.gifWords.indexOf(input) > -1) {
      console.log("Empty value or repeat.");
      this.setState({ inputForm: "" });
    }

    else {
      console.log(`Submit value: ${input}`);
      // Create new array that includes input
      let newArray = this.state.gifWords.concat(input);
      this.setState({ gifWords: newArray });
      this.setState({ inputForm: "" });
    }

  }

  render() {
    return (
      <Wrapper>

        <h1>Christmas GIFs</h1>

        <Control>

          {/* Input form */}
          <form onSubmit={this.handleSubmit}>
            <input className="form-control" type="text" placeholder="Add Christmas GIFs!" name="inputForm" onChange={this.handleChange.bind(this)} value={this.state.inputForm} />
            <button type="submit" className="btn btn-outline-success">Add!</button>
          </form>

          {/* Render buttons from gifWords state */}
          {this.state.gifWords.map(word => (
            <button key={word} type="button" value={word} className="btn btn-success" onClick={this.handleClick}>{word}</button>
          ))}

        </Control>

        <Display>

          Display Div
            <button type="button" className="btn btn-info" onClick={this.handleClear}>Clear GIFs</button>

        </Display>

        <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>

      </Wrapper>
    );
  }
}

export default App;