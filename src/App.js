import React from 'react';
import './App.css';
import Wrapper from "./Components/Wrapper";
import Control from "./Components/Control";
import Button from "./Components/Button";

class App extends React.Component {

  state = {
    inputForm: "",
    gifWords: ["Snowman", "Dreidel", "Cookies"],
    gifList: []
  }

  handleChange = event => {
    this.setState({ inputForm: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    let input = this.state.inputForm.trim();
    console.log(`Submit value: ${input}`);
    let newArray = this.state.gifWords.concat(input);
    this.setState({ gifWords: newArray });
    this.setState({ inputForm: "" })
  }

  render() {
    return (
      <Wrapper>

        <h1>Christmas GIFs</h1>

        <Control>

          <form onSubmit={this.handleSubmit}>
            <input className="form-control" type="text" placeholder="Add Christmas GIFs!" name="inputForm" onChange={this.handleChange.bind(this)} value={this.state.inputForm} />
            <button type="submit" className="btn btn-outline-success">Add!</button>
          </form>

          {/* Render Buttons from gifWords state */}
          {this.state.gifWords.map(word => (
            <Button key={word} word={word} />
          ))}

        </Control>

        <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>

      </Wrapper>
    );
  }
}

export default App;