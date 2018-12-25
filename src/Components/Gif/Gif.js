import React from 'react';
import './Gif.css';

class Gif extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            src: props.still,
            still: props.still,
            animate: props.animate
        };
    }

    handleClick = event => {
        (event.target.src === this.state.animate) ?
            this.setState({ src: this.state.still })
            :
            this.setState({ src: this.state.animate })

    }

    render() {
        return (
            <img
                src={this.state.src}
                alt="Christmas GIF"
                className="img-thumbnail christmas-gif"
                onClick={this.handleClick}
            />
        );
    }
}

export default Gif;