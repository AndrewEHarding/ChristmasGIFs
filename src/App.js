import React from 'react';
import './App.css';
import Wrapper from "./Components/Wrapper";
import Control from "./Components/Control";
import Button from "./Components/Button";

class App extends React.Component {

  clog = console.log

  state = {
    gifWords: ["Snowman", "Dreidel", "Cookies"],
    gifList: []
  }

  render() {
    return (
      <Wrapper>
        Hello World!

        <Control>
          Control Div
          {this.state.gifWords.map(word => (
            <Button word={word} />
          ))}
        </Control>

      </Wrapper>
    );
  }
}

{/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */ }

export default App;