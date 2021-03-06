import React from 'react';
import './App.css';
import Wrapper from "./Components/Wrapper";
import Control from "./Components/Control";
import Display from "./Components/Display";
import Gif from "./Components/Gif";

const API_KEY = `${process.env.REACT_APP_GIPHY_API_KEY}`;

class App extends React.Component {

  state = {
    isLoaded: false,
    error: false,
    inputForm: "",
    gifWords: ["Cookies", "Gingerbread", "Mittens", "Mistletoe", "Presents", "Reindeer", "Snowman", "Sleigh"],
    gifSearch: "",
    searchLength: 40,
    giphyResponse: []
  }

  handleChange = event => {
    this.setState({ inputForm: event.target.value })
  }

  handleClick = event => {
    this.setState(
      { gifSearch: event.target.value },
      () => {
        console.log(`Current search: ${this.state.gifSearch}`)
        this.handleFetch()
      }
    )

  }

  handleClear = () => {
    this.setState({ giphyResponse: [] },
      () => {
        console.log(`Search cleared`)
      }
    );
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

  handleFetch = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.gifSearch}&api_key=${API_KEY}&limit=${this.state.searchLength}&rating=g`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            giphyResponse: result.data
          });
          console.log(result.data);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <Wrapper>

        <h1>Christmas GIFs</h1>

        <Control>

          {/* Input form */}
          <form className="control-form row" onSubmit={this.handleSubmit}>
            <input className="form-control col" type="text" placeholder="Add Christmas GIFs!" name="inputForm" onChange={this.handleChange.bind(this)} value={this.state.inputForm} />
            <div className="col"><button type="submit" className="btn btn-danger">Add!</button></div>
          </form>

          <hr></hr>

          {/* Render buttons from gifWords state */}
          {this.state.gifWords.map(word => (
            // Alternate green and red buttons
            (this.state.gifWords.indexOf(word) % 2 === 1) ?
              <button key={word} type="button" value={word} className="btn btn-success" onClick={this.handleClick.bind(this)}>{word}</button>
              :
              <button key={word} type="button" value={word} className="btn btn-danger" onClick={this.handleClick.bind(this)}>{word}</button>
          ))}

        </Control>

        <Display>
          <button type="button" className="btn btn-info" onClick={this.handleClear}>Clear GIFs</button>

          <hr></hr>

          {
            (this.state.giphyResponse.length === 0) ?
              <h2>Click a button to load some Christmas GIFs!</h2>
              :
              <div className="gif-div clearfix">
                <h2>Click on a GIF to animate it!</h2>

                {this.state.giphyResponse.map(gif => (

                  <Gif
                    key={gif.id}
                    still={gif.images.fixed_height_still.url}
                    animate={gif.images.fixed_height.url}
                  />

                ))}

              </div>
          }

        </Display>

        <p className="footer">
          Creator portfolio <a href="http://ahardingdesign.me/" title="Portfolio" target="_blank" rel="noopener noreferrer">AHardingDesign.me</a> | 
          Site repository <a href="https://github.com/AndrewEHarding/ChristmasGIFs" title="Repository" target="_blank" rel="noopener noreferrer">ChristmasGIFs</a> | 
          Photo by <a href="https://www.freestocks.org" title="Freestocks" target="_blank" rel="noopener noreferrer">freestocks.org</a> from Pexels | 
          Icons made by <a href="https://www.freepik.com/" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
        </p>

      </Wrapper>
    );
  }
}

export default App;